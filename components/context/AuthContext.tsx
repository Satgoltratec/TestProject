import React, {PropsWithChildren, useContext, useState} from 'react';

type AuthContextProviderProps = {
  children: React.ReactElement & React.ReactNode;
};

interface ContextType {
  signedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<ContextType>({} as ContextType);

function AuthProvider({children}: PropsWithChildren) {
  const [signedIn, setSignedIn] = useState(false);

  const login = (username: string, password: string) => {
    // fetch o lo que sea a la api
    setSignedIn(true);
  };

  const logout = () => {
    // llamar a la api para hacer logout
    setSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{signedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthProvider;
