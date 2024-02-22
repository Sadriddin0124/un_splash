import React, { useEffect, useState } from "react";
import Pictures from "../../components/Pictures/Pictures";
import Header from "../../components/Header/Header";
import PagesStore from "../../store/PagesStore/PagesStore";
const CoolTones = () => {
  const { images, getImages} = PagesStore()
  useEffect(() => {
    getImages("cool-tones")
  }, []);
  return (
    <div className="w-[100%]">
      <Header background={images} title="Cool Tones"/>
      <Pictures photos={images}/>
    </div>
  );
};

export default CoolTones;
