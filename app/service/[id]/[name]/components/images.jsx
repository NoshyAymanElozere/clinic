"use client";
import { storage } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Viewer from "./viewer";

export default function Images ({ data, title }) {

    const config = useSelector((state) => state.config);
    const [model, setModel] = useState(false);
    const [swiper, setSwiper] = useState('');
    const [swiper1, setSwiper1] = useState('');

    const change_slide = (index, move) => {

        if ( move ) swiper.slideTo(index);
        document.querySelectorAll('video').forEach((item) => item.pause());

    }
    return (

        <div className="w-full">

            <div className="w-full flex flex-col gap-4">

                <div className="panel p-3 w-full h-[30rem] flex justify-center items-center overflow-hidden">

                    <Swiper modules={[Navigation, Pagination, Autoplay]} speed={400} navigation={true} 
                        onSwiper={setSwiper} onSlideChange={_ => change_slide(_.realIndex)} 
                        className="w-full h-full rounded-md overflow-hidden">
                        {
                            data?.slice(0, 6)?.map((image, index) =>

                                <SwiperSlide key={index} onClick={() => { image[0] === "image" && setModel(true); swiper1.slideTo(index) }} className="w-full h-full rounded-md relative cursor-pointer">
                                    {
                                        image[0] === "image" ?
                                        <img src={`${storage}/${image[1]}`} className="w-full h-full object-cover rounded-md"/> :
                                        <video src={`${storage}/${image[1]}`} controls className="w-full h-full object-cover rounded-md"></video>
                                    }
                                    {
                                        ( index == 5 && data.length > 6 ) &&
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-md flex justify-center items-center">
                                            <div className="py-2.5 px-6 -mt-1.5 flex justify-center items-center text-[.9rem] tracking-wide font-semibold duration-200 text-white border-2 border-gray-300 rounded-md hover:bg-primary hover:text-white hover:border-primary hover:shadow-md">
                                                <span>See More</span>
                                            </div>
                                        </div>
                                    }
                                </SwiperSlide>

                            )
                        }
                    </Swiper>

                </div>

                <div className="panel p-3 w-full h-[7rem] grid grid-cols-6 gap-3 overflow-hidden">
                    {
                        data?.slice(0, 6)?.map((image, index) =>

                            <div key={index} onClick={() => change_slide(index, true)} className={`group relative w-full min-h-[20%] overflow-hidden rounded-md cursor-pointer`}>

                                {
                                    image[0] === "image" ?
                                    <img src={`${storage}/${image[1]}`} className="w-full h-full object-cover rounded-md"/> :
                                    <video src={`${storage}/${image[1]}`} className="w-full h-full object-cover rounded-md" poster="/media/layout/poster.png"></video>
                                }

                                <div className={`absolute top-0 left-0 w-full h-full duration-300 bg-black/50 group-hover:bg-black/0 ${swiper.realIndex === index && 'hidden'}`}></div>

                                {
                                    ( index === 5 && data.length > 6 ) &&
                                    <div onClick={() => { setModel(true); swiper1.slideTo(index) }} className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center text-[.9rem] font-semibold text-white-light hover:text-white">
                                        <span>See More</span>
                                    </div>
                                }

                            </div>

                        )
                    }
                </div>

            </div>

            <Viewer images={data} title={title} swiper={swiper1} setSwiper={setSwiper1} model={model} setModel={setModel}/>

        </div>

    )

}
