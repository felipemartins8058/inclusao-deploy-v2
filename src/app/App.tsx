"use client";
import React, { use, useState, useEffect } from "react";
import { Lexend } from "next/font/google";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { HeaderMenu } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider } from "styled-components";
import { defaultTheme, highContrastTheme } from "../styles/Themes";
import Vlibras from "@/components/Vlibras";
import Script from "next/script";

const lexend = Lexend({ subsets: ["latin"] });

type librasProps = {
    teste1: string;
};

export default function App({ children }: { children: React.ReactNode }) {
    

    const [theme, setTheme] = useState<string>("defaultTheme");
    const isHighContrastTheme = theme === "highContrastTheme";

    const toggleTheme = () => {
        setTheme(isHighContrastTheme ? "defaultTheme" : "highContrastTheme");
        console.log(theme, isHighContrastTheme);
    };

    return (
        <ThemeProvider
            theme={isHighContrastTheme ? highContrastTheme : defaultTheme}
        >
            <GlobalStyles />
            <html lang="pt-br">
                <body className={lexend.className}>
                    <HeaderMenu toggleTheme={toggleTheme} />
                    <button onClick={() => toggleTheme()}>kkk</button>
                    {children}
                    <Footer />
                    <Vlibras/>
                    <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" />
                </body>
            </html>
        </ThemeProvider>
    );
}
