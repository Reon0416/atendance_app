import { useState, useEffect } from "react";
import { getEmployeeList } from "../api/healthCheck";
import { fetchMonthlyPayroll } from "../api/payroll";
import type { PayrollResult } from "../api/payroll";
import type { Employee } from "../types";
import "./style/EmployeeListTable.css";
type FullPayrollSummary = PayrollResult & {
  name: string;
};

export function EmployeeListTable() {
  const [allPayrollData, setAllPayrollData] = useState<FullPayrollSummary[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [totalSalary, setTotalSalary] = useState<number>(0);

  useEffect(() => {
    const loadAllPayroll = async () => {
      setIsLoading(true);

      const employees: Employee[] = await getEmployeeList();

      const payrollPromises = employees.map(async (emp) => {
        const payrollResult = await fetchMonthlyPayroll(emp.id);

        return {
          ...payrollResult,
          name: emp.name,
        };
      });

      const results = await Promise.all(payrollPromises);
      setAllPayrollData(results);

      const total = results.reduce((sum, data) => sum + data.totalPay, 0);
      setTotalSalary(total);

      setIsLoading(false);
    };

    loadAllPayroll();
  }, []);

  if (isLoading)
    return <div className="loading-state">全従業員の給与情報をロード中...</div>;

  return (
    <div className="payroll-summary-container">
      <h2>全従業員 給与レポート ({allPayrollData[0]?.month}月分)</h2>
      <table className="payroll-table">
        <thead>
          <tr>
            <th>従業員名</th>
            <th>通常勤務時間</th>
            <th>深夜勤務時間</th>
            <th>合計支払額 (¥)</th>
          </tr>
        </thead>
        <tbody>
          {allPayrollData.map((data) => (
            <tr key={data.employeeId}>
              <td>{data.name}</td>
              <td>{data.totalNormalHours}時間</td>
              <td>{data.totalLateNightHours}時間</td>
              <td>{data.totalPay.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3} className="total-label">
              全従業員 合計支払額
            </td>
            <td className="total-amount">{totalSalary.toLocaleString()}円</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
