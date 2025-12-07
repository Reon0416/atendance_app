import { useState } from "react";
import { GoalInput } from "./GoalInput";
import { GoalTracker } from "./GoalTracker";
import { PayrollDisplay } from "./PayrollDisplay";
import { HeaderEmp } from "../HeaderEmp";
import "./style/PayrollPage.css";

type Props = {
  onLogout: () => void;
};

function PayrollPage({ onLogout }: Props) {
  const [reloadKey, setReloadKey] = useState(0);

  const handleGoalSet = () => {
    setReloadKey((prev) => prev + 1);
  };

  return (
    <div>
      <HeaderEmp onLogout={onLogout} />
      <div className="pay-container">
        <div className="goal-card">
          <GoalTracker reloadKey={reloadKey} />
          <GoalInput onGoalSet={handleGoalSet} />
        </div>
        <div className="payroll-card">
          <PayrollDisplay />
        </div>
      </div>
    </div>
  );
}

export default PayrollPage;
