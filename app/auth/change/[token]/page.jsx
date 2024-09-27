"use client";
import { api, alert_msg, print } from '@/public/script/main';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Elements from "@/components/elements";
import Loader from "@/components/loader";
import Link from 'next/link';

export default function Change ({ token }) {

    const config = useSelector((state) => state.config);
    const dispatch = useDispatch();
    const router = useRouter();
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);

    const submit = async() => {

        setLoader(true);
        const response = await api("auht/change", {...data, token: token});
        setLoader(false);

        alert_msg('Password changed successfully .');
        // dispatch(toggle_user({...response.user, update: date()}));
        // router.replace('/');

    }
    return (

        <div className='w-full my-10'>

            <main className='flex justify-center items-center cursor-default'>
                {
                    loader ? <Loader /> :
                    <div className="log-form panel p-6 w-full sm:w-[27rem]">

                        <div className="flex justify-center items-center flex-col gap-2">

                            <svg className='fill-primary w-[55px]' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                                <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
                                    c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"/>
                                <path d="M296,240h-8.5c0.312-2.516,0.5-5.188,0.5-8c0-13.203-14.406-24-32-24s-32,10.797-32,24c0,2.812,0.188,5.484,0.5,8H216
                                    c-4.422,0-8,3.578-8,8v48c0,4.422,3.578,8,8,8h80c4.422,0,8-3.578,8-8v-48C304,243.578,300.422,240,296,240z M240,240
                                    c-4.797-9.594,7.203-19.203,16-19.203s20.797,9.609,16,19.203H240z"/>
                                <path d="M370.906,311.188L401.594,256h-19.188c-0.797-72.344-56.625-127.516-126.781-127.609
                                    c-70.609-0.078-127.766,57.078-127.672,127.688c0.078,70.625,57.359,127.906,127.969,127.969
                                    c39.875,0.094,75.406-18.125,98.797-46.625l-15.281-25.484c-17.938,27.016-48.641,44.75-83.562,44.703
                                    c-55.469-0.031-100.484-45.047-100.531-100.531c-0.062-55.484,44.844-100.375,100.312-100.312
                                    c55.219,0.094,99.078,45.781,99.547,100.203l-19.047-0.031L370.906,311.188z"/>
                            </svg>

                            <div className='text-[1.2rem] font-bold text-primary tracking-wide'>
                                Change Password
                            </div>

                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="w-full space-y-7 mt-8 mb-4">

                            <div className="w-full space-y-5">

                                <Elements element='input' icon='' name='Password' value={data.password} onChange={(e) => setData({...data, password: e, error_password: false})} required className={`${data.error_password && 'error'}`}/>
                        
                                <Elements element='input' icon='' name='Confirm Password' value={data.password_confirmation} onChange={(e) => setData({...data, password_confirmation: e, error_password_confirmation: false})} required className={`${data.error_password_confirmation && 'error'}`}/>

                            </div>

                            <button type="submit" className='w-full bg-primary text-white py-2.5 rounded-md font-semibold tracking-wide text-[1rem] hover:opacity-[.8] duration-300 cursor-pointer'>
                                Submit
                            </button>

                        </form>

                        <div className="space-y-3 py-3 select-none">

                            <p className="w-full flex justify-center items-center gap-2 text-[.9rem] text-gray-600 tracking-wide font-semibold">

                                <Link href="/auth/login" className='text-primary hover:opacity-[.8] hover:underline duration-300'>
                                    Back to Log In
                                </Link>

                            </p>

                            <p className="w-full flex justify-center items-center gap-2 text-[.9rem] text-gray-600 tracking-wide font-semibold">

                                <span>Don't have any account yet ?</span>

                                <Link href="/auth/register" className='text-primary hover:opacity-[.8] hover:underline duration-300'>
                                    Register
                                </Link>

                            </p>

                        </div>

                    </div>
                }
            </main>

        </div>
         
    )

}
