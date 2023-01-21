import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut cumque veritatis atque officia sint ratione minus illum quod. Magni, esse voluptatibus? Cumque maxime reprehenderit dolor tempora saepe consequatur id?",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut cumque veritatis atque officia sint ratione minus illum quod. Magni, esse voluptatibus? Cumque maxime reprehenderit dolor tempora saepe consequatur id?",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut cumque veritatis atque officia sint ratione minus illum quod. Magni, esse voluptatibus? Cumque maxime reprehenderit dolor tempora saepe consequatur id?",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut cumque veritatis atque officia sint ratione minus illum quod. Magni, esse voluptatibus? Cumque maxime reprehenderit dolor tempora saepe consequatur id?",
  },
];

function testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar}  />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default testimonials;
