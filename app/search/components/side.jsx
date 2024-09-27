"use client";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Elements from "@/components/elements";
import Stars from '@/components/stars';
import Map from './map';

export default function Side ({ data, filters, setFilters }) {

    const config = useSelector((state) => state.config);
    const [items, setItems] = useState({});
    const [range, setRange] = useState([0, 1000]);

    useEffect(() => {

        setItems({
            types: ['Every', 'Male', 'Female', 'None'],
            stars: [5, 4, 3, 2, 1],
            categories: [
                {id: 1, name: 'Double Room', total: 20},
                {id: 2, name: 'Single Room', total: 15},
                {id: 3, name: 'Free Hotels', total: 11},
                {id: 4, name: 'All Deals', total: 10},
                {id: 5, name: 'Apartments', total: 9},
                {id: 6, name: 'Based guest reviews', total: 5},
                {id: 7, name: 'Entire apartments', total: 3},
            ],
            specials: [
                {id: 1, name: 'Deals & Discounts', total: 16},
                {id: 2, name: 'Free Cancellation', total: 12},
                {id: 3, name: 'Likely to Sell Out', total: 9},
                {id: 4, name: 'Skip-The-Line', total: 3},
                {id: 5, name: 'Private Tour', total: 2},
                {id: 6, name: 'New on Viator', total: 1},
            ],
        });

    }, []);

    return (

        <div className="w-full flex flex-col gap-4">

            <div className="panel p-2">

                <div className='w-full h-[12rem] relative cursor-pointer overflow-hidden group'>

                    {/* <Map data={data}/> */}

                    <img src="/media/layout/map.png" className="w-full h-full object-cover rounded-md"/>

                    <div className="absolute top-0 left-0 w-full rounded-md duration-200 h-full bg-black/5 group-hover:bg-black/10 flex justify-center items-center">
                        <img src="/media/layout/google-map.png" className="max-h-[45%] object-cover duration-300 group-hover:scale-[1.2]"/>
                    </div>

                </div>

            </div>

            <div className='panel p-5 pb-8 space-y-6'>

                <div className='flex justify-start items-center gap-2 py-3 px-4 text-[.95rem] select-none font-semibold text-white tracking-wide border-b rounded-md bg-primary/75'>
                    <span className='material-symbols-outlined text-[1.2rem] -mt-[1px]'>tune</span>
                    <span>FILTERS</span>
                </div>

                <div className='space-y-5'>

                    <h1 className='flex justify-start items-center gap-2 p-3 rounded-md text-[.95rem] select-none font-semibold text-black tracking-wide bg-primary-light'>
                        <span className='material-symbols-outlined text-[1.2rem]'>bar_chart</span>
                        <span>Pricing</span>
                    </h1>

                    <ul className='w-full space-y-4 pb-2 px-2'>

                        <div className='flex justify-between items-center text-[.9rem] font-semibold select-none'>
                            <span>$ {range[0]}</span>
                            { range[1] === 1000 ? <span>$ {range[1]} +</span> : <span>$ {range[1]}</span> }
                        </div>

                        <Elements element='range' min={0} max={1000} step={1} value={filters.range} onChange={(e) => { setFilters({...filters, range: e}); setRange(e); }}/>

                    </ul>

                </div>

                <div className='space-y-5'>

                    <h1 className='flex justify-start items-center gap-2 p-3 rounded-md text-[.95rem] select-none font-semibold text-black tracking-wide bg-primary-light'>
                        <span className='material-symbols-outlined text-[1.2rem]'>account_circle</span>
                        <span>Gender</span>
                    </h1>

                    <ul className='grid grid-cols-3 gap-2 select-none'>
                        {
                            items.types?.map((item, index) => 
                                <li key={index} onClick={() => setFilters({...filters, type: item})} className={`panel w-full duration-300 flex justify-center items-center rounded-md py-1.5 text-gray-800 text-[.9rem] font-semibold tracking-wide cursor-pointer ${filters.type === item ? 'bg-primary/75 text-white !border-primary shadow-md' : 'bg-primary-light/30 hover:bg-primary-light'}`}>{item}</li>
                            )
                        }
                    </ul>

                </div>

                <div className='space-y-5'>

                    <h1 className='flex justify-start items-center gap-2 p-3 rounded-md text-[.95rem] select-none font-semibold text-black tracking-wide bg-primary-light'>
                        <span className='material-symbols-outlined text-[1.2rem]'>apps</span>
                        <span>Categories</span>
                    </h1>

                    <ul className='space-y-3'>
                        {
                            items.categories?.map((item, index) => 
                                <li key={index} onClick={() => setFilters({...filters, categories: filters.categories?.includes(item.id) ? filters.categories?.filter(_ => _ !== item.id) : [...filters.categories || [], item.id]})} className='w-full group flex justify-between items-center select-none cursor-pointer gap-4'>
                                    
                                    <div className='flex justify-start items-center gap-3'>
                                        <div className={`w-[1.2rem] h-[1.2rem] -mt-[2px] flex justify-center items-center border-2 rounded-[.2rem] group-hover:border-primary ${filters.categories?.includes(item.id) ? 'bg-primary border-primary' : 'border-gray-500'}`}>
                                            <span className='material-symbols-outlined !text-[1.1rem] text-white'>check</span>
                                        </div>
                                        <span className={`text-[.95rem] font-semibold group-hover:text-primary ${filters.categories?.includes(item.id) ? 'text-gray-900' : 'text-gray-700'}`}>
                                            {item.name}
                                        </span>
                                    </div>

                                    <span className='w-[1.5rem] h-[1.5rem] -mt-[1px] bg-primary/20 text-gray-950 text-[.75rem] rounded-sm tracking-wide flex justify-center items-center'>
                                        {item.total}
                                    </span>

                                </li>
                            )
                        }
                    </ul>

                </div>

                <div className='space-y-5'>

                    <h1 className='flex justify-start items-center gap-2 p-3 rounded-md text-[.95rem] select-none font-semibold text-black tracking-wide bg-primary-light'>
                        <span className='material-symbols-outlined text-[1.2rem] mt-[1px]'>reviews</span>
                        <span>Rating</span>
                    </h1>

                    <ul className='space-y-3'>
                        {
                            items.stars?.map((item, index) => 
                                <li key={index} onClick={() => setFilters({...filters, rate: item})} className='w-full flex justify-start items-center text-gray-500 select-none cursor-pointer group gap-2.5'>
                                    {
                                        filters.rate === item ?
                                        <span className='material-symbols-outlined text-[1.3rem] scale-[1.1] text-primary'>radio_button_checked</span> :
                                        <span className='material-symbols-outlined text-[1.3rem] group-hover:text-primary'>radio_button_unchecked</span>
                                    }
                                    <Stars count={item}/>
                                </li>
                            )
                        }
                    </ul>

                </div>

                <div className='space-y-5'>

                    <h1 className='flex justify-start items-center gap-2 p-3 rounded-md text-[.95rem] select-none font-semibold text-black tracking-wide bg-primary-light'>
                        <span className='material-symbols-outlined text-[1.2rem]'>settings</span>
                        <span>Specials</span>
                    </h1>

                    <ul className='space-y-3'>
                        {
                            items.specials?.map((item, index) => 
                                <li key={index} onClick={() => setFilters({...filters, specials: filters.specials?.includes(item.id) ? filters.specials?.filter(_ => _ !== item.id) : [...filters.specials || [], item.id]})} className='w-full group flex justify-between items-center select-none cursor-pointer gap-4'>
                                    
                                    <div className='flex justify-start items-center gap-3'>
                                        <div className={`w-[1.2rem] h-[1.2rem] -mt-[1px] flex justify-center items-center border-2 rounded-[.2rem] group-hover:border-primary ${filters.specials?.includes(item.id) ? 'bg-primary border-primary' : 'border-gray-500'}`}>
                                            <span className='material-symbols-outlined !text-[1.1rem] text-white'>check</span>
                                        </div>
                                        <span className={`text-[.9rem] font-semibold group-hover:text-primary ${filters.specials?.includes(item.id) ? 'text-gray-900' : 'text-gray-700'}`}>
                                            {item.name}
                                        </span>
                                    </div>

                                </li>
                            )
                        }
                    </ul>

                </div>

            </div>

        </div>
         
    )

}
