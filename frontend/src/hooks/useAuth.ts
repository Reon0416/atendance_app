import { useEffect, useState } from "react";
import { fetchMe, logout } from "../api/auth";
import type { User } from "../types";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadMe = async () => {
      try {
        const me = await fetchMe();
        if (me) setUser(me);
      } catch (err) {
        console.error(err);
        setError("ログイン状態の確認に失敗しました");
      } finally {
        setInitialLoading(false);
      }
    };
    loadMe();
  }, []);

  const handleLoginSuccess = (user: User) => {
    setUser(user);
    setError("");
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    } finally {
      setUser(null);
    }
  };

  return {
    user,
    initialLoading,
    handleLoginSuccess,
    error,
    handleLogout,
  };
};
