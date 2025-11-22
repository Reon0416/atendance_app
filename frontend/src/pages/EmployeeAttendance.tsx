import { AttendanceButtons } from "../components/AttendanceButtons";
import { RealTimeClock } from "../components/RealTimeClock";
import type { User } from "../types";
import "./style/EmployeeAttendance.css"

type Props = {
  user: User;
  onLogout: () => void;
};

function EmployeeAttendance({ user, onLogout }: Props) {
  return (
    <div className="main-container">
      <div className="card">
        <p className="username">名前：{user.name}</p>

        <div className="clock-area">
          <RealTimeClock />
        </div>

        <div className="attendance-buttons-wrapper">
          <AttendanceButtons />
        </div>

        <button className="logout-button" onClick={onLogout}>
          ログアウト
        </button>
      </div>
    </div>
  );
}

export default EmployeeAttendance;
