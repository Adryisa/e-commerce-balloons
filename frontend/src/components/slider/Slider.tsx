import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import BALLOONS from './balloons'
import './slider.scss'

const Slider = () => {

    const balloonsImg = BALLOONS

   
  return (
    <section className="categories">
      <h2 className="categories__title">Our work</h2>
      <div className="slider">
        <Swiper loop spaceBetween={110} slidesPerView={2}>
          {balloonsImg.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                role="button"
                className="slider__slide"
              >
                <img
                  src={item.img}
                  className="slider__img"
                  alt='work pics'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slider
