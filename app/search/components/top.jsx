"use client";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Form from '@/components/form';

export default function Top ({ data, filters, setFilters }) {

    const config = useSelector((state) => state.config);

    return (

        <main className='space-y-6'>

            <Form filters={filters} setFilters={setFilters} className='!w-full'/>

            <div className='w-full flex justify-start items-center gap-4 cursor-default'>
                
                <span className='material-symbols-outlined'>pin_drop</span>

                <div className='flex justify-start items-center gap-3 font-semibold tracking-wide text-gray-950'>

                    <span className='text-[1.45rem]'>{ filters.query?.replace(/%..?/g, ' ') || '' }</span>

                    {
                        filters.date &&
                        <span className='flex gap-3'>
                            <span>—</span>
                            <span className='text-[1.1rem]'>{filters.date}</span>
                        </span>
                    }

                </div>

            </div>

        </main>

    )

}
