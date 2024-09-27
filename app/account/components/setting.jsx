"use client";
import { api, alert_msg, print } from '@/public/script/main';
import { useSelector } from 'react-redux';
import Elements from "@/components/elements";
import { useState } from 'react';
import Loader from '@/components/loader';

export default function Setting ({ data, setData }) {

    const config = useSelector((state) => state.config);
    const [loader, setLoader] = useState(false);

    const _save_ = async( _data_ ) => {

        setData(_data_);
        
        setLoader(true);
        const response = await api('account/setting/save', _data_);
        setLoader(false);

        if ( response.status ) alert_msg(config.text.account_successfully);
        else alert_msg(config.text.alert_error, 'error');

    }
    return (

        <div className='w-full space-y-4'>

            <div className="panel p-0 overflow-hidden">
                
                <div className='head !border-0'>
                    <p>Account Settings</p>
                </div>

                <div className="py-6 hidden px-8">

                    <div className="w-full lg:w-[70%] text-gray-700 flex gap-3">

                        <span className="material-symbols-outlined">emoji_objects</span>

                        <p className="font-semibold tracking-wide leading-7">
                            Here you can find you bookings .
                        </p>

                    </div>

                </div>

            </div>

            <div className='w-full relative min-h-[20rem]'>
                {
                    loader ? <Loader className='medium'/> :
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">

                        <Elements element='toggle_panel' name={'messages'} type={`options_messages`} value={data.allow_messages} onChange={(e) => _save_({...data, allow_messages: e})}/>
                        <Elements element='toggle_panel' name={'mails'} type={`options_mails`} value={data.allow_mails} onChange={(e) => _save_({...data, allow_mails: e})}/>
                        <Elements element='toggle_panel' name={'notifications'} type={`options_notifications`} value={data.allow_notifications} onChange={(e) => _save_({...data, allow_notifications: e})}/>
                        <Elements element='toggle_panel' name={'products'} type={`options_products`} value={data.allow_products} onChange={(e) => _save_({...data, allow_products: e})}/>
                        <Elements element='toggle_panel' name={'orders'} type={`options_orders`} value={data.allow_orders} onChange={(e) => _save_({...data, allow_orders: e})}/>

                    </div>
                }
            </div>

        </div>
         
    )

}
