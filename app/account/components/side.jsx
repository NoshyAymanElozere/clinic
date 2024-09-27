"use client";
import { api, fix_number, print } from '@/public/script/main';
import { actions } from '@/public/script/store';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Elements from "@/components/elements";

export default function Side ({ data, setData, tab, setTab, setLoader }) {

    const config = useSelector((state) => state.config);
    const dispatch = useDispatch();
    const router = useRouter();

    const logout = async() => {

        setLoader(true);
        dispatch(actions.toggle_user(null));
        router.replace('/auth/login');
        const response = await api('auth/logout');

    }
    return (

        <div className="w-full flex flex-col gap-4">

            <div className="panel p-0 overflow-hidden">

                <div className='head'>
                    <div className='material-symbols-outlined text-[1.4rem]'>linked_camera</div>
                    <p>Image</p>
                </div>
                
                <div className='p-4'>

                    <Elements element='image_edit' value={data.image} onChange={(e) => setData({...data, image_file: e.file})}/>

                    <div className='w-full flex justify-center items-center py-4'>
                        <span className='text-[1.2rem] tracking-wide font-semibold'>{data.name}</span>
                    </div>

                </div>
                                
            </div>

            <div className="panel p-0 overflow-hidden">

                <div className='head'>
                    <div className='material-symbols-outlined text-[1.4rem] -mt-[1px]'>account_balance_wallet</div>
                    <p>Wallet</p>
                </div>

                <div className='w-full flex flex-col gap-5 p-6'>

                    <div className='w-full flex justify-center items-center gap-8'>

                        <div className='flex justify-start items-center gap-3 tracking-wider text-[1.05rem] text-gray-950 font-semibold'>
                            <span>Total Balance</span>
                        </div>

                        <div className='w-full flex flex-1 justify-center items-center gap-3 p-3 rounded-md border border-primary/25 bg-primary-light/50 font-bold tracking-wider text-[1.1rem] text-primary'>
                            <span className='material-symbols-outlined'>payments</span>
                            <span>{fix_number(data.balance, true)} $</span>
                        </div>

                    </div>

                    <div className='w-full flex justify-start items-center gap-3'>
                        <button className='w-full btn btn-danger shadow-md hover:opacity-[.8] tracking-wide py-2.5 text-[1rem]'>Withdraw</button>
                        <button className='w-full btn btn-primary shadow-md hover:opacity-[.8] tracking-wide py-2.5 text-[1rem]'>Deposit</button>
                    </div>
                    
                </div>
                
            </div>

            <div className="panel p-0 overflow-hidden">
       
                <div className='head'>
                    <div className='material-symbols-outlined text-[1.3rem]'>share</div>
                    <p>Links</p>
                </div>

                <ul className='w-full justify-center items-center flex-col select-none p-4'>

                    <li onClick={() => setTab('info')} className={`w-full flex justify-start items-center gap-3 cursor-pointer p-4 hover:bg-primary-light border-b border-gray-300 ${tab === 'info' ? 'text-primary bg-primary-light': 'text-gray-700'}`}>
                        <span className='material-symbols-outlined text-[1.4rem]'>account_circle</span>
                        <span className='font-semibold tracking-wide'>Information</span>
                    </li>
                    <li onClick={() => setTab('wallet')} className={`w-full flex justify-start items-center gap-3 cursor-pointer p-4 hover:bg-primary-light border-b border-gray-300 ${tab === 'wallet' ? 'text-primary bg-primary-light': 'text-gray-700'}`}>
                        <span className='material-symbols-outlined text-[1.4rem]'>paid</span>
                        <span className='font-semibold tracking-wide'>Balance</span>
                    </li>
                    <li onClick={() => setTab('password')} className={`w-full flex justify-start items-center gap-3 cursor-pointer p-4 hover:bg-primary-light border-b border-gray-300 ${tab === 'password' ? 'text-primary bg-primary-light': 'text-gray-700'}`}>
                        <span className='material-symbols-outlined text-[1.4rem]'>lock_reset</span>
                        <span className='font-semibold tracking-wide'>Passwords</span>
                    </li>
                    <li onClick={() => setTab('order')} className={`w-full flex justify-start items-center gap-3 cursor-pointer p-4 hover:bg-primary-light border-b border-gray-300 ${tab === 'order' ? 'text-primary bg-primary-light': 'text-gray-700'}`}>
                        <span className='material-symbols-outlined text-[1.4rem]'>shopping_cart</span>
                        <span className='font-semibold tracking-wide'>Bookings</span>
                    </li>
                    <li onClick={() => setTab('setting')} className={`w-full flex justify-start items-center gap-3 cursor-pointer p-4 hover:bg-primary-light border-b border-gray-300 ${tab === 'setting' ? 'text-primary bg-primary-light': 'text-gray-700'}`}>
                        <span className='material-symbols-outlined text-[1.4rem]'>settings</span>
                        <span className='font-semibold tracking-wide'>Settings</span>
                    </li>
                    <li onClick={logout} className={`w-full flex justify-start items-center gap-3 cursor-pointer p-4 hover:bg-primary-light border-gray-300 ${tab === 'logout' ? 'text-primary': 'text-gray-700'}`}>
                        <span className='material-symbols-outlined text-[1.4rem]'>logout</span>
                        <span className='font-semibold tracking-wide'>Logout</span>
                    </li>

                </ul>

            </div>

        </div>
         
    )

}
