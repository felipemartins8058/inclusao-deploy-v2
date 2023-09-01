"use client";
import React, { useState, createContext } from "react";
import { Lexend } from "next/font/google";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { HeaderMenu } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider } from "styled-components";
import { defaultTheme, highContrastTheme } from "../styles/Themes";
import VLibras from "vlibras-nextjs";
import AuthProvider from "@/services/AuthProvider";

const lexend = Lexend({ subsets: ["latin"] });

export const ThemeContext = createContext("");

export default function App({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>("defaultTheme");
    const isHighContrastTheme = theme === "highContrastTheme";

    const toggleTheme = () => {
        setTheme(isHighContrastTheme ? "defaultTheme" : "highContrastTheme");
        //console.log(theme, isHighContrastTheme);
    };

    return (
        <AuthProvider>
            <ThemeProvider
                theme={isHighContrastTheme ? highContrastTheme : defaultTheme}
            >
                <GlobalStyles />
                <html lang="pt-br">
                    <body className={lexend.className}>
                        <ThemeContext.Provider value={theme}>
                            <HeaderMenu toggleTheme={toggleTheme} />
                            <VLibras forceOnload />
                            {children}
                            <Footer />
                        </ThemeContext.Provider>
                    </body>
                </html>
            </ThemeProvider>
        </AuthProvider>
    );
}
