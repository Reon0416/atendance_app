import express from "express";
import { payrollHandler } from "../calculation";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// 給与取得
router.get("/payroll", authMiddleware, payrollHandler);

export default router;