import React from "react";
import style from "../../../stylesheet/page1/preview.module.css"


const Preview = () => {

    return (
    <div className={style.preview}>
        <img src="https://a-static.besthdwallpaper.com/the-porsche-911-carrera-4s-with-its-silver-coloured-steel-rims-cruising-along-the-road-at-the-edge-of-the-sun-drenched-mountains-wallpaper-2800x2100-98769_28.jpg" rel="sg"/>
        <div className={style.previewText}>
            <h1>ЛЕГЕНДА ДОРОГ теперь и у нас</h1>
            <p>Успейте прокатиться в числе первых</p>
        </div>
    </div>
    )
}


export default Preview;