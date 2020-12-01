import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
   const [logeado, setLogeado] = useState(false);

   return (
      <AuthContext.Provider value={{
         logeado, setLogeado
      }}>{children}</AuthContext.Provider>
   )
}

export const useAuthContext = () => useContext(AuthContext)