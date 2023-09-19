import React from "react";
import style from "../../../../stylesheet/page1/miniTop.module.css";


const MiniTopItem = () => {

    return (
        <div className={style.itemTop}>
            <img src="https://prokat-avto24.by/upload/iblock/988/cla_2022_.jpg" rel="jh"></img>
            <h3>Mercedes CLA 2022</h3>
            <p>Cтильное компактное купе с современным дизайном, высоким уровнем комфорта и передовыми технологиями.</p>
        </div>
    )
}

export default MiniTopItem;