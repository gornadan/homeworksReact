import React from "react";
import {PATH} from "./Routes";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink></div>
            <div className={s.item}>
                <NavLink to={PATH.MIDDLE}>MIDDLE</NavLink></div>

        </nav>
    );
}

export default Header;
