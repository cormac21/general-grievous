import React, {useContext, useState} from 'react';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
      //logica de criação de usuario
  }

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthProvider.Provider >
      {children}
    </AuthProvider.Provider>
  )
}
