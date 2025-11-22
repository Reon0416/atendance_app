"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resisterAttendanceHandler = resisterAttendanceHandler;
// Import enums directly from generated Prisma client. The default entry in
// `@prisma/client` relies on imports that fail in our environment.
const client_1 = require("../node_modules/.prisma/client");
const prismaClient_1 = require("./prismaClient");
async function resisterAttendanceHandler(req, res) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "未ログインです" });
    }
    const action = req.body;
    const validActions = [
        client_1.AttendanceAction.CLOCK_IN,
        client_1.AttendanceAction.CLOCK_OUT,
        client_1.AttendanceAction.BREAK_START,
        client_1.AttendanceAction.BREAK_END,
    ];
    //actionがAttendanceActionに含まれていない値の場合
    if (!validActions.includes(action)) {
        return res.status(400).json({
            message: "不正な action です。",
        });
    }
    try {
        const attendance = await prismaClient_1.prisma.attendance.create({
            data: {
                employeeId: user.id,
                action: action
            }
        });
        return res.status(201).json(attendance);
    }
    catch (error) {
        console.error("登録できませんでした:", error);
        return res.status(500).json({ message: "勤怠情報の登録に失敗しました" });
    }
}
