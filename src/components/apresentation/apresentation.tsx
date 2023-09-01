"use client";
import { useContext } from "react";
import {
    DivApresentation,
    DivInsideLeft,
    DivInsideLeftDivider,
    DivInsideRight,
    ColorBlock,
} from "./apresentationStyles";
import * as F from "../../styles/Fonts";
import ImageInclusionApresentation from "../../assets/images/imageApresentationYellow.svg";
import ImageInclusionApresentation2 from "../../assets/images/imageApresentationred.svg";
import ImageInclusionApresentation3 from "../../assets/images/imageApresentationPurple.svg";
import Title from "../Title";
import { EditButton } from "../Button";
import Theme from "@/utils/useThemeProvider";
import { useFontStore } from "../header/header";
import Image from "next/image";
import { AuthContext } from "@/services/AuthProvider";

export function Apresentation() {
    const { auth } = useContext(AuthContext);
    const { fontSize, sizeIncrement } = useFontStore();

    let calculatedSize = fontSize * sizeIncrement;

    if (calculatedSize < -4) {
        calculatedSize = -4;
    }

    if (calculatedSize > 32) {
        calculatedSize = 32;
    }

    return (
        <DivApresentation aria-label="seção: o que é esta plataforma?">
            {/* <EditButton handleOnClick={() => { }} label='Editar' /> */}
            {auth.setLoggedUser?.roles === "user" && (<EditButton handleOnClick={() => { }} label='Editar' />)}
            <DivInsideLeft>
                <ColorBlock color={Theme().color_background_yellow}>
                    <Image
                        src={ImageInclusionApresentation}
                        alt="Mulher preta de longos cabelos pretos cacheados, vestindo uma blusa branca com linhas pretas, fazendo o sinal de ok em LIBRAS"
                    />
                </ColorBlock>
                <DivInsideLeftDivider>
                    <ColorBlock color={Theme().color_background_green} />
                    <ColorBlock color={Theme().color_background_pink}>
                        <Image
                            src={ImageInclusionApresentation2}
                            alt="Mulher preta de longos cabelos pretos cacheados, vestindo uma blusa branca com linhas pretas, fazendo o sinal de ok em LIBRAS"
                        />
                    </ColorBlock>
                </DivInsideLeftDivider>
                <ColorBlock color={Theme().color_background_purple}>
                    <Image
                        src={ImageInclusionApresentation3}
                        alt="Mulher preta de longos cabelos pretos cacheados, vestindo uma blusa branca com linhas pretas, fazendo o sinal de ok em LIBRAS"
                    />
                </ColorBlock>
            </DivInsideLeft>
            <DivInsideRight>
                <Title
                    title="O que é a plataforma?"
                    color={Theme().color_background_green}
                />
                <F.Text fontSize={16 + calculatedSize}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam pulvinar felis id hendrerit congue. Morbi
                    sollicitudin pulvinar enim id condimentum. Proin semper,
                    lorem ut commodo finibus, felis purus eleifend mauris, vel
                    vestibulum enim erat eget purus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Aliquam pulvinar felis id
                    hendrerit congue. Morbi sollicitudin pulvinar enim id
                    condimentum. Proin semper, lorem ut commodo finibus.
                </F.Text>
            </DivInsideRight>
        </DivApresentation>
    );
}
