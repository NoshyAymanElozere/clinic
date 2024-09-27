"use client"
import { storage } from '@/public/script/main';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Viewer({ images, title, swiper, setSwiper, model, setModel }) {

    const [index, setIndex] = useState(0);

    const change_slide = ( index, move=true ) => {

        setIndex(index+1);
        if ( move ) swiper.slideTo(index);
        let left = 160 * index - 160 * 4;
        if ( window.width < 800 ) left = 160 * index - 160;
        document.querySelector('.scroller').scrollLeft = -left;
        document.querySelectorAll('video').forEach((item) => item.pause());

    }
    useEffect(() => {

        if ( model ) document.querySelector('body').classList.add('overflow-hidden');
        else document.querySelector('body').classList.remove('overflow-hidden');

    }, [model]);

    return (

        <div className={`fixed top-0 left-0 w-full h-full z-[999] bg-[#000]/80 backdrop-blur-[20px] ${model ? 'opacity-100 scale-1' : 'scale-0 opacity-0'} duration-500 ease-in-out`}>

            <div className="flex justify-between items-center w-full border-b border-gray-600 py-[1.2rem] px-[2.5%]">

                <h1 title={title} className="truncate tracking-wide w-[80%] text-[1.2rem] text-white font-semibold">
                    {title || '--'}
                </h1>

                <div onClick={() => setModel(false)} className="rounded-full flex justify-center items-center cursor-pointer w-[2.2rem] h-[2.2rem] duration-500 border border-gray-400 -mt-[2px] text-gray-400 text-[1.4rem] hover:bg-white hover:text-black hover:border-white">
                    <span className="material-symbols-outlined go-icon">close</span>
                </div>

            </div>

            <div className="w-full h-[calc(100%_-_70px)] flex justify-center items-center flex-col">

                <div className="flex justify-center items-center w-[95%] h-[80%] relative">

                    <Swiper modules={[Navigation, Pagination, Autoplay]} speed={300} navigation={true} 
                        onSlideChange={_ => change_slide(_.realIndex)} onSwiper={setSwiper} 
                        className='w-full h-full rounded-md'>
                        {
                            images && images.map((image, index) =>

                                <SwiperSlide key={index} className='w-full h-full rounded-md'>

                                    <div className='w-full h-full flex justify-center items-center py-8'>
                                        {
                                            image[0] === "image" ?
                                            <img src={`${storage}/${image[1]}`} className='rounded-md w-auto h-auto max-w-[100%] max-h-[100%] object-cover'/> :
                                            <video src={`${storage}/${image[1]}`} controls className='rounded-md w-auto h-auto max-w-[100%] max-h-[100%] cursor-pointer'></video>
                                        }
                                    </div>

                                </SwiperSlide>
                            )
                        }
                    </Swiper>

                    <div className="flex justify-center items-center absolute select-none bottom-[-2rem] right-0 text-gray-300 text-[1rem] tracking-wide font-semibold z-50">
                        <span className="px-1">{index || (images.length ? 1 : 0)}</span> / {images ? images.length: 0}
                    </div>
                    
                </div>

                <div className="scroller w-[95%] py-[.5rem] px-[.1rem] overflow-auto scroll-smooth text-center text-nowrap space-x-3">
                    {
                        images && images.map((image, index) =>

                            <div key={index} onClick={_ => change_slide(index, true)} className={`rounded-md cursor-pointer relative overflow-hidden w-[10rem] h-[5.5rem] layer inline-block ${swiper.realIndex === index && 'active'}`}>

                                {
                                    image[0] === "image" ?
                                    <img src={`${storage}/${image[1]}`} className='w-full h-full object-cover'/> :
                                    <video src={`${storage}/${image[1]}`} controls className='w-full h-full object-cover'></video>
                                }

                                <div className={`absolute top-0 left-0 w-full h-full duration-300 bg-black/50 group-hover:bg-black/0 ${swiper.realIndex === index && 'hidden'}`}></div>

                            </div>

                        )
                    }
                </div>

            </div>

        </div>

    )

}
