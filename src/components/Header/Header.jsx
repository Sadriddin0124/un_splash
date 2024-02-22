import React, { useEffect, useState } from "react";
import "./Header.scss"
const Header = ({background, title}) => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setInterval(() => {
      if(index === 28){
        setIndex(0)
      }else{
        setIndex(prev=> prev + 1)
      }
    }, 3600 * 1000);
  }, []);
  return (
    <div className="header">
      <header className="header__child">
        <img src={background[index]?.urls?.raw} alt="header" className="header__bg" />
        <div className="header__item">
          <h1 className="header__title">{title}</h1>
          <p className="header__subtitle">{background[index]?.description || background[index]?.alt_description}</p>
          <button className="header__btn">Submit to <span className="font-[500]">{title}</span></button>
        </div>
        <p className="header__author">Photo <span className="text-[silver]"> by </span>{background[index]?.user.name}</p>
      </header>
    </div>
  );
};

export default Header;
