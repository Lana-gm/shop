import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
