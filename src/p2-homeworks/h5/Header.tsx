import React, {useState} from "react";
import {PATH} from "./Routes";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    return (
        <div className={s.wrapper}>
            <div className={s.menu_btm} onClick={toggleMenu}>&#9776;</div>
            <div className={isMenuOpen ? s.item1 : s.item1_active}>
               <div><NavLink to={PATH.PRE_JUNIOR} className={s.item}>PRE_JUNIOR</NavLink></div>
                <div><NavLink to={PATH.JUNIOR}  className={s.item}>JUNIOR</NavLink></div>
                <div><NavLink to={PATH.MIDDLE}  className={s.item}>MIDDLE</NavLink></div>
            </div>
        </div>

    );
}

export default Header;
