import { COOKIE_NAME } from "@/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies();

    const token = cookieStore.get(COOKIE_NAME);

    if (!token) {
        return NextResponse.json(
            {
                message: "Unauthorized",
            },
            {
                status: 401,
            }
        );
    }

    const {value} = token;
    const newValue = value.substring(2, value.length)

    const secret = process.env.JWT_SECRET || "";
    console.log(newValue);
    console.log(secret);

    try {
        verify(newValue, secret);

        const response = {
            message: "Usuário logou 💖",
        };

        return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        return NextResponse.json(
            {
                message: `${secret} - VALOR: - ${newValue} - ERROR: - ${error}}`,
            },
            {
                status: 400,
            }
        );
    }
}
