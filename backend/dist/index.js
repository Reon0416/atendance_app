import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { loginHandler, authMiddleware, meHandler } from "./auth.js";
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
// ログイン
app.post("/api/auth/login", loginHandler);
// ログイン中ユーザー情報
app.get("/api/auth/me", authMiddleware, meHandler);
// 動作確認用
app.get("/", (req, res) => {
    res.send("backend is running");
});
// サーバー起動
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map