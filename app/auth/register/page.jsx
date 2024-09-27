"use client";
import { api, alert_msg, print } from '@/public/script/main';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Elements from "@/components/elements";
import Loader from "@/components/loader";
import Link from 'next/link';

export default function Register () {

    const config = useSelector((state) => state.config);
    const dispatch = useDispatch();
    const router = useRouter();
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);

    const submit = async() => {

        setLoader(true);
        const response = await api("auht/register", data);
        setLoader(false);

        alert_msg('Account created successfully .');
        // dispatch(toggle_user({...response.user, update: date()}));
        // router.replace('/');

    }
    return (

        <div className='w-full my-10'>

            <main className='flex justify-center items-center cursor-default'>
                {
                    loader ? <Loader /> :
                    <div className="log-form panel p-6 w-full sm:w-[30rem]">

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

                            <div className='text-[1.4rem] font-bold text-primary tracking-wide'>
                                Register
                            </div>

                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="w-full space-y-4 my-5">

                            <div className='w-full grid grid-cols-2 gap-3'>

                                <Elements element='input' icon='' name='Name' value={data.name} onChange={(e) => setData({...data, name: e, error_name: false})} required className={`${data.error_name && 'error'}`}/>
                                
                                <Elements element='input' icon='' name='Phone' value={data.phone} onChange={(e) => setData({...data, phone: e, error_phone: false})} required className={`${data.error_phone && 'error'}`}/>

                            </div>

                            <Elements element='input' icon='' name='E-mail' value={data.email} onChange={(e) => setData({...data, email: e, error_email: false})} required className={`${data.error_email && 'error'}`}/>
                            
                            <Elements element='password' icon='' name='Password' value={data.password} onChange={(e) => setData({...data, password: e, error_password: false})} required className={`${data.error_password && 'error'}`}/>

                            <div className="w-full flex justify-start items-center py-2 select-none">

                                <label className="flex items-center cursor-pointer gap-2 tracking-wide select-none">
                                    <input type="checkbox" className="form-checkbox" required checked={data.agree || false} onChange={(e) => setData({...data, agree: !data.agree})}/>
                                    <p className="text-[.9rem]">
                                        I agree with all
                                        <Link href='/policy' className='text-primary hover:underline px-1'>Terms & Conditions</Link>
                                    </p>
                                </label>

                            </div>

                            <button type="submit" className='w-full bg-primary text-white py-2.5 rounded-md font-semibold tracking-wide text-[1rem] hover:opacity-[.8] duration-300 cursor-pointer'>
                                Register
                            </button>

                        </form>

                        <div className="w-full space-y-7 py-3">

                            <p className="w-full h-[1px] flex justify-center items-center bg-gray-300 select-none">
                                <span className='bg-white px-3 text-[.85rem] text-gray-500 font-semibold tracking-wide -mt-[1px]'>OR</span>
                            </p>

                            <div className="w-full grid grid-cols-2 gap-3">

                                <Link href="/auth/login" className="w-full py-2.5 border border-gray-300 rounded-md flex justify-center items-center hover:bg-primary-light duration-300">
                                    <img src="/media/layout/google.png" className='w-[1.7rem] h-[1.7rem]'/>
                                </Link>

                                <Link href="/auth/login" className="w-full py-2.5 bg-[#3a559c] border border-gray-300 rounded-md flex justify-center items-center hover:opacity-[.8] duration-300">
                                    <img src="/media/layout/facebook.png" className='w-[1.7rem] h-[1.7rem]'/>
                                </Link>

                            </div>

                        </div>

                        <div className="space-y-3 pt-3 pb-2 select-none">

                            <p className="w-full flex justify-center items-center gap-2 text-[.9rem] text-gray-600 tracking-wide font-semibold">

                                <span>Already have an account ?</span>

                                <Link href="/auth/login" className='text-primary hover:opacity-[.8] hover:underline duration-300'>
                                    Login Here
                                </Link>

                            </p>

                        </div>

                    </div>
                }
            </main>

        </div>
         
    )

}
