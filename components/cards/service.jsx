"use client";
import { fix_number, storage } from '@/public/script/main';
import { useSelector } from 'react-redux';
import Stars from '@/components/stars';
import Link from 'next/link';

export default function Card ({ data, style }) {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full'>
            {
                style === 2 ?
                <div className='panel py-5 px-6 shadow-none flex justify-start items-center gap-4 hover:shadow-lg duration-300 cursor-pointer'>
                                    
                    <div className='w-12 h-12 flex justify-center items-center rounded-sm overflow-hidden layer'>
                        <img src={`${storage}/${data.image}`} className="w-full h-full object-cover" />
                    </div>

                    <div className='flex flex-col gap-1'>

                        <p className='text-[1rem] text-gray-950 font-bold tracking-wide line-clamp-1'>
                            {data.name}
                        </p>

                        <p className='text-[.9rem] text-gray-950 font-semibold tracking-wide'>
                            {data.reviews} reviews
                        </p>

                    </div>

                </div> :
                <div className="panel p-4 w-full bg-white rounded-md overflow-hidden">

                    <Link href={`/service/${data.id}/${data.name}`}>

                        <div className='w-full h-[11rem] rounded-sm overflow-hidden relative'>

                            <img className="w-full h-full object-cover object-center" src={`${storage}/${data.image}`}/>

                            <div className='absolute w-full bottom-0 left-0 px-4 py-3 flex justify-start items-center'>

                                <div className='w-[2.8rem] h-[2.8rem] rounded-full shadow-md border-2 border-primary p-[1px] cursor-pointer bg-black'>
                                    <img className="w-full h-full rounded-full object-cover object-center" src={`${storage}/${data.vendor?.image}`}/>
                                </div>

                            </div>

                        </div>

                    </Link>
                
                    <div className="px-1 pt-5 flex justify-start flex-col gap-3 cursor-default">

                        <h2 className="text-gray-950 font-bold text-[1.15rem]">{data.name}</h2>

                        <div className='flex gap-2 text-sm text-gray-800 font-semibold'>
                            <Stars count={data.rate}/>
                            <span>( {fix_number(data.reviews)} )</span>
                        </div>

                        <p className="w-[95%] text-gray-900 text-[1rem] tracking-wide font-bold">{data.location}</p>

                        <div className="w-full flex items-center justify-between gap-5 pt-3">

                            <div className='flex justify-start items-center bg-primary-light/50 rounded-md py-2 px-6 border border-gray-300'>
                                <span className="text-gray-950 font-bold tracking-wide text-[1rem]">${fix_number(data.new_price, true)}</span>
                            </div>

                            <Link href={`/service/${data.id}/${data.name}`} className='w-full'>
                                <button className="w-full py-2.5 bg-primary text-white text-[.95rem] font-semibold tracking-wide rounded-md hover:bg-primary/75">
                                    Book Now
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>
            }
        </div>

    )

}
