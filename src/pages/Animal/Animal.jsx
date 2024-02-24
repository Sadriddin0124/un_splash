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
      <Header background={images} title="Animal" desc="This category pays homage to the fascinating world of animals. Photographers capture the diversity, behavior, and beauty of creatures from across the globe, bringing the animal kingdom closer to the viewer's heart and lens."/>
      <Pictures photos={images} />
    </div>
  );
};

export default Animal;
