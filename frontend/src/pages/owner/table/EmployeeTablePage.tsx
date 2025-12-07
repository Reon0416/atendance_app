import { HeaderOwner } from "../HeaderOwner";
import { EmployeeListTable } from "./EmployeeListTable";


type Props = {
  onLogout: () => void;
};

function EmployeeTablePage
({ onLogout }: Props) {
  return (
    <div className="owner-wapper">
      <HeaderOwner onLogout={onLogout} />
      <div className="ownerDash-container">
        < EmployeeListTable />
      </div>
    </div>
  );
}

export default EmployeeTablePage;