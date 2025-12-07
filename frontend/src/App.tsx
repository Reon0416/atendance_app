import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import type { User } from "./types";
import LoginPage from "./pages/Login/LoginPage";
import HealthPage from "./pages/employee/health/HealthPage";
import EmployeeTablePage from "./pages/owner/table/EmployeeTablePage";
import SettingOwnerPage from "./pages/owner/setting/SettingOwnerPage";
import HistoryAttendancePage from "./pages/employee/history/HistoryAttendancePage";
import SettingEmpPage from "./pages/employee/setting/SettingEmpPage";
import PayrollPage from "./pages/employee/payroll/PayrollPage";
import AttendancePage from "./pages/employee/attendance/AttendancePage";
import OwnerPage from "./pages/owner/health/OwnerPage";

function App() {
  const { user, initialLoading, handleLoginSuccess, error, handleLogout } =
    useAuth();
  

  if (initialLoading) {
    return (
      <div className="text-3xl font-bold text-blue-600">
        ログイン状態を確認しています…
      </div>
    );
  }

  return (
    <div className="font-sans">
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage
                onLogin={handleLoginSuccess}
              />
            )
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute user={user}>
              <AttendancePage user={user as User} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/owner"
          element={
            <ProtectedRoute user={user}>
              <OwnerPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/table"
          element={
            <ProtectedRoute user={user}>
              <EmployeeTablePage  onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settingOwner"
          element={
            <ProtectedRoute user={user}>
              <SettingOwnerPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute user={user}>
              <HistoryAttendancePage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/health"
          element={
            <ProtectedRoute user={user}>
              <HealthPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settingEmp"
          element={
            <ProtectedRoute user={user}>
              <SettingEmpPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payroll"
          element={
            <ProtectedRoute user={user}>
              <PayrollPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            user ? (
              <Navigate
                to={user.role === "OWNER" ? "/owner" : "/employee"}
                replace
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
