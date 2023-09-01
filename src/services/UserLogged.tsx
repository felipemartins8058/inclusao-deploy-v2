'use client'
import { Api } from "@/services/Api";

export default async function getLoggedUser({acessToken}: {acessToken: string}){
    try {
        const response = await Api.get("/auth", { headers: { Authorization: `Bearer ${acessToken}` } });
        const userLogged = response.data?.data;
        return userLogged;
    } catch (error) {
        return error;
    }
}