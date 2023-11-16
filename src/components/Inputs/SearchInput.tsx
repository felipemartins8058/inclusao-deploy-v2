import React from "react";
import * as S from "./styles";
import {FaSearch} from 'react-icons/fa'

export default function SearchInput() {
    return(
        <S.SearchBox>
            <S.SearchInput type="text" placeholder="Pesquisar"/>
            <FaSearch color="var(--color_icon_dark)" />
        </S.SearchBox>
    )
}