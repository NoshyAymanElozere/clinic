"use client";
import { api, alert_msg, print } from "@/public/script/main";
import { useState } from "react";
import { useSelector } from 'react-redux';
import Elements from "@/components/elements";
import Loader from '@/components/loader';

export default function Password () {

    const config = useSelector((state) => state.config);
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);

    const _save_ = async() => {

        if ( data.password !== data.password_confirmation ) return alert_msg(config.text.password_not_match, 'error');

        setLoader(true);
        const response = await api('account/password', data);
        setLoader(false);

        if ( response.status ) alert_msg(config.text.password_successfully);
        else if ( response.errors?.password ) alert_msg(config.text.error_password_old, 'error');
        else alert_msg(config.text.alert_error, 'error');

    }
    return (

        <div className="panel p-0 overflow-hidden">
            
            <div className='head'>
                <p>Change Password</p>
            </div>

            <div className="relative space-y-5 pt-8 pb-5 px-7">

                { loader && <Loader className="bg"/> }

                <div className="w-full">
                    
                    <div className="w-full lg:w-[70%] text-gray-700 flex gap-3">

                        <span className="material-symbols-outlined">emoji_objects</span>

                        <p className="font-semibold tracking-wide leading-7">
                            Here change your password .
                        </p>

                    </div>

                </div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 pt-4'>
                    <Elements element='password' icon='lock_reset' name='Old Password' value={data.old_password} onChange={(e) => setData({...data, old_password: e})}/>
                </div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 pb-[4rem]'>
                    <Elements element='password' icon='lock_open' name='New Password' value={data.password} onChange={(e) => setData({...data, password: e})}/>
                    <Elements element='password' icon='lock_open' name='Confirm Password' value={data.password_confirmation} onChange={(e) => setData({...data, password_confirmation: e})}/>
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
