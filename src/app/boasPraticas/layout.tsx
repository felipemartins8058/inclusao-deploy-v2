'use client'
import React, { useState, useEffect } from "react";
import { NextResponse } from "next/server";
import axios, {AxiosError} from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";
import { COOKIE_NAME } from "@/constants";

interface UserResponse {
    user: string | null
    error: AxiosError | null
}

export default function BoasPraticasLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const router = useRouter();

    // Given incoming request /home
    let getCookies = NextResponse.next();    
    console.log(getCookies.cookies.get(COOKIE_NAME));

    useEffect(() => {
        (async () => {
            const { user, error } = await getUser();

            if (error) {
                router.push("/login");
                return;
            }

            setIsSuccess(true);
        })();
    }, [router])

    // if (getCookies.cookies.get(COOKIE_NAME) === undefined) {
    //     console.log(COOKIE_NAME);
    //     router.push("/login");
    //     return <main>Carregando...</main>;
    // }
    return <main>{children}</main>;
}

async function getUser(): Promise<UserResponse> {
    try {
        const { data } = await axios.get("/api/auth/me", {withCredentials: true});

        return{
            user: data,
            error: null,
        }
    } catch (e) {
        const error = e as AxiosError;

        return {
            user: null,
            error,
        }
    }
}