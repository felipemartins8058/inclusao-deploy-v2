'use client'
import React, { createContext, useEffect, useState } from "react";
import useUserStore from "@/stores/useUser";
import { set } from "zod";

interface AuthContextData {
    auth: {
        setLoggedUser?: {
            email: string;
            idUsuario: string;
            acessToken: string;
            roles: string;
        };
    };
    setAuth: (auth: object) => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [auth, setAuth] = useState({});

    const setLoggedUser = useUserStore((state) => state.user)

    useEffect(() => {
        setAuth({ setLoggedUser });
        console.log("Updatede::Provider", auth)
    },[setLoggedUser])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;