"use client";
import { fix_number, print } from '@/public/script/main';
import { useSelector } from 'react-redux';

export default function Wallet ({ data, setData }) {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full space-y-4'>

            <div className="panel p-0 space-y-6">

                <div className='head justify-between'>

                    <p>Account Balance</p>

                    <div className='flex justify-end items-center gap-2'>

                        <button className='p-2.5 w-[9rem] rounded-md bg-primary text-white duration-300 text-[.95rem] tracking-wide hover:opacity-[.8] cursor-pointer'>
                            Deposit
                        </button>

                        <button className='p-2.5 w-[9rem] rounded-md bg-danger text-white duration-300 text-[.95rem] tracking-wide hover:opacity-[.8] cursor-pointer'>
                            Withdraw
                        </button>

                    </div>

                </div>

                <div className="w-full px-6 pt-4">
                    
                    <div className="w-full lg:w-[70%] text-gray-700 flex items-center gap-3">

                        <span className="material-symbols-outlined -mt-[3px]">emoji_objects</span>

                        <p className="font-semibold tracking-wide">
                            The balance for your account .
                        </p>

                    </div>

                </div>

                <div className='w-full grid grid-cols-4 px-6 pt-2'>

                    <div className='border-r border-gray-200 p-4 space-y-3'>

                        <h1 className='flex justify-center items-center gap-2 text-[1.1rem] text-gray-700 font-semibold tracking-wide'>
                            Withdrawal
                        </h1>

                        <p className='flex justify-center items-center gap-2 text-[1.4rem] text-primary font-bold tracking-wide'>
                            $ {fix_number(data.balance - data.pending_balance, true)}
                        </p>

                    </div>
                    <div className='border-r border-gray-200 p-4 space-y-3'>

                        <h1 className='flex justify-center items-center gap-2 text-[1.1rem] text-gray-700 font-semibold tracking-wide'>
                            Pending
                        </h1>

                        <p className='flex justify-center items-center gap-2 text-[1.4rem] text-primary font-bold tracking-wide'>
                            $ {fix_number(data.pending_balance, true)}
                        </p>

                    </div>
                    <div className='border-r border-gray-200 p-4 space-y-3'>

                        <h1 className='flex justify-center items-center gap-2 text-[1.1rem] text-gray-700 font-semibold tracking-wide'>
                            Available
                        </h1>

                        <p className='flex justify-center items-center gap-2 text-[1.4rem] text-primary font-bold tracking-wide'>
                            $ {fix_number(data.balance, true)}
                        </p>

                    </div>
                    <div className='p-4 space-y-3'>

                        <h1 className='flex justify-center items-center gap-2 text-[1.1rem] text-gray-700 font-semibold tracking-wide'>
                            Total
                        </h1>

                        <p className='flex justify-center items-center gap-2 text-[1.4rem] text-primary font-bold tracking-wide'>
                            $ {fix_number(data.balance, true)}
                        </p>

                    </div>

                </div>

                <div className='w-full pt-6 pb-[4rem] flex justify-center items-center flex-col space-y-7'>

                    <div className='flex justify-center items-center text-primary'>

                        <span className="material-symbols-outlined text-[5rem]">info</span>

                    </div>

                    <div className='w-[30rem] border border-gray-200 bg-primary-light rounded-md p-5 font-semibold text-[1rem] text-gray-950 flex gap-3'>
                        
                        <span className="material-symbols-outlined -mt-[1px]">emoji_objects</span>

                        <span className='leading-7'>
                            The balance page contains a summary of the balance in your account, whether you have charged it, 
                            initiated deals with it. The balance page contains a summary of the balance in your account . 
                        </span>
                        
                    </div>

                </div>
             
            </div>

        </div>
         
    )

}
