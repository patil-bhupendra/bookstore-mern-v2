import {  createContext, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

// authProvider

export const authProvider = ({children}) => {



    const value = {

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}