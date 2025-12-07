import React, { useState } from "react";
import { resisterNewUser } from "../../../api/account";
import type { AccountRegisterBody, AccountRegisterResponse } from "../../../types";
import "../../style/Setting.css";

export function EmployeeAccountSetting() {

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (password !== passwordConfirm) {
      setMessage("パスワードと確認用パスワードが一致しません。");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setMessage("パスワードは8文字以上である必要があります。");
      setLoading(false);
      return;
    }

    const data: AccountRegisterBody = { userId, name, password };

    const response: AccountRegisterResponse = await resisterNewUser(data);

    setMessage(`アカウント ${response.user.userId} が正常に作成されました。`);

    setLoading(false);
  };

  return (
    <div className="setting-form-card">
      <h2>新規アカウント作成</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {message && (
          <p
            className={`message ${
              message.includes("8文字以上") || message.includes("一致しません")
                ? "error"
                : "success"
            }`}
          >
            {message}
          </p>
        )}

        <label>名前</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>メールアドレス (ユーザーID)</label>
        <input
          type="email"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label>パスワード (8文字以上)</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>パスワード（確認）</label>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "登録中..." : "アカウントを作成"}
        </button>
      </form>
    </div>
  );
}
