import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
 import  s from "./Clock.module.css"


function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
        // stop
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
            // setDate
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
       setShow(true)
    };
    const onMouseLeave = () => {
       setShow(false)
    };

    const stringTime = "Time " + date?.toLocaleTimeString("en-US",{ hour: 'numeric', minute: 'numeric', second: 'numeric'}); // fix with date
    const stringDate = "Date " + date?.toLocaleDateString("en-US",{ year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',}) ;

    return (
        <div className={s.wrapper}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
