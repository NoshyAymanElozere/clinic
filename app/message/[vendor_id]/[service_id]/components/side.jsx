"use client";
import { storage, fix_number } from '@/public/script/main';
import { useSelector } from 'react-redux';
import Stars from '@/components/stars';
import Link from 'next/link';

export default function Side ({ vendor, service, menu, setMenu }) {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-[27rem] h-full'>

            <div className={`absolute z-[5] hidden w-full h-full rounded-md bg-black/60 ${menu && '!block xl:!hidden'}`} onClick={() => setMenu(!menu)}></div>

            <div className='w-full h-full space-y-4'>

                <div className='panel p-0 overflow-hidden'>

                    <div className="head !bg-white">
                        <p>Vendor</p>
                    </div>

                    <div className='w-full flex justify-center items-center flex-col p-6 pb-7'>

                        <div className='w-[6rem] h-[6rem] rounded-full bg-primary-light border border-gray-500 p-1 layer'>
                            <img src={`${storage}/${vendor.image}`} className="w-full h-full object-cover rounded-full"/>
                        </div>

                        <div className='w-full flex justify-center items-center flex-col gap-3 mt-4'>

                            <p className='text-[1.2rem] text-gray-950 font-semibold tracking-wide'>{vendor.name}</p>

                            <Stars count={vendor.rate} className='text-[1.1rem]'/>

                        </div>

                        <Link href={`/profile/${vendor.id}`} className="w-[50%] mt-6 mb-1 gap-3 py-2.5 bg-white border border-primary text-primary duration-300 hover:bg-primary hover:text-white cursor-pointer rounded-md flex justify-center items-center">
                            <span className="material-symbols-outlined text-[1.4rem] -mt-[2px]">person</span>
                            <span className='text-[.95rem] tracking-wide font-semibold'>View Profile</span>
                        </Link>

                    </div>

                </div>

                <div className=' panel p-0 overflow-hidden'>

                    <div className="head !bg-white">
                        <p>Service</p>
                    </div>

                    <ul className="w-full px-6 py-7 space-y-5">

                        <Link href={`/service/${service.id}/${service.name}`} className="w-full group flex justify-start items-start gap-5">
                        
                            <div className='w-[4rem] h-[3rem] rounded-sm layer overflow-hidden'>
                                <img src={`${storage}/${service.image}`} className='w-full h-full rounded-sm object-cover'/>
                            </div>

                            <div className="w-full flex flex-1 justify-between gap-2 -mt-[2px]">

                                <div className='w-full text-[1.1rem] font-semibold tracking-wide duration-100 flex group-hover:underline'>
                                    {service.name}
                                </div>

                                <span className="font-bold text-[1.1rem]">{fix_number(service.new_price, true)}&nbsp;$</span>

                            </div>

                        </Link>

                        {/* <li className='w-full space-y-3.5'>

                            <div className='w-full flex items-center gap-3 text-[.95rem] text-gray-700 font-semibold tracking-wide'>
                                <span className='material-symbols-outlined text-primary -mt-[1px] text-[1.4rem]'>group</span>
                                <div className='w-full flex gap-2'>
                                    <Stars count={service.rate} className='text-[1rem]'/>
                                    <span className='text-[.85rem] -mt-[1px] font-semibold'>( {service.reviews} )</span>
                                </div>
                            </div>

                            <div className='w-full flex items-center gap-3 text-[.95rem] text-gray-700 font-semibold tracking-wide'>
                                <span className='material-symbols-outlined text-primary -mt-[1px] text-[1.4rem]'>check_circle</span>
                                <span className='flex gap-2'>
                                    <span className='underline text-gray-950'>Free Cancellation</span>
                                    <span>before {service.cancel_date}</span>
                                </span>
                            </div>

                        </li> */}

                    </ul>

                </div>

                <div className='w-full flex gap-3 bg-danger-light border border-gray-300 py-4 px-6 rounded-md cursor-default'>

                    <span className='material-symbols-outlined text-[1.2rem] mt-[2px] text-danger'>info</span>

                    <span className='text-[.95rem] font-semibold tracking-wide text-gray-950'>
                        Please follow the <Link href='/policy' className='underline hover:text-primary px-1'>Terms Policy</Link> during the Conversation .
                    </span>

                </div>

            </div>

        </div>

    )

}
