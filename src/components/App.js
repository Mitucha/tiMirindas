import React from "react";
import style from "../stylesheet/main.module.css";
import Header from "./Header";
import Preview from "./UI/page1/Preview";
import AboutUs from "./UI/page4/AboutUs";
import MiniTop from "./UI/page1/miniTop/MiniTop";
import Auto from "./UI/page1/auto/Auto";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Preview />
      <AboutUs />   
      <MiniTop />
      <Auto />
    </div>
  );
}

export default App;
