import React from "react";
import s from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.message_img}><img src={props.avatar} alt="pic"/></div>
            <div className={s.message_wrapper}>
                <div className={s.message_wrap}>
                    <div className={s.name_mess}><span>{props.name}</span></div>
                    <div className={s.message_mess}><span>{props.message}</span></div>
                    <div className={s.time_mess}><span>{props.time}</span></div>
                </div>
            </div>
        </div>
    );
}

export default Message;
