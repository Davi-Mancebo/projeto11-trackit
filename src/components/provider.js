import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [usuario, setUsuario] = useState({})
    
    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
        {props.children}
        </AuthContext.Provider>
    );
}