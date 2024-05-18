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
  };
  actions: {
    setUser: React.Dispatch<React.SetStateAction<AuthContextProps | undefined>>;
  };
};

export const AuthContext = createContext<AuthProviderProps>(
  {} as AuthProviderProps
);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthContextProps | undefined>();

  return (
    <AuthContext.Provider
      value={{
        states: { user },
        actions: { setUser },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
