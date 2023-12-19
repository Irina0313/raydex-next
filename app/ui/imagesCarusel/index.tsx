/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import { Carousel } from "antd";
import style from "./style.module.css";

const ImagesCarousel: React.FC<{
  images: string[];
  imagePathPrefix?: string;
}> = ({ images, imagePathPrefix = "" }) => {
  /* return (
    <Carousel effect="fade" dots={{ className: `${style.dots}` }}>
      {images.map((img) => (
        <img key={img} src={`../${img}`} alt="Фото товара" />
      ))}
    </Carousel>
  ); */

  const carouselRef = useRef<CarouselRef>(null);

  const handleNextSlide = () => {
    carouselRef.current?.next();
  };

  const handlePrevSlide = () => {
    carouselRef.current?.prev();
  };

  return (
    <div className={style.carouselContainer}>
      <Carousel
        ref={carouselRef}
        effect="fade"
        dots={{ className: `${style.dots}` }}
      >
        {images.map((img) => (
          <img key={img} src={`${imagePathPrefix}${img}`} alt="Фото товара" />
        ))}
      </Carousel>

      <button
        className={`${style.carouselBtn} ${style.carouselLeftBtn}`}
        onClick={handleNextSlide}
      />
      <button
        className={`${style.carouselBtn} ${style.carouselRightBtn}`}
        onClick={handlePrevSlide}
      />
    </div>
  );
};

export default ImagesCarousel;
