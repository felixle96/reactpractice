import React from "react";
import "./Header.css";

function Header({ user }) {
    const { name, status } = user;

    return (
        <header className="header">
            <h1 className="header__name">{name}</h1>
            <p className="header__status">{status}</p>
        </header>
    );
}

export default Header;