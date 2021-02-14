import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";

const themes: Array<string> = ['dark', 'red', 'some'];


const HW12 = () => {
    const theme = useSelector((state: AppStoreType) => state.themeReducer.currentThemes);

    // useDispatch, onChangeCallback
    const dispatch = useDispatch();

    const onChangeCallback = (options: string) => {
        dispatch(changeThemeC(options))
    };


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <h2>homeworks 12</h2>
            </span>

            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
