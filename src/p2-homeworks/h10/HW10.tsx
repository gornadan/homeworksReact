import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loadingImage from "./img/loadingImage.svg"

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    const dispatch = useDispatch();


    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => dispatch(loadingAC(false)), 3000)

        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            <h2>homeworks 10</h2>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div style={{display: 'inline-block'}}><img width={'100px'} src={loadingImage}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
