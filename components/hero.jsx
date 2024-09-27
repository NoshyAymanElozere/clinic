"use client";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Form from "@/components/form";
import "swiper/swiper-bundle.css";

export default function Hero() {
  const config = useSelector((state) => state.config);
  const [filters, setFilters] = useState({});

  const slides = [
    {
      title: "We Provide Medical Services That You Can ",
      description:
        "Experience seamless service bookings with our platform. Reserve appointments, accommodations.",
      backgroundImage: "/media/service/background.jpg",
      text: "Trust!",
    },
    {
      title: "Quality Care for Every Patient",
      description:
        "Your health is our priority. Access top-notch medical services at your .",
      backgroundImage: "/media/service/background1.jpg",
      text: "convenience!",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        speed={500}
        loop={true}
        navigation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <main
              className="mt-8 h-[75vh] w-full rounded-md border border-primary/50 bg-primary/10 bg-cover bg-right bg-no-repeat p-12"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="flex items-start justify-between">
                <div className="mt-[4rem] flex w-full flex-1 cursor-default flex-col items-start justify-start gap-6">
                  <div className="w-full md:w-[70%]">
                    <h1 className="text-[2.2rem] font-black leading-[140%]">
                      {slide.title}{" "}
                      <span className="text-main"> {slide.text}</span>
                    </h1>
                  </div>

                  <div className="w-full md:w-[60%]">
                    <p className="text-[1.1rem] font-semibold leading-[190%] text-textLight">
                      {slide.description}
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-2 gap-3 pt-5 md:w-[20rem]">
                    <button className="w-full rounded-[8px] border border-primary bg-main px-3 py-2.5 text-[.95rem] font-semibold tracking-wide text-white shadow-none duration-300 hover:opacity-[.8]">
                      Get Appointment
                    </button>
                    <button className="w-full rounded-[8px] border border-main px-0 py-2.5 text-[.95rem] font-semibold tracking-wide text-primary duration-300 hover:border-primary hover:bg-primary hover:text-white">
                      Learn more
                    </button>
                  </div>
                </div>

                <div className="relative flex w-[40%] items-center justify-center gap-8">
                  <div className="absolute left-[13.5rem] top-0 select-none">
                    {/* Add any additional content here if necessary */}
                  </div>

                  {/* Optional: Add more image layers if needed */}
                </div>
              </div>
            </main>
          </SwiperSlide>
        ))}
      </Swiper>
      <main className="m-auto mt-[1rem] w-[70%]">
        <Form scrollTop={480} filters={filters} setFilters={setFilters} />
      </main>
    </div>
  );
}
