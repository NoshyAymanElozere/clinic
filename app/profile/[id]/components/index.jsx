"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Top from "./top";
import About from "./about";
import Side from "./side";
import Services from "./services";
import Reviews from "./reviews";

export default function Index ({ id }) {

    const [data, setData] = useState({});
    const [loader, setLoader] = useState(true);
    const [tab, setTab] = useState(1);

    const _get_ = async() => {

        // const response = await api(`profile/${id}`);
        const response = {
            status: true,
            user: {
                id: 1,
                name: 'Dr. Coding Master',
                image: 'user/1.png',
                created_at: '2024-09-12',
                orders: 90,
                products: 12,
                rate: 4,
                reviews: 139,
                duration: '15 Minutes',
                active: true,
                description: `
                    <p>
                        <p>I provide you with the following settings and services :-</p>
                        <h1>Please contact first</h1>
                        <p>@ Authenticate the store with your personal data.</p>
                        <p>@ Install the theme, create and customize the home page, add store features.</p>
                        <p>@ Add 20 products to your store [product images and data must be available].</p>
                        <p>@Adjusting payment method settings and setting payment terms upon receipt.</p>
                        <p>@ Link your store to a paid domain with the name you choose.</p>
                        <p>@ Add technical support data and social media accounts.</p>
                        <p>@ Adjust shipping settings and link your store to shipping companies.</p>
                        <p>@ Creating discount coupons, offers and promotional advertisements.</p>
                        <br />
                        <h1>What you will get :-</h1>
                        <ul>
                            <li>A stylish logo with main colors that reflects .</li>
                            <li>personality and attracts attention.</li>
                            <li>Colors that reflects your brand's personality and attracts.</li>
                        </ul>
                    </p>
                `,
            }
        }

        setData(response.user);
        setTimeout(() => setLoader(false), 1000);

    }
    useEffect(() => {

        _get_();

    }, []);

    return (

        <div className="w-full relative cursor-default min-h-[calc(100vh_-_60px)]">

            <div className='w-full h-[12rem] relative bg-center bg-cover bg-primary/30 overflow-hidden -mb-[12rem]'>
                <div className="absolute -top-[15rem] -left-[40%] w-full h-[40rem] rotate-[145deg] bg-primary"></div>
            </div>

            {
                loader ? <Loader /> :
                <main className="space-y-5 my-8">
                    
                    <Top data={data} tab={tab} setTab={setTab}/>

                    <div className="w-full flex gap-5">

                        <div className="w-full flex-1">
                            
                            { tab === 1 && <About data={data}/> }
                            { tab === 2 && <Services id={data.id}/> }
                            { tab === 3 && <Reviews id={data.id}/> }
                        
                        </div>

                        {
                            tab !== 2 &&
                            <div className="w-[35%]">
                                <Side data={data}/>
                            </div>
                        }

                    </div>

                </main>
            }

        </div>

    )

}
