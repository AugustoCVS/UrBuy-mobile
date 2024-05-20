import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

export type AuthContextProps = {
  id: number;
  name: string;
  email: string;
  cnpj: string;
};

export type AuthProviderProps = {
  states: {
    user: AuthContextProps | undefined;
    token: string;
  };
  actions: {
    setUser: React.Dispatch<React.SetStateAction<AuthContextProps | undefined>>;
    setToken: React.Dispatch<React.SetStateAction<string>>;
  };
};

export const AuthContext = createContext<AuthProviderProps>(
  {} as AuthProviderProps
);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthContextProps | undefined>();
  const [token, setToken] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        states: { user, token },
        actions: { setUser, setToken },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
