"use client";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Info from './info';
import Recommended from "./recommended";
import Top from './top';

export default function Index ({ data }) {

    const config = useSelector((state) => state.config);
    const router = useRouter();

    const buy = () => {

        localStorage.setItem('checkout-id', data.id);
        router.push('/checkout');

    }
    return (

        <div className="w-full my-6">

            <main className='space-y-4'>
                   
                <Top data={data} buy={buy}/>

                <Info data={data} buy={buy}/>

                <Recommended id={data.id}/>

            </main>

        </div>

    )

}
