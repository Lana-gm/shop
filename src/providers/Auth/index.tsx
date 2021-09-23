import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [auth, setAuth] = useState(false);

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    token && setAuth(true);
  }, [token]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
