"use client";
import { fix_number, storage } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Link from "next/link";
import Stars from "@/components/stars";
import Map from "./map";

export default function Side ({ data }) {

    const config = useSelector((state) => state.config);
    const [url, setUrl] = useState('');

    useEffect(() => {

        if ( typeof window !== 'undefined' ) {

            setUrl(`${location.protocol}//${location.host}/service/${data.id}/${data.name}`);

        }

    }, []);

    return (

        <div className="w-full space-y-6">

            <div className="panel p-0 overflow-hidden">

                <div className="head">
                    <p>Details</p>
                </div>

                <ul className="w-full p-6 space-y-5 cursor-default">

                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Reviews</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[.9rem] tracking-wide font-semibold">
                            <Stars count={data.rate} className='text-[1.2rem]'/>
                            <span className="opacity-[.8]">( {data.reviews} )</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Reply After</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>15 Minutes</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Sales</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>{data.orders}</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Ongoing orders</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>{data.pending_orders}</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Service price</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>{fix_number(data.new_price, true)} $</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Delivery duration</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>{data.duration}</span>
                        </div>
                    </li>

                </ul>

            </div>

            {
                data.vendor &&
                <div className="panel p-0 overflow-hidden">

                    <div className="head">
                        <p>Vendor</p>
                    </div>

                    <div className="w-full flex justify-between items-center py-6 px-5">

                        <div className="w-full flex flex-1 justify-start items-center gap-3">
                            
                            <Link href={`/profile/${data.vendor.id}`} className="w-14 h-14 rounded-full overflow-hidden layer border border-gray-500 p-0.5">
                                <img src={`${storage}/${data.vendor.image}`} className="w-full h-full rounded-full object-cover"/>
                            </Link>

                            <div className="flex justify-center items-center flex-col gap-1 -mt-[2px]">

                                <Link href={`/vendor/${data.vendor.id}`} className="flex justify-start items-center w-full text-gray-950 hover:text-primary">
                                    <span className="text-[1.05rem] tracking-wide font-semibold">{data.vendor.name}</span>
                                </Link>

                                <p className="flex justify-start items-center w-full select-none">
                                    <span className="material-symbols-outlined text-[.95rem] text-primary">verified</span>
                                    <span className="text-[.95rem] text-gray-600 px-1.5">Special</span>
                                </p>

                            </div>

                        </div>

                        <Link href={`/message/${data.vendor.id}/${data.id}`} className="gap-2.5 py-2 px-4 bg-white border border-primary text-primary duration-300 hover:bg-primary hover:text-white cursor-pointer rounded-md flex justify-center items-center">
                            <span className="material-symbols-outlined text-[1.2rem] mt-[3px]">chat</span>
                            <span className='text-[.95rem] tracking-wide font-semibold'>Contact</span>
                        </Link>

                    </div>

                </div>
            }

            <div className="panel p-2">

                <div className='w-full h-[15rem] relative cursor-pointer overflow-hidden group'>

                    {/* <Map data={data}/> */}

                    <img src="/media/layout/map.png" className="w-full h-full object-cover rounded-md"/>

                    <div className="absolute top-0 left-0 w-full rounded-md duration-200 h-full bg-black/5 group-hover:bg-black/10 flex justify-center items-center">
                        <img src="/media/layout/google-map.png" className="max-h-[45%] object-cover duration-300 group-hover:scale-[1.2]"/>
                    </div>

                </div>

            </div>

            <div className='panel p-0 overflow-hidden'>

                <Link href='/' className='w-full h-[16rem] p-4 bg-primary overflow-hidden rounded-md flex justify-center items-center layer'>
                    <img src="/media/layout/details-offer.png" className="max-w-full h-full"/>
                </Link>
                
            </div>

            <div className="panel p-0 overflow-hidden">

                <div className="head">
                    <p>Share service</p>
                </div>

                <ul className="w-full pt-7 pb-8 px-5 flex justify-center items-center gap-3">

                    <li className="rounded-full bg-[#0291ff] hover:opacity-[.8]">
                        <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" className='flex justify-center items-center rounded-full cursor-pointer text-[1.2rem] w-[2.5rem] h-[2.5rem]'>
                            <i className="fa fa-twitter text-white"></i>
                        </a>
                    </li>
                    <li className="rounded-full bg-[#006dc0] hover:opacity-[.8]">
                        <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" className='flex justify-center items-center rounded-full cursor-pointer text-[1.2rem] w-[2.5rem] h-[2.5rem]'>
                            <i className="fa fa-facebook text-[1.1rem] text-white"></i>
                        </a>
                    </li>
                    <li className="rounded-full bg-[#27d065] hover:opacity-[.8]">
                        <a href={`https://web.whatsapp.com/send/?text=${url}`} target="_blank" className='flex justify-center items-center rounded-full cursor-pointer text-[1.2rem] w-[2.5rem] h-[2.5rem]'>
                            <i className="fa fa-whatsapp text-[1.1rem] text-white"></i>
                        </a>
                    </li>
                    <li className="rounded-full bg-[#018bf4] hover:opacity-[.8]">
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" className='flex justify-center items-center rounded-full cursor-pointer text-[1.2rem] w-[2.5rem] h-[2.5rem]'>
                            <i className="fa fa-linkedin text-[1.1rem] text-white"></i>
                        </a>
                    </li>
                    <li className="rounded-full bg-[#027fde] hover:opacity-[.8]">
                        <a href={`https://web.telegram.org/a`} target="_blank" className='flex justify-center items-center rounded-full cursor-pointer text-[1.2rem] w-[2.5rem] h-[2.5rem]'>
                            <i className="fa fa-telegram text-[1.1rem] text-white"></i>
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    )

}
