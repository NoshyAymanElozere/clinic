"use client";
import { api, alert_msg, storage, print, fix_number } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Form from '@/components/form';
import Cards from '@/components/cards/services';

export default function Category ({ params }) {

    const config = useSelector((state) => state.config);
    const [filters, setFilters] = useState({});
    const [data, setData] = useState({});
    const [tab, setTab] = useState('1');

    useEffect(() => {

        const category = {
            id: 1,
            name: 'Detection of chest diseases information',
            description: 'Detection and major blood vessels. A chest X-ray also can reveal lung problems .',
            image: 'service/19.png',
            services: 5,
            rate: 4,
            reviews: 319,
            created_at: '2024-09-12',
        };
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

        setData({...data, category: category, services: services});

    }, []);

    return (

        <div className='w-full cursor-default'>

            <div className="w-full h-[25rem] relative bg-center bg-cover bg-[url(/media/service/19.png)]">

                <div className='w-full h-full bg-black/40'>

                    <main className='h-full flex justify-center items-center flex-col gap-4'>
                        
                        <h1 className='text-[2.5rem] text-white font-bold tracking-wide flex w-full leading-[3.5rem]'>
                            <span className='w-[35rem]'>{data.category?.name}</span>
                        </h1>

                        <p className='text-[1.2rem] text-white font-semibol tracking-wide flex w-full'>
                            <span className='w-[30rem]'>{data.category?.description}</span>
                        </p>

                    </main>

                </div>

            </div>
              
            <main>
                <Form className='-translate-y-[50%] -mb-[3rem] z-40 !p-5' scrollTop={280} filters={filters} setFilters={setFilters}/>
            </main>

            <main className='space-y-3 mt-12 mb-8'>

                <div className='flex justify-start items-center text-2xl text-gray-900 font-bold tracking-wide gap-3'>
                    <span className='material-symbols-outlined !text-[1.8rem]'>ads_click</span>
                    <span>Browse All Services</span>
                </div>

                <div className='flex justify-start items-center text-[1.2rem] text-gray-900 font-semibold tracking-wide gap-3'>
                    <span>{data.category?.name}</span>
                </div>

            </main>

            <main>
                
                <Cards data={data.services} pagination read={( page, limit ) => {}}/>
                
            </main>

            <div className='w-full bg-primary/10 px-4 py-12 mt-[4rem] mb-6'>

                <main className='flex justify-center items-center flex-col gap-12 cursor-default'>

                    <h1 className='text-center text-[1.6rem] text-gray-950 font-bold tracking-wide w-[20rem] leading-[140%]'>
                        Public Services
                    </h1>

                    <Cards data={data.services} style={2}/>

                </main>

            </div>

            <main className='my-16'>

                <div className='w-full flex flex-col gap-4'>

                    <div className='w-full flex flex-col gap-2 cursor-default pb-2'>

                        <div className='flex justify-start items-center text-[1.3rem] font-bold tracking-wide text-gray-950'>
                            Quick and easy trip planner
                        </div>

                        <div className='flex justify-start items-center text-[1rem] font-semibold tracking-wide text-gray-950'>
                            Pick a vibe and explore the top destinations in Egypt
                        </div>
                        
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

                    <Cards data={data.services} slider/>

                </div>

            </main>

        </div>

    )

}
