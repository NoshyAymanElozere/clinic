"use client";
import { api, print } from "@/public/script/main";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Loader from "@/components/loader";
import Side from "./side"
import Form from "./form";
import Broadcast from "./broadcast";

export default function Index ({ vendor_id, service_id }) {

    const config = useSelector((state) => state.config);
    const [user, setUser] = useState({id: 1, name: 'Coding Master', image: 'user/1.png'});
    const [vendor, setVendor] = useState({});
    const [service, setService] = useState({});
    const [messages, setMessages] = useState([]);
    const [menu, setMenu] = useState(false);
    const [loader, setLoader] = useState(true);

    const _get_ = async() => {

        // const response = await api(`message/${vendor_id}/${service_id}`);
        const response = {
            status: true,
            service: {
                id: 1,
                name: 'Maintenance create a one product dropshipping',
                image: 'service/11.png',
                rate: 4,
                reviews: 1920,
                orders: 30,
                pending_orders: 10,
                new_price: 50,
                old_price: 60,
                created_at: '2024-09-11',
                cancel_date: '2025-09-16',
            },
            vendor: {
                id: 1,
                name: 'Mohamed Elsayed',
                image: 'user/2.png',
                created_at: '2024-09-11',
                rate: 4,
                orders: 58,
                duration: 15,
                online: true,
            },
            messages: [
                {
                    id: 1,
                    content: 'Hello sir !',
                    sender_id: 2,
                    receiver_id: 1,
                    type: 'text',
                    created_at: '2024-09-14',
                },
                {
                    id: 2,
                    content: '',
                    sender_id: 2,
                    receiver_id: 1,
                    type: 'file',
                    file: {id: 1, url: 'user/1.png', type: 'image'},
                    created_at: '2024-09-14',
                },
                {
                    id: 3,
                    content: 'Good luck another one sailed it to me, iam very sorry',
                    sender_id: 1,
                    receiver_id: 2,
                    type: 'text',
                    created_at: '2024-09-14',
                },
                {
                    id: 4,
                    content: 'How much ?',
                    sender_id: 1,
                    receiver_id: 2,
                    type: 'text',
                    created_at: '2024-09-14',
                },
                {
                    id: 5,
                    content: '',
                    sender_id: 1,
                    receiver_id: 2,
                    type: 'file',
                    file: {id: 1, url: 'user/2.png', type: 'image'},
                    created_at: '2024-09-14',
                },
                {
                    id: 6,
                    content: '',
                    sender_id: 2,
                    receiver_id: 1,
                    type: 'file',
                    file: {id: 1, name: 'User Information', size: '15 MB', url: 'user/2.png', type: 'file'},
                    created_at: '2024-09-13',
                },
            ],
        }

        setService(response.service || []);
        setVendor(response.vendor || []);
        // setMessages(response.messages || []);
        setTimeout(() => setLoader(false), 1000);

    }
    useEffect(() => {

        _get_();

    }, []);

    return (
    
        <div className='chat-div py-8 relative cursor-default h-[calc(100vh_-_60px)]'>

            {
                loader ? <Loader /> :
                <main className="w-full h-full flex gap-6">

                    <Side vendor={vendor} service={service} menu={menu} setMenu={setMenu}/>

                    <Form messages={messages} setMessages={setMessages} vendor={vendor} menu={menu} setMenu={setMenu} current_user={user}/>
                    
                </main>
            }

            {/* <Broadcast data={data} setData={setData} room={room} setRoom={setRoom} current_user={user}/> */}

        </div>

    )

}
