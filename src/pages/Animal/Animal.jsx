import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Pictures from "../../components/Pictures/Pictures";
import PagesStore from "../../store/PagesStore/PagesStore";

const Animal = () => {
  const { images, getImages } = PagesStore();
  useEffect(() => {
    getImages("animals");
  }, []);
  return (
    <div className="w-[100%]">
      <Header background={images} title="Animal" />
      <Pictures photos={images} />
    </div>
  );
};

export default Animal;
