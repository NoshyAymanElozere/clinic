"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServicesImage({ title }) {
  const images = [
    {
      id: 1,
      src: "/media/Doctors/doc3.jpg",
    },
    {
      id: 2,
      src: "/media/Doctors/doc4.jpg",
    },
    {
      id: 3,
      src: "/media/Doctors/doc5.jpg",
    },
    {
      id: 4,
      src: "/media/Doctors/13.jpg",
    },
    {
      id: 5,
      src: "/media/Doctors/doctor-detail.jpg",
    },
    {
      id: 6,
      src: "/media/Doctors/doc4.jpg",
    },
  ];

  return (
    <main>
      <div className="w-full text-center">
        <h3 className="text-[2rem] font-bold text-main">{title}</h3>
        <div className="flex w-full items-center justify-center pb-5">
          <img src="/media/icons/icon/section-img.png" alt="" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center pb-5">
        <img src="/media/icons/icon/section-img.png" alt="" />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={3}
        autoplay={{ delay: 5000 }}
        speed={500}
        loop={true}
        navigation={true}
        breakpoints={{
          500: { slidesPerView: 1.8 },
          748: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {images.map(({ id, src }) => (
          <SwiperSlide key={id}>
            <div className="w-[300px]">
              <img
                src={src}
                className="h-[280px] w-full rounded-xl object-cover shadow-xl transition"
                alt={`Doctor image ${id}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
