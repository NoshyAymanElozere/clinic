"use client";
import { api, alert_msg, storage, fix_number, print } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Elements from "@/components/elements";
import Stars from '@/components/stars';
import Loader from '@/components/loader';

export default function Side ({ data, setData }) {

    const config = useSelector((state) => state.config);
    const [service, setService] = useState({});
    const [loader, setLoader] = useState(false);

    const check_coupon = async() => {

        setLoader(true);
        const response1 = await api(`checkout/${data.id}/coupon`, {coupon: data.coupon});
        const response = { status: true, price: 49.99, discount: 20, }
        setLoader(false);

        if ( !response.price ) return setData({...data, coupon_error: true});
        setData({...data, coupon_success: true, product: {...data.product, price: response.price}});
        alert_msg(`Awesome, Discount ${response.discount}% added successfuly .`);

    }
    useEffect(() => {

        setService(data.product || {});

    }, [data]);

    return (

        <div className="w-full space-y-5">

            <div className="panel p-0 overflow-hidden">

                <div className="head py-4 px-6">
                    <p>Service</p>
                </div>

                <ul className="w-full p-6 space-y-5">

                    <li className="w-full flex justify-start items-start">
                       
                        <div className='w-[5rem] h-[4rem] rounded-sm layer overflow-hidden'>
                            <img src={`${storage}/${service.image}`} className='w-full h-full rounded-sm object-cover'/>
                        </div>

                        <div className="w-[90%] flex flex-1 justify-start items-center flex-col gap-2.5 px-5 -mt-[2px]">

                            <div className='w-full text-[1.1rem] font-bold tracking-wide flex'>
                                {service.name}
                            </div>

                            <div className='w-full flex gap-2'>
                                <Stars count={service.rate} className='text-[1rem]'/>
                                <span className='text-[.85rem] -mt-[1px] font-semibold'>( {service.reviews} )</span>
                            </div>

                        </div>

                    </li>

                    <li className='w-full space-y-3.5 pb-3'>

                        <div className='w-full flex items-center gap-3 text-[.95rem] text-gray-700 font-semibold tracking-wide'>
                            <span className='material-symbols-outlined text-primary -mt-[1px] text-[1.4rem]'>group</span>
                            <span>{service.adults} Adults</span>
                        </div>

                        <div className='w-full flex items-center gap-3 text-[.95rem] text-gray-700 font-semibold tracking-wide'>
                            <span className='material-symbols-outlined text-primary -mt-[2px] text-[1.4rem]'>calendar_month</span>
                            <span>{service.ordered_date} • {service.ordered_time}</span>
                        </div>

                        {
                            service.allow_cancellation &&
                            <div className='w-full flex items-center gap-3 text-[.95rem] text-gray-700 font-semibold tracking-wide'>
                                <span className='material-symbols-outlined text-primary -mt-[1px] text-[1.4rem]'>check_circle</span>
                                <span className='flex gap-2'>
                                    <span className='underline text-gray-950'>Free Cancellation</span>
                                    <span>before {service.cancel_date}</span>
                                </span>
                            </div>
                        }

                    </li>

                    <div className='w-full flex justify-between items-center border-t border-gray-300 pt-5 text-[1.1rem]'>

                        <div className="w-1/2 flex justify-start items-center tracking-wide font-semibold">
                            <span>Total Price</span>
                        </div>

                        <div className="w-1/2 flex justify-end items-center font-bold text-[1.3rem]">
                            <span>{fix_number(service.price, true)} $</span>
                        </div>

                    </div>

                </ul>

            </div>

            {
                !data.coupon_success &&
                <div className="panel p-0 overflow-hidden">

                    <div className="head py-4 px-6">
                        <p>Coupon</p>
                    </div>
                    
                    <div className='p-8 relative'>

                        { loader && <Loader className='bg medium'/> }
                    
                        <form onSubmit={(e) => { e.preventDefault(); check_coupon(); }} className="w-full flex justify-between items-end gap-4">

                            <div className='w-full flex-1'>
                                <Elements element='input' icon='currency_exchange' className={`space-y-5 ${data.coupon_error && 'has-error'}`} name='Coupon Code' value={data.coupon} onChange={(e) => setData({...data, coupon: e})} required/>
                            </div>
        
                            <button type='submit' className='btn btn-primary shadow-none hover:opacity-[.8] text-[1.05rem] py-2.5 px-7'>
                                Check
                            </button>

                        </form>
                        
                        {
                            data.coupon_error &&
                            <div className='w-full flex gap-2 text-danger font-semibold text-[.95rem] pt-5'>
                                <span className='material-symbols-outlined scale-[.9] -mt-[2.5px]'>error</span>
                                <span>
                                    Sorry, this promo code is expired or invalid. Please enter a different code or proceed to checkout
                                </span>
                            </div>
                        }

                    </div>

                </div>
            }

        </div>
        
    )

}
