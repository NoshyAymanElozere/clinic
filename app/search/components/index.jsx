"use client";
import { api, print } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Loader from '@/components/loader';
import Top from './top';
import Side from './side';
import Result from './result';

export default function Index () {

    const config = useSelector((state) => state.config);
    const searchParams = useSearchParams();
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});
    const [limit, setLimit] = useState(12);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(false);

    const _get_ = async() => {

        setData([]);
        const response1 = await api('search', {filters: JSON.stringify(filters), page: page, limit: limit});
        const response = {
            status: true,
            total: 12,
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
            ],
        }

        setData([...response.items, ...response.items] || []);
        setTotal(response.total || 0);
        window.scrollTo(0, 0);

    }
    useEffect(() => {

        if ( page === 1 ) _get_();
        else setPage(1);

    }, [limit]);
    useEffect(() => {

        _get_();

    }, [page, filters]);
    useEffect(() => {

        const params_data = {};
        for (const [key, value] of searchParams.entries()) params_data[key] = value;
        setFilters({...filters, ...params_data, type: 'Every'});

    }, []);

    return (

        <div className="w-full my-8 space-y-6">

            <Top data={data} filters={filters} setFilters={setFilters}/>

            <main className='flex flex-wrap gap-4 lg:flex-nowrap lg:gap-8 cursor-default'>

                <div className="w-full lg:w-[22rem]">

                    <Side data={data} filters={filters} setFilters={setFilters}/>

                </div>

                <div className="w-full lg:w-[calc(100%_-_22rem)]">
                    {
                        loader ?
                        <div className='w-full h-[30rem] relative'><Loader /></div>:
                        <Result data={data} filters={filters} setFilters={setFilters} total={total} page={page} setPage={setPage} limit={limit} setLimit={setLimit}/>
                    }
                </div>

            </main>

        </div>
         
    )

}
