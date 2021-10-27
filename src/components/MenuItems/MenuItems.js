import React from "react";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuItems() {
    const mystyle = {
        margin: "0 0 0 40px",
      };
    return (
        <nav style={mystyle}>
            <MenuItem nome="Inicio"/>
            <MenuItem nome="Séries"/>
            <MenuItem nome="Filmes"/>
            <MenuItem nome="Lançamentos"/>
            <MenuItem nome="Minha Lista"/>
        </nav >
    );
}