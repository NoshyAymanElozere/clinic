"use client";
import { api, date, print } from '@/public/script/main';
import { actions } from '@/public/script/store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Side from './side';
import Info from './info';
import Setting from './setting';
import Order from './order';
import Password from './password';
import Wallet from './wallet';
import Loader from '@/components/loader';

export default function Index () {

    const config = useSelector((state) => state.config);
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const [data, setData] = useState({});
    const [tab, setTab] = useState('info');
    const [loader, setLoader] = useState(true);

    const params = () => {

        const params_data = {};
        for (const [key, value] of searchParams.entries()) params_data[key] = value;

        if ( params_data.setting !== undefined ) setTab('setting');
        if ( params_data.order !== undefined ) setTab('order');
        if ( params_data.password !== undefined ) setTab('password');
        if ( params_data.wallet !== undefined ) setTab('wallet');

    }
    const _get_ = async() => {

        setLoader(true);

        // const response = await api('account');
        const response = {
            status: true,
            user: {
                id: 1,
                name: 'Coding Master',
                email: 'codingmaster@gmail.com',
                image: 'user/1.png',
                key: '+20',
                phone: '01099188572',
                country: 'eg',
                city: 'Cairo',
                street: 'Talat Harb',
                location: 'Cairo, Talat Harb',
                postal: '13713',
                created_at: '2024-08-10',
                login_at: '2024-09-10',
                ip: '192.86.1.11',
                agent: 'Browser - Google Chrome v20.1.3',
                balance: 86.5,
                pending_balance: 16.5,
                active: true,
                allow_login: true,
                allow_notifications: true,
                allow_messages: true,
                allow_orders: true,
                allow_products: true,
                allow_mails: true,
            }
        };
        if ( !response.user ) return;

        let _user_ = {...response.user, logged: true, update: date()};
        setData(_user_);
        dispatch(actions.toggle_user(_user_));
        setLoader(false);

    }
    useEffect(() => {

        _get_();
        params();

    }, []);

    return (

        <div className="w-full relative my-8 min-h-[80vh]">
            {
                loader ? <Loader /> :
                <main className='flex flex-wrap gap-4 lg:flex-nowrap lg:gap-8 cursor-default'>

                    <div className="w-full lg:w-[30%] flex flex-col gap-4">

                        <Side data={data} setData={setData} tab={tab} setTab={setTab} setLoader={setLoader}/>

                    </div>

                    <div className="w-full lg:w-[70%] flex flex-col gap-4">

                        <div className='panel p-0 w-full flex justify-start items-center gap-0 select-none flex-wrap overflow-hidden'>

                            <div onClick={() => setTab('info')} className={`py-4.5 px-6 gap-3 text-[1rem] cursor-pointer border-b-2 flex justify-center items-center tracking-wide hover:text-primary ${tab === 'info' ? ' border-primary text-primary bg-primary-light' : 'border-white'}`}>
                                <span className='material-symbols-outlined text-[1.4rem] mt-[1px]'>account_circle</span>
                                <span>Information</span>
                            </div>
                            <div onClick={() => setTab('wallet')} className={`py-4.5 px-6 gap-3 text-[1rem] cursor-pointer border-b-2 flex justify-center items-center tracking-wide hover:text-primary ${tab === 'wallet' ? ' border-primary text-primary bg-primary-light' : 'border-white'}`}>
                                <span className='material-symbols-outlined text-[1.4rem]'>paid</span>
                                <span>Balance</span>
                            </div>
                            <div onClick={() => setTab('password')} className={`py-4.5 px-6 gap-3 text-[1rem] cursor-pointer border-b-2 flex justify-center items-center tracking-wide hover:text-primary ${tab === 'password' ? ' border-primary text-primary bg-primary-light' : 'border-white'}`}>
                                <span className='material-symbols-outlined text-[1.4rem]'>lock_reset</span>
                                <span>Passwords</span>
                            </div>
                            <div onClick={() => setTab('order')} className={`py-4.5 px-6 gap-3 text-[1rem] cursor-pointer border-b-2 flex justify-center items-center tracking-wide hover:text-primary ${tab === 'order' ? ' border-primary text-primary bg-primary-light' : 'border-white'}`}>
                                <span className='material-symbols-outlined text-[1.3rem]'>shopping_cart</span>
                                <span>Bookings</span>
                            </div>
                            <div onClick={() => setTab('setting')} className={`py-4.5 px-6 gap-3 text-[1rem] cursor-pointer border-b-2 flex justify-center items-center tracking-wide hover:text-primary ${tab === 'setting' ? ' border-primary text-primary bg-primary-light' : 'border-white'}`}>
                                <span className='material-symbols-outlined text-[1.3rem]'>settings</span>
                                <span>Settings</span>
                            </div>

                        </div>

                        { tab === 'info' && <Info data={data} setData={setData}/> }
                        { tab === 'setting' && <Setting data={data} setData={setData}/> }
                        { tab === 'password' && <Password data={data} setData={setData}/> }
                        { tab === 'order' && <Order data={data} setData={setData}/> }
                        { tab === 'wallet' && <Wallet data={data} setData={setData}/> }

                    </div>

                </main>
            }
        </div>
         
    )

}
