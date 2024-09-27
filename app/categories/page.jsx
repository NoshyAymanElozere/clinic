"use client";
import { api, storage, alert_msg, print, fix_number } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Form from '@/components/form';
import Title from '@/components/title';
import Features from '@/components/features';
import Services from '@/components/cards/services';
import Cards from '@/components/cards/categories';
import Link from 'next/link';

export default function Categories () {

    const config = useSelector((state) => state.config);
    const [data, setData] = useState({categories: []});
    const [filters, setFilters] = useState({});
    const [tab, setTab] = useState('1');

    const _get_ = async() => {

        // const response = api('categories');

        const services = [
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
                name: 'Oriente Palace Apartments',
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
                image: 'service/3.png',
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
        ];
        const categories = [
            {
                id: 1,
                name: 'Beuty Center',
                image: 'service/1.png',
                reviews: 429,
                rate: 5,
                services: 30,
                location: 'Egypt, Cairo',
            },
            {
                id: 2,
                name: 'Second Category',
                image: 'service/2.png',
                reviews: 429,
                rate: 5,
                services: 40,
                location: 'Egypt, Cairo',
            },
            {
                id: 3,
                name: 'Beuty Center',
                image: 'service/3.png',
                reviews: 429,
                rate: 5,
                services: 30,
                location: 'Egypt, Cairo',
            },
            {
                id: 4,
                name: 'Second Category',
                image: 'service/4.png',
                reviews: 429,
                rate: 5,
                services: 40,
                location: 'Egypt, Cairo',
            },
            {
                id: 5,
                name: 'Beuty Center',
                image: 'service/5.png',
                reviews: 429,
                rate: 5,
                services: 30,
                location: 'Egypt, Cairo',
            },
            {
                id: 6,
                name: 'Beuty Center',
                image: 'service/6.png',
                reviews: 429,
                rate: 5,
                services: 30,
                location: 'Egypt, Cairo',
            },
            {
                id: 7,
                name: 'Second Category',
                image: 'service/7.png',
                reviews: 429,
                rate: 5,
                services: 40,
                location: 'Egypt, Cairo',
            },
            {
                id: 8,
                name: 'Beuty Center',
                image: 'service/11.png',
                reviews: 429,
                rate: 5,
                services: 30,
                location: 'Egypt, Cairo',
            },
            {
                id: 9,
                name: 'Second Category',
                image: 'service/4.png',
                reviews: 429,
                rate: 5,
                services: 40,
                location: 'Egypt, Cairo',
            },
            {
                id: 10,
                name: 'Beuty Center',
                image: 'service/3.png',
                reviews: 429,
                rate: 5,
                services: 30,
                location: 'Egypt, Cairo',
            },
            {
                id: 11,
                name: 'Second Category',
                image: 'service/2.png',
                reviews: 429,
                rate: 5,
                services: 40,
                location: 'Egypt, Cairo',
            },
            {
                id: 12,
                name: 'Beuty Center',
                image: 'service/1.png',
                reviews: 429,
                rate: 5,
                services: 30,
                location: 'Egypt, Cairo',
            },
        ];

        setTimeout(() => setData({...data, recommeded: services, recently: services, categories: categories}), 5000);
        
    }
    useEffect(() => {

        _get_();

    }, []);

    return (

        <div className='w-full space-y-12'>

            <main className='space-y-12'>

                <div className='w-full mt-8 rounded-md border border-primary/50 h-[13rem] relative bg-center bg-cover bg-primary/10 overflow-hidden -mb-[13.5rem]'></div>

                <div className='w-[85%] m-auto space-y-3'>

                    <div className='w-full flex justify-center items-center pb-3'>

                        <div className='text-[1.6rem] font-bold tracking-wide text-primary cursor-default'>
                            Book ! Get cashback 🔥
                        </div>

                    </div>

                    <div className='w-full flex justify-start items-center gap-2 select-none'>

                        <div onClick={() => setTab('1')} className={`panel border-gray-400 py-2 px-5 text-[.95rem] cursor-pointer rounded-md flex justify-center items-center gap-2 tracking-wide ${tab === '1' && 'border-primary text-primary bg-primary-light'}`}>
                            <span className='material-symbols-outlined text-[1.2rem]'>lan</span>
                            <span>Beach</span>
                        </div>
                        <div onClick={() => setTab('3')} className={`panel border-gray-400 py-2 px-5 text-[.95rem] cursor-pointer rounded-md flex justify-center items-center gap-2 tracking-wide ${tab === '3' && 'border-primary text-primary bg-primary-light'}`}>
                            <span className='material-symbols-outlined text-[1.2rem]'>apps</span>
                            <span>Region</span>
                        </div>
                        <div onClick={() => setTab('4')} className={`panel border-gray-400 py-2 px-5 text-[.95rem] cursor-pointer rounded-md flex justify-center items-center gap-2 tracking-wide ${tab === '4' && 'border-primary text-primary bg-primary-light'}`}>
                            <span className='material-symbols-outlined text-[1.2rem]'>pin_drop</span>
                            <span>Location</span>
                        </div>

                    </div>

                    <Form filters={filters} setFilters={setFilters} scrollTop={100}/>

                </div>

                <div className='w-full flex flex-col gap-6'>

                    <div className='w-full grid grid-cols-7 gap-3'>

                        <div className='w-full h-[10rem] bg-white border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-5 select-none cursor-pointer duration-300 hover:shadow-lg'>
                            <img src="/media/category/1.svg" className='w-11 h-11'/>
                            <p className='text-[1.1rem] font-semibold tracking-wide'>Development</p>
                        </div>
                        <div className='w-full h-[10rem] bg-white border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-5 select-none cursor-pointer duration-300 hover:shadow-lg'>
                            <img src="/media/category/2.svg" className='w-11 h-11'/>
                            <p className='text-[1.1rem] font-semibold tracking-wide'>Markting</p>
                        </div>
                        <div className='w-full h-[10rem] bg-white border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-5 select-none cursor-pointer duration-300 hover:shadow-lg'>
                            <img src="/media/category/3.svg" className='w-11 h-11'/>
                            <p className='text-[1.1rem] font-semibold tracking-wide'>Desgining</p>
                        </div>
                        <div className='w-full h-[10rem] bg-white border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-5 select-none cursor-pointer duration-300 hover:shadow-lg'>
                            <img src="/media/category/4.svg" className='w-11 h-11'/>
                            <p className='text-[1.1rem] font-semibold tracking-wide'>Writting</p>
                        </div>
                        <div className='w-full h-[10rem] bg-white border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-5 select-none cursor-pointer duration-300 hover:shadow-lg'>
                            <img src="/media/category/5.svg" className='w-11 h-11'/>
                            <p className='text-[1.1rem] font-semibold tracking-wide'>Maintenance</p>
                        </div>
                        <div className='w-full h-[10rem] bg-white border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-5 select-none cursor-pointer duration-300 hover:shadow-lg'>
                            <img src="/media/category/6.svg" className='w-11 h-11'/>
                            <p className='text-[1.1rem] font-semibold tracking-wide'>Voices</p>
                        </div>
                        <div className='w-full h-[10rem] bg-white border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-5 select-none cursor-pointer duration-300 hover:shadow-lg'>
                            <img src="/media/category/7.svg" className='w-11 h-11'/>
                            <p className='text-[1.1rem] font-semibold tracking-wide'>Management</p>
                        </div>

                    </div>
                    
                </div>

                <div className='w-[80%] m-auto rounded-md overflow-hidden layer'>
                    <img src="/media/layout/banner.png" className='w-full'/>
                </div>

                <div className='space-y-8'>

                    <div className='w-full flex justify-between items-center gap-6 cursor-default'>

                        <div className='flex items-center gap-3'>
                            <span className='material-symbols-outlined !text-[1.5rem]'>apps</span>
                            <span className='text-[1.3rem] font-bold tracking-wide'>Browse All Categories</span>
                        </div>

                        <div className='panel py-3 px-8 cursor-pointer flex justify-center items-center gap-3 select-none duration-300 bg-primary-light border-primary hover:text-primary'>
                            <span className='text-[1rem] font-semibold tracking-wide'>Find My Service</span>
                            <span className='material-symbols-outlined !text-[1.2rem]'>arrow_forward</span>
                        </div>

                    </div>

                    <Cards data={data.categories}/>

                </div>

            </main>

            <Title style={2} head="Keep services flexible" text="Use Reserve Now Pay Later to secure the activities you don't want to miss it."/>

            <Features style={3} title='Free cancellation' text="You'll receive a full refund at least 24 hours"/>

            <main className='space-y-8'>

                <div className='w-full flex justify-between items-center gap-6 cursor-default'>

                    <div className='flex items-center gap-3'>
                        <span className='material-symbols-outlined !text-[1.5rem]'>shopping_cart</span>
                        <span className='text-[1.3rem] font-bold tracking-wide'>Recently services</span>
                    </div>

                    <div className='panel py-3 px-8 cursor-pointer flex justify-center items-center gap-3 select-none duration-300 bg-primary-light border-primary hover:text-primary'>
                        <span className='text-[1rem] font-semibold tracking-wide'>More Services</span>
                        <span className='material-symbols-outlined !text-[1.2rem]'>arrow_forward</span>
                    </div>

                </div>

                <Services data={data.recommeded} slider/>

                <div className='w-full flex justify-center items-center bg-primary-light border border-primary/50 rounded-md p-6'>

                    <div className="flex justify-center items-center gap-5 cursor-default">

                        <span className='text-[1.1rem] font-semibold tracking-wide'>Were these results helpful ?</span>

                        <div className="flex justify-center items-center gap-5">

                            <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 21 20" className='cursor-pointer hover:opacity-[.8] duration-300 hover:scale-[1.1]'>
                                <path fill="rgba(255, 255, 255, 1)" fillRule="evenodd" d="M5.5 17.755c.542.407 1.199.671 
                                    1.918.735l6.311.561a3.75 3.75 0 
                                    003.803-2.315l2.252-5.505c.875-2.138-.698-4.48-3.008-4.48H14.5l-.085-.001h-.797a.183.183 0 
                                    01-.1-.026c-.014-.009-.017-.015-.018-.021A5.857 5.857 0 0113.25 5V3A2.75 2.75 0 0010.5.25H9a.75.75 0 
                                    00-.75.75v3.882a3.187 3.187 0 01-2.457 3.102c-.1.024-.199.054-.293.09V8a.75.75 0 00-.75-.75h-4A.75.75 0 
                                    000 8v10c0 .414.336.75.75.75h4A.75.75 0 005.5 18v-.245z" clipRule="evenodd">
                                </path>
                                <path fill="rgba(24, 107, 109, 1)" fillRule="evenodd" d="M5.5 17.755c.542.407 1.199.671 
                                    1.918.735l6.311.561a3.75 3.75 0 
                                    003.803-2.315l2.252-5.505c.875-2.138-.698-4.48-3.008-4.48H14.5l-.085-.001h-.797a.183.183 
                                    0 01-.1-.026c-.014-.009-.017-.015-.018-.021A5.857 5.857 0 0113.25 5V3A2.75 2.75 0 0010.5.25H9a.75.75 0 
                                    00-.75.75v3.882a3.187 3.187 0 01-2.457 3.102c-.1.024-.199.054-.293.09V8a.75.75 0 00-.75-.75h-4A.75.75 
                                    0 000 8v10c0 .414.336.75.75.75h4A.75.75 0 005.5 18v-.245zM9.75 1.75v3.132a4.687 4.687 0 01-3.614 
                                    4.562.825.825 0 00-.636.803v4.508a2.25 2.25 0 002.05 2.241l2.991.266a2.25 2.25 0 
                                    01-.86-2.612l2.141-6.065c.12-.341.303-.647.533-.907a1.522 1.522 0 01-.29-.535A7.355 
                                    7.355 0 0111.75 5V3c0-.69-.56-1.25-1.25-1.25h-.75zM4 8.75H1.5v8.5H4v-8.5zm9.862 8.807l-.275-.024a.749.749 
                                    0 00-.17-.157l-2.03-1.353a.75.75 0 01-.291-.873l2.14-6.066a1.25 1.25 0 011.16-.834h2.38a1.75 1.75 
                                    0 011.62 2.413l-2.252 5.505a2.25 2.25 0 01-2.282 1.389z" clipRule="evenodd">
                                </path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 21 20" className='cursor-pointer hover:opacity-[.8] duration-300 hover:scale-[1.1]'>
                                <path fill="rgba(255, 255, 255, 1)" fillRule="evenodd" d="M15.5 2.245a3.736 3.736 0 
                                    00-1.918-.735L7.271.949a3.75 3.75 0 00-3.803 2.315L1.216 8.77c-.875 2.138.698 4.48 3.008 
                                    4.48H6.5l.085.001h.797c.049 0 .083.014.1.025.014.01.016.016.018.022.118.385.25.977.25 
                                    1.703v2a2.75 2.75 0 002.75 2.75H12a.75.75 0 00.75-.75v-3.882a3.187 3.187 0 
                                    012.457-3.102c.1-.024.199-.054.293-.09V12c0 .414.336.75.75.75h4A.75.75 0 
                                    0021 12V2a.75.75 0 00-.75-.75h-4a.75.75 0 00-.75.75v.245z" clipRule="evenodd">
                                </path>
                                <path fill="rgba(24, 107, 109, 1)" fillRule="evenodd" d="M15.207 12.015c.1-.023.198-.053.293-.089V12c0 
                                    .414.336.75.75.75h4A.75.75 0 0021 12V2a.75.75 0 00-.75-.75h-4a.75.75 0 00-.75.75v.126a3.737 3.737 0 
                                    00-1.755-.717L7.433.567a3.75 3.75 0 00-3.988 2.35L1.136 8.816c-.834 2.132.738 4.435 3.027 
                                    4.435h3.38c.092.284.207.823.207 1.75v2a2.75 2.75 0 002.75 2.75H12a.75.75 0 00.75-.75v-3.882a3.187 
                                    3.187 0 012.457-3.103zM11.25 18.25v-3.132a4.687 4.687 0 013.614-4.563.825.825 0 00.636-.803V5.126a2.25 
                                    2.25 0 00-1.953-2.23l-6.314-.842a2.25 2.25 0 00-2.392 1.41L2.533 9.362a1.75 1.75 0 001.63 2.388h3.423c.053 
                                    0 .108.002.164.008v-.064a1.25 1.25 0 00-1.044-1.233l-1.33-.222a.75.75 0 01.247-1.48l1.33.222a2.75 2.75 
                                    0 012.297 2.713V17c0 .69.56 1.25 1.25 1.25h.75zm5.75-7v-8.5h2.5v8.5H17z" clipRule="evenodd">
                                </path>
                            </svg>

                        </div>

                    </div>

                </div>

            </main>

        </div>

    )

}
