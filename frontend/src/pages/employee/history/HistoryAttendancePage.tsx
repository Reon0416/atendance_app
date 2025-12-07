import { AttendanceHistoryData } from "./AttendanceHistoryData";
import { HeaderEmp } from "../HeaderEmp";

type Props = {
  onLogout: () => void;
};

function HistoryAttendancePage({ onLogout }: Props) {
  return (
    <div>
      <HeaderEmp onLogout={onLogout} />
      <AttendanceHistoryData />
    </div>
  );
}

export default HistoryAttendancePage;
