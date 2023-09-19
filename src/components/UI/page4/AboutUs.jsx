import React from "react";
import style from "../../../stylesheet/page4/aboutUs.module.css";


const AboutUs = () => {

    return (
        <div className={style.AboutUs}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A405c42ce7abf7cef19213ada7e442f44c47fff94f315948dfc0254acce076c6f&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            <div className={style.text}>
                <p className={style.textAboutUs}>
                    <h2>Немного о нас</h2>
                    Добро пожаловать в наше молодое и динамичное автопрокатное агентство!
                    Мы - команда энтузиастов, которые разделяют твою страсть к роскошным автомобилям.
                    Наша цель - сделать доступными для тебя самые престижные и шикарные машины на рынке.
                    Независимо от того, нужен ли тебе автомобиль для деловой встречи, свадьбы или просто чтобы порадовать себя,
                    мы готовы помочь. У нас в арсенале широкий выбор авто от ведущих производителей, и мы гарантируем, что ты получишь незабываемый опыт вождения.
                    Доверь нам свои мечты о роскоши и позволь нам сделать их реальностью.
                    Воплотим в жизнь твои амбиции на дорогах! <span>Наши салоны обозначены на карте.</span></p>
            </div>
        </div>
    )
}

export default AboutUs;