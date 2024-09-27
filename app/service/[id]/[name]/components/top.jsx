"use client";
import { Countries } from '@/utils/countries';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Stars from '@/components/stars';
import Link from "next/link";

export default function Top ({ data, buy }) {

    const config = useSelector((state) => state.config);
    const [error, setError] = useState(true);

    return (

        <div className="w-full space-y-4">
        
            <div className="flex justify-between items-center gap-4">

                <div className="flex justify-start items-center gap-2 select-none">

                    <Link href='/' className="text-[.95rem] text-gray-600 py-1.5 px-4 flex justify-center items-center gap-2 font-semibold rounded-md tracking-wide duration-200 hover:bg-primary-light bg-white border border-gray-300">
                        <span>Home</span>
                    </Link>

                    <Link href='/categories' className="text-[.95rem] text-gray-600 py-1.5 px-4 flex justify-center items-center gap-2 font-semibold rounded-md tracking-wide duration-200 hover:bg-primary-light bg-white border border-gray-300">
                        <span>Categories</span>
                    </Link>

                    {
                        data.category &&
                        <Link href={`/categories/${data.category.id}`} className="text-[.95rem] text-gray-600 py-1.5 px-4 flex justify-center items-center gap-2 font-semibold rounded-md tracking-wide duration-200 hover:bg-primary-light bg-white border border-gray-300">
                            <span>{data.category.name}</span>
                        </Link>
                    }

                </div>

                <Link href={`tel:${data.phone}`} className='flex justify-center items-center gap-2 tracking-wide text-gray-950 text-[1.05rem] group cursor-pointer'>
                    <span className="material-symbols-outlined text-[1.3rem] -mt-[2px]">phone_in_talk</span>
                    <span></span>
                    <span>Book Online or call : </span>
                    <span className='group-hover:underline group-hover:text-primary mt-[2px]'>{data.phone}</span>
                </Link>

            </div>

            {
                ( data.available === false && error ) &&
                <div className='w-full pt-2'>

                    <div className="w-full -mb-1 p-4 px-5 rounded-md bg-danger-light flex justify-between items-center border border-gray-200">

                        <div className="flex justify-start items-center gap-3 text-danger tracking-wide font-semibold cursor-default">
                            <span className="material-symbols-outlined text-[1.3rem]">error</span>
                            <span className="text-[1.05rem]">The services is not available now .</span>
                        </div>

                        <div onClick={() => setError(false)} className='w-[2rem] h-[2rem] flex justify-center items-center rounded-full text-danger border border-danger cursor-pointer duration-300 hover:bg-danger hover:text-white'>
                            <span className="material-symbols-outlined text-[1.2rem]">close</span>
                        </div>

                    </div>

                </div>
            }

            <div className="w-full flex justify-between items-center gap-2">
                
                <div className='w-[80%] flex flex-col'>

                    <div className="w-full text-[1.6rem] py-1.5 text-gray-950 font-semibold flex gap-3 cursor-default">
                        {/* <span className="material-symbols-outlined text-[1.5rem] mt-[6.5px]">wifi_notification</span> */}
                        <span className="w-full tracking-wide">{data.name || '--'}</span>
                    </div>

                    <div className="w-full text-[1rem] py-1.5 text-gray-950 font-semibold flex gap-2 cursor-default">

                        <span className="material-symbols-outlined text-[1.5rem] mt-[1px]">pin_drop</span>

                        <span className='flex justify-start items-center gap-2 ltr:pl-1.5 rtl:pr-1.5 mt-[1px]'>
                            <Stars count={data.rate} className='text-[1.2rem]'/>
                            <span className='text-[.9rem] -mt-[1px]'>( {data.reviews} )</span>
                        </span>

                        <span className='flex justify-start items-center tracking-wide gap-1.5 -mt-[1px]'>
                            <span className='px-1.5'>-</span>
                            <span>{Countries.find(_ => _.code === data.country?.toUpperCase()).en_name}</span>
                            <span>,</span>
                            <span>{data.city}</span>
                        </span>
                        
                    </div>

                </div>
                    
                <button onClick={buy} className="py-3 px-6 rounded-md bg-primary text-white cursor-pointer duration-300 hover:opacity-[.8] flex justify-center items-center gap-3">
                    <span className="material-symbols-outlined text-[1.2rem]">shopping_cart</span>
                    <span className="font-semibold tracking-wide text-[1rem]">Book Now</span>
                </button>

            </div>

        </div>

    )

}
