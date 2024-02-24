import React, { useEffect, useState } from "react";
import Pictures from "../../components/Pictures/Pictures";
import Header from "../../components/Header/Header";
import PagesStore from "../../store/PagesStore/PagesStore";
const CoolTones = () => {
  const { images, getImages } = PagesStore();
  useEffect(() => {
    getImages("cool-tones");
  }, []);
  return (
    <div className="w-[100%]">
      <Header
        background={images}
        title="Cool Tones"
        desc="Explore the magic of the season with cool tones. Where icy blues, purples, greens and grays paint a serene canvas. Embrace the beauty of cool colors to infuse a sense of tranquility into your images. From frost-kissed landscapes to subtle macro details, let the colour palette of the season be the focus of your compositions."
      />
      <Pictures photos={images} />
    </div>
  );
};

export default CoolTones;
