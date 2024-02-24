import React, { useEffect, useState } from "react";
import "./Header.scss"
import PagesStore from "../../store/PagesStore/PagesStore";
const Header = ({background, title, desc}) => {
  const [index, setIndex] = useState(0)
  const {getContributors} = PagesStore()
  useEffect(() => {
    setInterval(() => {
      if(index === 28){
        setIndex(0)
      }else{
        setIndex(prev=> prev + 1)
      }
    }, 60 * 1000);
    getContributors()
  }, []);
  return (
    <div className="header">
      <header className="header__child">
        <img src={background[index]?.urls?.raw} alt="header" loading="lazy" className="header__bg" />
        <div className="header__item">
          <h1 className="header__title">{title}</h1>
          <p className="header__subtitle">{desc}</p>
          <button className="header__btn">Submit to <span className="font-[500]">{title}</span></button>
        </div>
        <p className="header__author">Photo <span className="text-[silver]"> by </span>{background[index]?.user.name}</p>
      </header>
    </div>
  );
};

export default Header;
