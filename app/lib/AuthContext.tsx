import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = { id: string; email: string } | null;

type AuthContextType = {
  user: User;
  initializing: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Restore auth state if you have persistence; omitted here
    setInitializing(false);
  }, []);

  const login = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required.");
    // Replace with your real login; this just sets a fake user.
    setUser({ id: "123", email });
  };

  const logout = async () => {
    setUser(null);
  };

  const signup = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required.");
    // Replace with your real signup; log the user in afterwards.
    setUser({ id: "123", email });
  };

  const value = useMemo(
    () => ({ user, initializing, login, logout, signup }),
    [user, initializing]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}