import React from "react";
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={s.wrapper_affair}>
            <div className={s.affair_span}><span >{props.affair.name}</span></div>
            <div><button className={s.affair_button} onClick={deleteCallback}>X</button></div>
        </div>
    );
}

export default Affair;
