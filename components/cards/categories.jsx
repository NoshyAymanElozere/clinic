"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./category";
import Loader from "./loader";
import Title from "@/components/title";

export default function Cards({ data, slider, style, cols, title, text }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(data || []);
    setTotal(data?.length || 0);
  }, [data]);

  return (
    <div className="w-full space-y-8">
      {title && <Title head={title} text={text} />}

      {slider ? (
        <div className="w-full">
          {!items.length ? (
            <Loader count={5} cols={5} />
          ) : (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={5}
              //   autoplay={{ delay: 5000 }}
              speed={500}
              loop={false}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1.8 },
                500: { slidesPerView: 2 },
                748: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card data={item} style={style} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      ) : (
        <div className="w-full">
          {!items.length ? (
            <Loader count={10} cols={5} />
          ) : (
            <div
              className={`grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-${
                cols || 5
              } gap-4`}
            >
              {items.map((item, index) => (
                <Card key={index} data={item} style={style} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
