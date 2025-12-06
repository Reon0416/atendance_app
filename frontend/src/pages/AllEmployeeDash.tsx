import { HeaderOwner } from "../components/HeaderOwner";
import { EmployeeListTable } from "../components/EmployeeListTable";


type Props = {
  onLogout: () => void;
};

function AllEmployeeDash({ onLogout }: Props) {
  return (
    <div className="owner-wapper">
      <HeaderOwner onLogout={onLogout} />
      <div className="ownerDash-container">
        < EmployeeListTable />
      </div>
    </div>
  );
}

export default AllEmployeeDash;