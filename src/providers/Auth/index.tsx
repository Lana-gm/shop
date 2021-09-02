// import { createContext } from "react";
// import { useState, useEffect } from "react";

// interface IAuth {
//   auth: boolean;
// }

// interface IAuthProviderProps {
//   children: React.ReactNode;
// }

// interface IAuthProviderData {
//     auth: IAuth | ""
// }

// const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

// export const AuthProvider = ({ children }: IAuthProviderProps) => {
//   const [auth, setAuth] = useState<IAuth>();

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("@KenzieHop:token");

//     if (token) {
//       return setAuth(true);
//     }
//   }, [auth]);

const Auth = () => {
  return <h1>Hello</h1>;
};

export default Auth;
