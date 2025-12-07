import { useAttendanceHistory } from "../hooks/useAttendanceHistory";
import type { AttendanceActionType } from "../types";
import "./style/AttendanceHistoryData.css"

const actionToLabel = (action: AttendanceActionType) => {
  switch (action) {
    case "CLOCK_IN":
      return "出勤";
    case "CLOCK_OUT":
      return "退勤";
    case "BREAK_START":
      return "休憩開始";
    case "BREAK_END":
      return "休憩終了";
    default:
      return "不明";
  }
};

const formatTime = (isoString: string) => {
  return new Date(isoString).toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

const formatDateTitle = (dateKey: string) => {
  const date = new Date(dateKey);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
};

export function AttendanceHistoryData() {
  const { groupedRecords, isLoading, error, refreshHistory } = useAttendanceHistory();

  if (isLoading) {
    return <div className="history-status">履歴をロード中です...</div>;
  }

  if (error) {
    return <div className="history-status error">エラー: {error}</div>;
  }

  const workDays = Object.keys(groupedRecords);

  if (workDays.length === 0) {
    return <div className="history-status">今月の打刻履歴はありません。</div>;
  }

  return (
    <div className="attendance-history">
      <h2>今月の打刻履歴</h2>
      <button onClick={refreshHistory} className="refresh-button">
        更新
      </button>

      {workDays.map((workDayKey) => (
        <div key={workDayKey} className="work-day-group">
          <h3 className="work-day-title">
            {formatDateTitle(workDayKey)} の勤務
          </h3>

          <table className="history-table">
            <thead>
              <tr>
                <th>アクション</th>
                <th>打刻時刻</th>
              </tr>
            </thead>
            <tbody>
              {groupedRecords[workDayKey].map((record) => (
                <tr
                  key={record.id}
                  className={`action-${record.action.toLowerCase()}`}
                >
                  <td>{actionToLabel(record.action)}</td>
                  <td>{formatTime(record.occurredAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
