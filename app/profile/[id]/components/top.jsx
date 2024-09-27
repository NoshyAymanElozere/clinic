"use client";
import { storage, fix_number, fix_date } from "@/public/script/main";
import { useEffect, useState } from "react";
import Link from "next/link";
import Map from "@/app/search/components/map";
import Stars from "@/components/stars";

export default function Top ({ data, tab, setTab }) {

    return (
  
        <div className='w-full space-y-8'>

            <div className="panel py-8 px-12">

                <div className="w-full flex justify-between items-start gap-6">

                    <div className="flex gap-16 relative">

                        <div className="flex flex-col items-center gap-4">

                            <div className="w-[9rem] h-[9rem] relative layer overflow-hidden">

                                <div className="absolute top-0 left-0 w-[50%] h-[100%] bg-primary rounded-l-full"></div>
                                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gray-200 rounded-r-full"></div>

                                <div className="absolute top-0 left-0 w-full h-full rounded-full p-1.5">
                                    <img src={`${storage}/${data.image}`} className='w-full h-full rounded-full object-cover border-[.3rem] border-white'/>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 text-gray-950 font-semibold tracking-wide">
                                <div className="w-[.7rem] h-[.7rem] bg-primary rounded-full"></div>
                                <span className="text-[1.3rem]">{data.name}</span>
                            </div>

                        </div>

                        <div className="flex flex-col gap-5 mt-2">

                            <div className="flex items-center gap-4 text-gray-950 font-semibold tracking-wide">
                                <span className="material-symbols-outlined text-[1.4rem] text-primary">local_fire_department</span>
                                <span className="text-[1.1rem]">Internal Medicine</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-950 font-semibold tracking-wide">
                                <span className="material-symbols-outlined text-[1.4rem] text-primary">pin_drop</span>
                                <span className="text-[1.05rem]">Egypt, Cairo, Talat Harb</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-950 font-semibold tracking-wide">
                                <span className="material-symbols-outlined text-[1.3rem] text-primary">shopping_cart</span>
                                <Stars count={data.rate} className='text-[1.2rem] mt-[1px]'/>
                                <span className="text-[.9rem]">( {data.reviews} )</span>
                            </div>

                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        <div className='w-[15rem] h-[10rem] relative cursor-pointer overflow-hidden group'>

                            {/* <Map data={data}/> */}

                            <img src="/media/layout/map.png" className="w-full h-full object-cover rounded-md"/>

                            <div className="absolute top-0 left-0 w-full rounded-md duration-200 h-full bg-black/5 group-hover:bg-black/10 flex justify-center items-center">
                                <img src="/media/layout/google-map.png" className="max-h-[45%] object-cover duration-300 group-hover:scale-[1.2]"/>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="panel p-0 overflow-hidden">

                <div className="flex items-center select-none">

                    <div onClick={() => setTab(1)} className={`flex justify-center items-center gap-3 py-5 px-6 border-b-2 duration-300 hover:bg-primary-light cursor-pointer ${tab === 1 ? 'bg-primary-light text-primary border-primary' : 'text-gray-950 border-white'}`}>
                        <span className="material-symbols-outlined text-[1.3rem]">account_circle</span>
                        <span className="text-[1.05rem] font-semibold tracking-wide">About Me</span>
                    </div>

                    <div onClick={() => setTab(2)} className={`flex justify-center items-center gap-3 py-5 px-6 border-b-2 duration-300 hover:bg-primary-light cursor-pointer ${tab === 2 ? 'bg-primary-light text-primary border-primary' : 'text-gray-950 border-white'}`}>
                        <span className="material-symbols-outlined text-[1.3rem]">shopping_cart</span>
                        <span className="text-[1.05rem] font-semibold tracking-wide">Services</span>
                    </div>

                    <div onClick={() => setTab(3)} className={`flex justify-center items-center gap-3 py-5 px-6 border-b-2 duration-300 hover:bg-primary-light cursor-pointer ${tab === 3 ? 'bg-primary-light text-primary border-primary' : 'text-gray-950 border-white'}`}>
                        <span className="material-symbols-outlined text-[1.3rem]">star</span>
                        <span className="text-[1.05rem] font-semibold tracking-wide">Reviews</span>
                    </div>

                </div>

            </div>

        </div>

    )

}
