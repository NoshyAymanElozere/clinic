"use client";
import { api } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cards from "@/components/cards/services";

export default function Index ({ id }) {

    const config = useSelector((state) => state.config);
    const [tab, setTab] = useState('1');
    const [data, setData] = useState([]);

    const _get_ = async() => {

        // const response = await api(`product/${id}/recommended`);

        const response = {
            status: true,
            items: [
                {
                    id: 1,
                    name: 'Beuty Center In Algamal',
                    image: 'service/9.png',
                    reviews: 429,
                    rate: 5,
                    location: 'Egypt, Cairo',
                    new_price: 60.00,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 2,
                    name: 'Genius loyalty program',
                    image: 'service/11.png',
                    reviews: 540,
                    rate: 4,
                    location: 'Jurdan, Omman',
                    new_price: 38.35,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 3,
                    name: 'Destinations we love',
                    image: 'service/8.png',
                    reviews: 129,
                    rate: 2,
                    location: 'Emirates, Dubai',
                    new_price: 12.50,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 4,
                    name: 'Oriente Apartments',
                    image: 'service/4.png',
                    reviews: 723,
                    rate: 4,
                    location: 'Saudi arabian, Rayiad',
                    new_price: 30.12,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 5,
                    name: 'Aparthotel Stare Miasto',
                    image: 'service/14.png',
                    reviews: 312,
                    rate: 3,
                    location: 'Egypt, Alexandria',
                    new_price: 50.00,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 6,
                    name: 'Aparthotel Stare Miasto',
                    image: 'service/8.png',
                    reviews: 312,
                    rate: 3,
                    location: 'Egypt, Alexandria',
                    new_price: 50.00,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
            ]
        }

        setData(response.items || []);

    }
    useEffect(() => {

        _get_();

    }, []);

    return (

        <div className="w-full">
            {
                data.length ?
                <div className='w-full flex flex-col gap-5 mt-8'>

                    <div className='flex justify-start items-center text-[1.3rem] font-bold tracking-wide text-gray-950 cursor-default'>
                        Recommended
                    </div>

                    <div className='w-full flex justify-start items-center gap-2 select-none'>

                        <div onClick={() => setTab('1')} className={`panel border-gray-400 py-2 px-5 text-[.95rem] cursor-pointer rounded-md flex justify-center items-center gap-2 tracking-wide ${tab === '1' && 'border-primary text-primary bg-primary-light'}`}>
                            <span className='material-symbols-outlined text-[1.2rem]'>lan</span>
                            <span>Beach</span>
                        </div>
                        <div onClick={() => setTab('2')} className={`panel border-gray-400 py-2 px-5 text-[.95rem] cursor-pointer rounded-md flex justify-center items-center gap-2 tracking-wide ${tab === '2' && 'border-primary text-primary bg-primary-light'}`}>
                            <span className='material-symbols-outlined text-[1.2rem]'>fit_screen</span>
                            <span>Twon</span>
                        </div>
                        <div onClick={() => setTab('3')} className={`panel border-gray-400 py-2 px-5 text-[.95rem] cursor-pointer rounded-md flex justify-center items-center gap-2 tracking-wide ${tab === '3' && 'border-primary text-primary bg-primary-light'}`}>
                            <span className='material-symbols-outlined text-[1.2rem]'>apps</span>
                            <span>Region</span>
                        </div>
                        <div onClick={() => setTab('5')} className={`panel border-gray-400 py-2 px-5 text-[.95rem] cursor-pointer rounded-md flex justify-center items-center gap-2 tracking-wide ${tab === '5' && 'border-primary text-primary bg-primary-light'}`}>
                            <span className='material-symbols-outlined text-[1.2rem]'>monitoring</span>
                            <span>Paied</span>
                        </div>

                    </div>

                    <div className="panel">
                        <Cards data={data} slider/>
                    </div>

                </div> : ''
            }
        </div>

    )

}
