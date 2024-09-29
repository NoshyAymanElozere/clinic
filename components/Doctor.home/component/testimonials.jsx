"use client";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials({ title, info }) {
  const opinions = [
    {
      id: 1,
      name: "Nesma Ahmed",
      image: "/media/Doctors/3.jpg",
      type: "member",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam.",
    },
    {
      id: 2,
      name: "Mohamed Ali",
      image: "/media/Doctors/12.jpg",
      type: "member",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam.",
    },
    {
      id: 3,
      name: "Sara Ahmed",
      image: "/media/Doctors/11.jpg",
      type: "member",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam.",
    },
  ];

  const config = useSelector((state) => state.config);

  return (
    <main className="my-7">
      <div className="w-full text-center">
        <h3 className="text-[2rem] font-bold text-main">{title}</h3>
        <p className="m-auto max-w-[40%] text-[16px] text-gray-500">{info}</p>
        <div className="flex w-full items-center justify-center pb-5">
          <img src="/media/icons/icon/section-img.png" alt="" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={2}
        autoplay={{ delay: 5000 }}
        speed={500}
        loop={true}
        navigation={true}
      >
        {opinions.map((opinion) => (
          <SwiperSlide key={opinion.id}>
            <TestimonialCard opinion={opinion} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
