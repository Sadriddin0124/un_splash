import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import "./Navbar.scss";
import { IoSearch } from "react-icons/io5";
import { MdOutlineControlCamera } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ImBell } from "react-icons/im";
import useEditorialStore from "../../store/EditorialStore/EditorialStore";
import User from "../../assets/user.avif";
const Navbar = ({ searchValue, setSearchValue }) => {
  const { search, getPicturesSearch } = useEditorialStore();
  const navigate = useNavigate();
  const url = window.location.href.split("/").pop();
  const [scrollRight, setScrollRight] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navRef = useRef();
  const scrollRef = useRef()
  const scrollNav = () => {
    const element = navRef.current;
    setScrollLeft(element.scrollLeft)
    if (element) {
      if(Math.ceil(element.scrollLeft + element.clientWidth) !== element.scrollWidth){
        console.log("alik");
        setScrollRight(false)
      }
      if (
        Math.ceil(element.scrollLeft + element.clientWidth) ===
        element.scrollWidth
      ) {
        setScrollRight(true)
      }
    }
  };
  useEffect(() => {
    getPicturesSearch();
  }, []);
  const [navbarLink, setNavbarLink] = useState([
    { id: 1, text: "Cool Tones", path: "/cooltones", search: "cooltones" },
    { id: 2, text: "Wallpaper", path: "/wallpaper", search: "wallpaper" },
    { id: 3, text: "Nature", path: "/nature", search: "nature" },
    { id: 4, text: "3D Renders", path: "3drenders", search: "3drenders" },
    { id: 5, text: "Travel", path: "travel", search: "travel" },
    {
      id: 6,
      text: "Architecture & Interiors",
      path: "architecture",
      search: "architecture",
    },
    {
      id: 7,
      text: "Textures & Patterns",
      path: "textures",
      search: "textures",
    },
    {
      id: 8,
      text: "Street Photography",
      path: "streetphotography",
      search: "streetphotography",
    },
    { id: 9, text: "Film", path: "film", search: "film" },
    { id: 10, text: "Archival", path: "archival", search: "archival" },
    {
      id: 11,
      text: "Experimental",
      path: "experimental",
      search: "experimental",
    },
    { id: 12, text: "Animals", path: "animals", search: "animals" },
    {
      id: 13,
      text: "Fashion & Beauty",
      path: "fashionbeauty",
      search: "fashionbeauty",
    },
    { id: 14, text: "People", path: "people", search: "people" },
    {
      id: 15,
      text: "Spirituality",
      path: "spirituality",
      search: "spirituality",
    },
    {
      id: 16,
      text: "Business & Work",
      path: "business-work",
      search: "business-work",
    },
    { id: 17, text: "Food & Drink", path: "food-drink", search: "food-drink" },
    {
      id: 18,
      text: "Health & Wellness",
      path: "health-wellness",
      search: "health-wellness",
    },
    { id: 19, text: "Sports", path: "sports", search: "sports" },
    {
      id: 20,
      text: "Current Events",
      path: "current-events",
      search: "current-events",
    },
  ]);
  const handleNav = (scrollAmount) => {
    navRef.current.scrollLeft += scrollAmount;
    const scrollLeft = navRef.current.scrollLeft;
    console.log("Scroll Left:", scrollLeft);
  };
  const [activeREsult, setActiveResult] = useState(false);
  const searchImage = (e) => {
    let result = e.target.value;
    if (result === "") {
      setActiveResult(false);
    } else {
      setActiveResult(true);
    }
    setSearchValue(result);
  };
  const searchAll = (e) => {
    e.preventDefault();
    getPicturesSearch(e.target[1].value);
    setSearchValue(e.target[1].value);
    navigate("/search");
    setActiveResult(false);
  };
  return (
    <nav className="navbar fixed bg-white">
      <div className="navbar__top">
        <div className="w-[32px] h-[32px] whitespace-nowrap">
          {/* <span className=" opacity-0">efefr</span> */}
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="w-[32px] h-[32px] top-[23px] resize-none absolute"
            />
          </Link>
        </div>
        <form className="navbar__search" onSubmit={searchAll}>
          <button type="submit">
            <IoSearch className="search__icon cursor-pointer" />
          </button>
          <input
            onChange={searchImage}
            value={searchValue}
            type="text"
            placeholder="Search high-resolution images"
          />
          <MdOutlineControlCamera className="control__icon cursor-pointer" />
          {/* <div className={` ${activeREsult ? "search__results" : "hidden"}`}>
            {search?.map((item, index) => {
              return (
                <div key={index} className="w-[48%] h-[100%] flex">
                  <img
                    className="w-[100%] h-[100%] object-cover"
                    src={item?.urls?.raw}
                    alt={item?.alt_description}
                  />
                </div>
              );
            })}
          </div> */}
          {/* <Link
            to="/search"
            className={`hover:text-black text-[#767676] absolute z-[24] left-0 w-[100%] bg-white p-[10px] text-center top-[345px] border-x-[1px] border-b-[1px] rounded-md rounded-t-none ${
              activeREsult ? "block" : "hidden"
            }`}
          >
            show more
          </Link> */}
        </form>
        <ul className="navbar__list">
          <li className="none__link">
            <Link className="navbar__link hover:text-black">Advertise</Link>
          </li>
          <li className="none__link">
            <Link className="navbar__link hover:text-black">Blog</Link>
          </li>
          <li className="none__link">
            <Link className="navbar__link unsplash">Unsplash+</Link>
          </li>
          <li className="navbar__line"></li>
          <li>
            <button className="navbar__btn hover:text-black border-[black]">
              Submit a photo
            </button>
          </li>
          <li className="navbar__bell">
            <ImBell className="text-[20px] text-[#767676] rotate-[-25deg]" />
          </li>
          <li className="w-[32px] ">
            <img
              src={User}
              alt="user"
              className="w-[100%] h-[100%] rounded-full"
            />
          </li>
          <li className="navbar__menu">
            <MdOutlineMenu className="menu" />
          </li>
        </ul>
      </div>
      <div className={`${url === "search" ? "hidden" : "flex"} navbar__bottom`} ref={scrollRef}>
        <ul className="flex ml-[20px] gap-[20px] navbar__bottom-left">
          <li>
            <Link
              to="/"
              className={`navbar__link hover:text-black ${
                url === ""
                  ? "border-b-[3px] border-b-[black] pb-[15px] text-black"
                  : ""
              }`}
            >
              Editorial
            </Link>
          </li>
          <li>
            <Link
              className={`navbar__link hover:text-black ${
                url === "following"
                  ? "border-b-[3px] border-b-[black] pb-[15px] text-black"
                  : ""
              }`}
            >
              Following
            </Link>
          </li>
          <li>
            <Link
              className={`navbar__link hover:text-black ${
                url === "unsplash+"
                  ? "border-b-[3px] border-b-[black] pb-[15px] xl:pb-[13px] text-black"
                  : ""
              }`}
            >
              Unsplash+
            </Link>
          </li>
          <li className="navbar__line relative z-[4]"></li>
        </ul>
        <ul
          className="bottom__list"
          ref={navRef}
          onScroll={scrollNav}
        >
          <div className={`${scrollLeft < 10 ? "hidden" : ""} absolute bottom-[20px] left-[260px] bg-white left_arrow px-[20px] py-[5px]`}>
            <IoIosArrowBack
              className="cursor-pointer text-[20px] text-[#767676] "
              onClick={() => handleNav(-300)}
            />
          </div>
          {navbarLink?.map((item, index) => {
            return (
              <li key={index} className="bottom__list-item relative">
                <span
                  className={`absolute top-[-13px] text-[10px] text-[#767676] ${
                    index === 0 ? "block" : "hidden"
                  }`}
                >
                  Featured
                </span>
                <Link
                  to={item.path}
                  className={`bottom__link hover:text-black pb-[10px] border-b-[3px] ${
                    url === item.search
                      ? "border-b-[3px] border-[black] pb-[10px] text-black"
                      : "border-[transparent]"
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
          <div className={`${scrollRight ? "hidden" : ""} absolute bottom-[20px] right-[2px] bg-white left_arrow px-[20px] py-[5px]`}>
            <IoIosArrowForward
              className="cursor-pointer text-[20px] text-[#767676]"
              onClick={() => handleNav(300)}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
