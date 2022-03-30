import React from "react";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuItems() {
   
    return (
        <nav>
            <MenuItem nome="Inicio"/>
            <MenuItem nome="Séries"/>
            <MenuItem nome="Filmes"/>
            <MenuItem nome="Bombando"/>
            <MenuItem nome="Minha Lista"/>
        </nav >
    );
}