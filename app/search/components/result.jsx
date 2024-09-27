"use client";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cards from '@/components/cards/services';
import Link from 'next/link';

export default function Info ({ data, filters, setFilters, setLimit, setPage }) {

    const config = useSelector((state) => state.config);
    const [options, setOptions] = useState({});

    useEffect(() => {

        setOptions({
            sorted: [
                {id: 1, name: 'Recently Added'},
                {id: 2, name: 'Highest Rated'},
                {id: 3, name: 'Most Booked'},
                {id: 4, name: 'Highest Price'},
                {id: 5, name: 'Lowest Price'},
            ],
        });

    }, []);

    return (

        <div className="w-full flex flex-col gap-4">

            <div className='w-full flex justify-between items-center cursor-default'>
                
                <div className='flex justify-start items-center text-[1rem] text-gray-950 gap-2.5 font-semibold tracking-wide'>
                    <span className=''>( {data.length} )</span>
                    <span>•</span>
                    <span className='underline'>Results Founded</span>
                </div>

                <select className='w-[15rem] !py-3 !px-5 form-select cursor-pointer' value={filters.sorted} onChange={(e) => setFilters({...filters, sorted: e.target.value})}>
                    { options.sorted?.map((item, index) => <option key={index} value={item.id}>{item.name}</option>) }
                </select>

            </div>

            <div className='w-full flex justify-start items-center gap-3 py-4 px-6 border border-gray-300 bg-primary-light rounded-md select-none text-[1rem] font-semibold tracking-wide'>
                <span className='material-symbols-outlined text-[1.3rem]'>currency_exchange</span>
                <span className='font-bold'>Did you know ?</span>
                <span>You can reserve your spot today and pay when you're ready.</span>
                <Link href='/policy' className='hover:text-primary font-bold underline'>See Details</Link>
            </div>

            <Cards data={data} pagination cols={3} read={(page, limit) => { setPage(page); setLimit(limit); }}/>

        </div>

    )

}
