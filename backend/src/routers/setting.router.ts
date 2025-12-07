import express from "express";
import {
  accountRegisterHandler,
  updatePasswordHandler,
  updateUserIdHandler,
  updateRateHandler,
} from "../setting";
import { authMiddleware } from "../middlewares/authMiddleware";
import { verifyPasswordMiddleware } from "../middlewares/verifyPasswordMiddleware";

const router = express.Router();

//アカウント新規作成
router.post("/account", authMiddleware, accountRegisterHandler);

// パスワードの更新
router.put(
  "/password",
  authMiddleware,
  verifyPasswordMiddleware,
  updatePasswordHandler
);

// ユーザーIDの更新
router.put(
  "/userId",
  authMiddleware,
  verifyPasswordMiddleware,
  updateUserIdHandler
);

// 時給の更新
router.put("/rate", authMiddleware, updateRateHandler);

export default router;
