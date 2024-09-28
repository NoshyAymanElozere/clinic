"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./service";
import Loader from "./loader";
import Pagination from "@/components/pagination";
import Title from "@/components/title";

export default function Cards({
  data,
  slider,
  style,
  cols,
  pagination,
  read,
  title,
  text,
}) {
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (page === 1 && pagination) read(page, limit);
    else setPage(1);
  }, [limit]);
  useEffect(() => {
    if (pagination) read(page, limit);
  }, [page]);
  useEffect(() => {
    setItems(data || []);
    setTotal(data?.length || 0);
  }, [data]);

  return (
    <div className="space-t-8 w-full ">
      {title && <Title className="text-main" head={title} text={text} />}
      <div className="flex w-full items-center justify-center pb-5 ">
        <img src="/media/icons/icon/section-img.png" alt="" />
      </div>
      {slider ? (
        <div className="w-full">
          {!items.length ? (
            <Loader count={4} />
          ) : (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={4}
              autoplay={{ delay: 5000 }}
              speed={500}
              loop={false}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1.4 },
                500: { slidesPerView: 2 },
                748: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
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
            <Loader count={limit} cols={cols || 4} />
          ) : (
            <div
              className={`grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                cols || "4"
              } gap-4`}
            >
              {items.map((item, index) => (
                <Card key={index} data={item} style={style} />
              ))}
            </div>
          )}
        </div>
      )}

      {items.length && pagination ? (
        <div className="w-full">
          <Pagination
            limit={limit}
            setLimit={setLimit}
            total={total}
            page={page}
            setPage={setPage}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
