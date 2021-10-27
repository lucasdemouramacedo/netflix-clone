import React from "react";
import "./MenuItem.css";

export default function MenuItem(props){
    return(
        <a href="/" className="link">{props.nome}</a>
    );
}