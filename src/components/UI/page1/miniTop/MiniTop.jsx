import React from "react";
import style from "../../../../stylesheet/page1/miniTop.module.css";
import MiniTopItem from "../miniTop/MiniTopItem";


const MiniTop = () => {

    return (
        <div className={style.miniTop}>
            <h1>Авто-топ</h1>
            <div className={style.borderBottom}></div>
            <div className={style.contentTop}>
                <MiniTopItem />
                <MiniTopItem />
                <MiniTopItem />
            </div>
        </div>
    )
}

export default MiniTop;