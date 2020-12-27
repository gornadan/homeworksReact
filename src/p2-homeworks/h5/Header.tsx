import React, {useState} from "react";
import {PATH} from "./Routes";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";





function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    return (
        <div className={isMenuOpen ? s.item1 : s.item1_active } >
            {/*//isMenuOpen ?: s.item1_active*/}

            <span className={s.menu_btm} onClick={toggleMenu}>x</span>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink></div>
            <div className={s.item}>
                <NavLink to={PATH.MIDDLE}>MIDDLE</NavLink></div>


        </div>
    );
}

export default Header;
