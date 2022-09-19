import React, { createContext } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    
    const [isAuth, setAuth] = useState(false); // setting login as false 

    const handleAuth = (requestLogin) => {
        setAuth(requestLogin);
    }

  return (
    <AuthContext.Provider value = {[isAuth, handleAuth]}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;