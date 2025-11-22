export type Role = "EMPLOYEE" | "OWNER";

export type User = {
  id: number;
  userId: string;
  name: string;
  role: Role;
};

export type AttendanceActionType = "CLOCK_IN" | "CLOCK_OUT" | "BREAK_START" | "BREAK_END";