/* eslint-disable @next/next/no-img-element */

import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useRef, useState } from "react";

import style from "./style.module.css";

const ImagesSlider: React.FC<{ images: string[]; imagePathPrefix: string }> = ({
  images,
  imagePathPrefix,
}) => {
  const [isArrowsVisible, setIsArrowsVisible] = useState(false);
  const carouselRef = useRef<CarouselRef>(null);

  const handleNextSlide = () => {
    carouselRef.current?.next();
  };

  const handlePrevSlide = () => {
    carouselRef.current?.prev();
  };

  const handleMouseEnter = () => {
    setIsArrowsVisible(!isArrowsVisible);
  };

  return (
    <div
      className={style.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      <Carousel
        className={style.imagesContainer}
        ref={carouselRef}
        effect="fade"
      >
        {images.map((img) => (
          <img key={img} src={`${imagePathPrefix}${img}`} alt="Фото товара" />
        ))}
      </Carousel>

      {isArrowsVisible && (
        <>
          <button
            className={`${style.carouselBtn} ${style.carouselLeftBtn} ${
              isArrowsVisible && style.carouselBtnActive
            }`}
            onClick={handleNextSlide}
          >
            <div className={`${style.arrow} ${style.arrowLeft}`}>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1L1 6L6 11"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
          <button
            className={`${style.carouselBtn} ${style.carouselRightBtn}  ${
              isArrowsVisible && style.carouselBtnActive
            }`}
            onClick={handlePrevSlide}
          >
            <div className={`${style.arrow} ${style.arrowRight}`}>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1L1 6L6 11"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default ImagesSlider;
