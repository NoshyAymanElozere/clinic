"use client";
import { print } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader';
import Info from "./info";
import Payment from "./payment";
import Side from "./side";

export default function Index () {

    const config = useSelector((state) => state.config);
    const router = useRouter();
    const [tab, setTab] = useState(2);
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(true);

    const _get_ = async() => {

        setLoader(true);
        let product_id = localStorage.getItem('checkout-id');
        if ( !product_id ) return router.replace('/');
        // const response = await api(`checkout/${product_id}`);

        const response = {
            status: true,
            product: {
                id: 1,
                name: 'Maintenance create a one product dropshipping',
                price: 60.99,
                adults: 2,
                rate: 4,
                reviews: 358,
                views: 1063,
                duration: '3 Days',
                pending_orders: 10,
                country: 'EG',
                city: 'Cairo',
                street: 'Talat Harb 20th eltareer',
                language: 'en',
                image: 'service/11.png',
                includes: [],
                phone: '9660523728',
                whatsapp: '9660523728',
                created_at: '2024-05-02 05:19:20',
                cancel_date: '2024-09-14',
                ordered_date: '2024-09-15',
                ordered_time: '10:00 AM',
                available: true,
                active: true,
                allow_cancellation: true,
                allow_orders: true,
            }
        }
        if ( response.product ) {
            setData({...data, id: product_id, product: response.product});
            setLoader(false);
        }
        else {
            localStorage.removeItem('checkout-id');
            router.replace('/');
        }

    }
    useEffect(() => {

        _get_();
        
    }, []);

    return (

        <div className="w-full relative my-8 min-h-[80vh]">
            {
                loader ? <Loader /> :
                <div className='w-full space-y-6'>

                    {/* <main className='flex justify-center items-center'>

                        <div className='panel !bg-none w-[60%] !p-9'>

                            <div className='w-full flex justify-between items-center h-[1px] bg-black/50'>

                                <div className='ltr:pr-5 rtl:pl-5 flex items-center gap-3 bg-white select-none -mt-1'>
                                    <div className={`w-[1.7rem] h-[1.7rem] border border-gray-950 text-gray-950 text-[.9rem] font-semibold flex justify-center items-center rounded-full ${tab > 0 && 'bg-primary text-white !border-primary'}`}>1</div>
                                    <div className={`text-[1.05rem] text-gray-950 font-semibold tracking-wide ${tab > 0 && '!font-bold !text-gray-950'}`}>Details</div>
                                </div>

                                <div className='px-5 flex items-center gap-3 bg-white select-none -mt-1'>
                                    <div className={`w-[1.7rem] h-[1.7rem] border border-gray-950 text-gray-950 text-[.9rem] font-semibold flex justify-center items-center rounded-full ${tab > 1 && 'bg-primary text-white !border-primary'}`}>2</div>
                                    <div className={`text-[1.05rem] text-gray-950 font-semibold tracking-wide ${tab > 1 && '!font-bold !text-gray-950'}`}>Service</div>
                                </div>

                                <div className='ltr:pl-5 rtl:pr-5 flex items-center gap-3 bg-white select-none -mt-1'>
                                    <div className={`w-[1.7rem] h-[1.7rem] border border-gray-950 text-gray-950 text-[.9rem] font-semibold flex justify-center items-center rounded-full ${tab > 2 && 'bg-primary text-white !border-primary'}`}>3</div>
                                    <div className={`text-[1.05rem] text-gray-950 font-semibold tracking-wide ${tab > 2 && '!font-bold !text-gray-950'}`}>Payment</div>
                                </div>

                            </div>

                        </div>

                    </main> */}

                    <main className="flex flex-wrap gap-4 lg:flex-nowrap lg:gap-6 cursor-default">

                        <div className="w-full lg:w-[35%]">

                            <Side data={data} setData={setData}/>

                        </div>

                        <div className="w-full lg:w-[65%] space-y-5">

                            <Info data={data} setData={setData}/>

                            <Payment data={data} setData={setData} setLoader={setLoader}/>

                        </div>

                    </main>

                </div>
            }
        </div>
         
    )

}
