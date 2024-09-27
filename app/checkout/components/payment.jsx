"use client";
import { alert_msg, api, print } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Payment ({ data, setData, setLoader }) {

    const config = useSelector((state) => state.config);
    const router = useRouter();
    const [paynow, setPaynow] = useState(true);

    const book = async( pay_now ) => {

        setLoader(true);
        const response = await api(`checkout/${data.id}/order`, {...data, pay_now: pay_now || false});
        
        if ( response.status ) {
            
            localStorage.removeItem('checkout-id');
            alert_msg('Service Booked Successfully .');
            router.replace('/account?order');

        }
        else if ( response.errors ) {

            if ( response.errors.balance ) alert_msg('No Enouph Money in your wallet !', 'error');
            setLoader(false);
            setTimeout(() => router.push('/account?wallet'), 3000);

        }
        else {
            
            alert_msg(config.text.alert_error, 'error');
            setLoader(false);

        }

    }
    return (

        <div className="panel p-0 overflow-hidden">

            <div className="head py-4 px-6 flex justify-between items-center gap-2 border-b">

                <p>Payment</p>

                <div className='hidden justify-end items-center gap-3 lg:flex'>

                    <div onClick={(e) => setPaynow(true)} className={`flex justify-start items-center cursor-pointer ${paynow ? 'text-primary' : 'text-[#666] hover:text-[#000]'}`}>
                        {
                            paynow ?
                            <span className='material-symbols-outlined text-[1.2rem]'>radio_button_checked</span> :
                            <span className='material-symbols-outlined text-[1.2rem]'>radio_button_unchecked</span>
                        }
                        <span className='px-2 tracking-wide font-semibold text-[1rem]'>Pay now</span>
                    </div>

                    <div onClick={(e) => setPaynow(false)} className={`flex justify-start items-center cursor-pointer ${!paynow ? 'text-primary' : 'text-[#666] hover:text-[#000]'}`}>
                        {
                            !paynow ?
                            <span className='material-symbols-outlined text-[1.2rem]'>radio_button_checked</span> :
                            <span className='material-symbols-outlined text-[1.2rem]'>radio_button_unchecked</span>
                        }
                        <span className='px-2 tracking-wide font-semibold text-[1rem]'>Pay Later</span>
                    </div>

                </div>

            </div>

            <div className="w-full lg:w-[70%] text-gray-700 flex gap-3 pt-8 pb-12 px-6">

                <span className="material-symbols-outlined">emoji_objects</span>

                <p className="font-semibold tracking-wide leading-7">
                    The balance page contains a summary of the balance in your account, whether you have charged it, 
                    initiated deals with it.
                </p>

            </div>

            <div className='w-full px-6 py-5 flex justify-start items-center border-t border-gray-300'>

                <div className='w-full lg:w-[100%] grid grid-cols-2 gap-4'>

                    <button onClick={() => book()} className='btn btn-danger shadow-none w-full tracking-wide rounded-md p-3 hover:opacity-[.8] text-white gap-3 flex justify-center items-center text-[1rem] font-semibold'>
                        <span className='material-symbols-outlined text-[1.3rem]'>alarm</span>
                        <span>Pay Later</span>
                    </button>

                    <button onClick={() => book(true)} className='btn btn-primary shadow-none w-full tracking-wide rounded-md p-3 hover:opacity-[.8] text-white gap-3 flex justify-center items-center text-[1rem] font-semibold'>
                        <span className='material-symbols-outlined text-[1.2rem]'>shopping_cart</span>
                        <span>Pay Now</span>
                    </button>

                </div>

            </div>

        </div>
         
    )

}
