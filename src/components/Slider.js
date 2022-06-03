import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css'

const IMG_API = 'https://image.tmdb.org/t/p/w200'

const Slider = (props) => {
    console.log(props.movieData)
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={4}>
        {props.movieData.length > 0 &&
          props.movieData.map((movie) => (
            <SwiperSlide>
              <img src={IMG_API + movie.poster_path} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Slider