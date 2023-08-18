'use client'
import { createGlobalStyle } from "styled-components";
import Theme from "@/utils/useThemeProvider";
interface GlobalProps{
    
}

export const GlobalStyles = createGlobalStyle<GlobalProps>`

    :root{
        --white: #fff;
        --black-6: #212529;
        --black-5: #495057;
        --black-4: #6C757D;
        --black-3: #ADB5BD;
        --black-2: #CED4DA;
        --black-1: #E9ECEF;
        --blue: #B9E6FE;
        --yellow: #FEEE95;
        --pink: #FECDD6;
        --purple: #D9D6FE;
        --green: #99F6E0;
        --dark-blue: #0377b5;
        --dark-yellow: #927d01;
        --dark-pink: #EB052F;
        --dark-purple: #4838fa;
        --dark-green: #0b8367;
    }
    body{
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.color_background_light};
    }
    *,::after,::before{
        box-sizing: border-box;
    }

    h1,h2,h3,h4,h5,h6,p,span{
        margin: 0;
    }

    a{
        text-decoration: none;
    }
`