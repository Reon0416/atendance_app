"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./auth");
const attendance_1 = require("./attendance");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
// ルーティング‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐
// ログイン
app.post("/api/auth/login", auth_1.loginHandler);
// ログイン中ユーザー情報
app.get("/api/auth/me", auth_1.authMiddleware, auth_1.meHandler);
// ログアウト
app.post("/api/auth/logout", auth_1.authMiddleware, auth_1.logoutHandler);
// 勤怠情報登録
app.post("api/attendance/resister", auth_1.authMiddleware, attendance_1.resisterAttendanceHandler);
// 動作確認用
app.get("/", (req, res) => {
    res.send("backend is running");
});
// サーバー起動
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
