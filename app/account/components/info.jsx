"use client";
import { api, alert_msg, date, fix_date, print } from '@/public/script/main';
import { actions } from '@/public/script/store';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Elements from "@/components/elements";
import Loader from '@/components/loader';

export default function Info ({ data, setData }) {

    const config = useSelector((state) => state.config);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const _save_ = async() => {

        setLoader(true);
        const response = await api('account/save', data);
        setLoader(false);

        if ( response.status ) {

            alert_msg(config.text.account_successfully);
            dispatch(actions.toggle_user({...response.user, logged: true, update: date()}));

        }
        else if ( response.errors ) {

            if ( response.erros.email ) alert_msg(config.text.email_exists, 'error');

        }
        else {

            alert_msg(config.text.alert_error, 'error');

        }

    }
    return (

        <div className="panel p-0 overflow-hidden">
            
            <div className='head'>
                <p>Information</p>
            </div>

            <div className="relative space-y-6 sm:space-y-7 pt-6 pb-5 px-7">

                { loader && <Loader className='bg'/> }

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                    <Elements element='input' icon='' name='Full Name' value={data.name} onChange={(e) => setData({...data, name: e})}/>
                    <Elements element='input' icon='' name='Email' value={data.email} onChange={(e) => setData({...data, email: e})}/>
                </div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                    <Elements element='input' icon='' name='Location' value={data.location} onChange={(e) => setData({...data, location: e})}/>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <Elements element='input' icon='' name='Postal' value={data.postal} onChange={(e) => setData({...data, postal: e})}/>
                        <Elements element='input' icon='' name='Last Login' value={fix_date(data.login_at)} readOnly/>
                    </div>
                </div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <Elements element='select' children='phone' icon='' name='Key Code' value={data.phone_code} onChange={(e) => setData({...data, phone_code: e})}/>
                        <Elements element='input' icon='' name='Phone' value={data.phone} onChange={(e) => setData({...data, phone: e})}/>
                    </div>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <Elements element='select' children='country' icon='' name='Country' value={data.country} onChange={(e) => setData({...data, country: e})}/>
                        <Elements element='input' icon='' name='City' value={data.city} onChange={(e) => setData({...data, city: e})}/>
                    </div>

                </div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pb-4'>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <Elements element='input' icon='' name='IP' value={data.ip} readOnly/>
                        <Elements element='input' icon='' name='Device' value={data.agent} readOnly/>
                    </div>

                </div>

                <div className="w-full pt-5 grid grid-cols-2 justify-end items-center gap-3 border-t sm:flex">
                    <button onClick={_save_} className='p-2.5 w-[10rem] rounded-md bg-primary text-white duration-300 text-[1rem] tracking-wide hover:opacity-[.8] cursor-pointer'>
                        Save
                    </button>
                </div>

            </div>

        </div>

    )

}
