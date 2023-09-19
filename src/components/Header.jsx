import React from "react";
import logo from "../images/1.png"
import style from "../stylesheet/main.module.css";


const Header = () => {

    return (
        <header className={style.header}>
        <div className={style.logo}>
          <img
            src={logo}
            rel="fjdnk"
          />
        </div>
        <div>
          <ul>
            <li>Главная</li>
            <li>Рейтинг</li>
            <li>Машины</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Профиль</li>
          </ul>
        </div>
      </header>
    )
}

export default Header;