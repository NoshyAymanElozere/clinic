"use client";
import { api, storage, fix_date_time, print } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Stars from "@/components/stars";
import Loader from "@/components/loader";

export default function Comments ({ id }) {

    const config = useSelector((state) => state.config);
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [end, setEnd] = useState(false);
    const [loader, setLoader] = useState(false);

    const _get_ = async() => {

        setLoader(true);
        // const response = await api(`product/${id}/comments`, {page: page, limit: limit});

        const response = {
            status: true,
            total: 1,
            items: [
                // {
                //     id: 1,
                //     rate: 3.5,
                //     content: 'Attention and dedication to work and great mastery. Continued communication More than wonderful work',
                //     created_at: '2024-09-08 01:12:29',
                //     client: {
                //         id: 1,
                //         name: 'Dr. Coding Master',
                //         image: 'user/1.png',
                //     }
                // },
            ]
        }

        const _data_ = [...data, ...response.items || []];
        setData(_data_);
        setEnd(_data_.length >= response.total);
        setLoader(false);

    }
    useEffect(() => {

        _get_();

    }, [page]);

    return (

        <div className="w-full">

            <div className="panel p-0 overflow-hidden">

                <div className="head">
                    <p>Reviews</p>
                </div>

                <ul className="p-6">
                    {
                        data.map((item, index) =>
                            <li key={index} className={`w-full flex flex-col pb-5 gap-3 ${index < data.length -1 && 'border-b mb-5'}`}>

                                <div className="flex justify-between items-start">

                                    <div className="flex justify-center items-center">
                                        
                                        <div className="image w-12 h-12 rounded-full overflow-hidden layer border-2 border-gray-400 p-0.5">
                                            <img src={`${storage}/${item.client?.image}`} className="w-full h-full rounded-full object-cover"/>
                                        </div>

                                        <div className="flex justify-center items-center flex-col px-3 gap-1 -mt-[2px]">

                                            <p className="flex justify-start items-center w-full">
                                                <span className="text-[1rem] tracking-wide font-semibold opacity-[.9]">
                                                    {item.client?.name}
                                                </span>
                                            </p>

                                            <p className="w-full flex justify-start items-center gap-1.5 -mt-[2px]">
                                                <span className="material-symbols-outlined text-[1rem] -mt-[1px] text-gray-700">schedule</span>
                                                <span className="text-[.85rem] text-gray-700 font-semibold">
                                                    {fix_date_time(item.created_at)}
                                                </span>
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex justify-end items-center mt-2">
                                        <Stars count={item.rate}/>
                                    </div>

                                </div>

                                <div className="flex justify-start items-center px-2">
                                    <p className="tracking-wide text-[.92rem] text-gray-800 w-[80%] font-semibold">{item.content}</p>
                                </div>

                            </li>
                        )
                    }
                    {
                        loader &&
                        <div className='relative h-[10rem]'>
                            <Loader className='bg medium'/>
                        </div>
                    }
                    {
                        !data.length ?
                        <div className='w-full h-[13rem] py-10 overflow-hidden'>
                            <div className='w-full h-full flex justify-center items-center layer'>
                                <img src="/media/layout/empty-comments.png" className="max-w-full h-full"/>
                            </div>
                        </div> : ''
                    }
                </ul>

            </div>

            {
                !end && !loader && data.length ?
                <div className='w-full flex justify-center items-center gap-3 mt-6 relative'>
                    <button onClick={() => setPage(page+1)} className="py-3 px-6 rounded-md bg-primary text-white cursor-pointer duration-300 hover:opacity-[.8] flex justify-center items-center gap-3">
                        <span className="material-symbols-outlined text-[1.3rem]">cloud_upload</span>
                        <span className="font-semibold tracking-wide text-[1rem]">Loading More</span>
                    </button>
                </div> : ''
            }

        </div>

    )

}
