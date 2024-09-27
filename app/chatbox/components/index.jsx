"use client";
import { api } from "@/public/script/main";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Friends from "./friends";
import Form from "./form";
import Broadcast from "./broadcast";

export default function Index () {

    const config = useSelector((state) => state.config);
    const [user, setUser] = useState({id: 1, name: 'Coding Master', image: 'user/1.png'});
    const [menu, setMenu] = useState(false);
    const [room, setRoom] = useState({});
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);

    const _get_ = async() => {

        // const response = await api('chat/friends');
        const response = {
            status: true,
            relations: [
                {
                    id: 1,
                    created_at: '2024-09-12',
                    unreaden: 0,
                    user: {
                        id: 1,
                        name: 'Mohamed Islam',
                        image: 'user/2.png',
                        created_at: '2024-09-11',
                    },
                    messages: [
                        {
                            id: 1,
                            send_id: 1,
                            receiver_id: 2,
                            content: 'Hello sir !',
                            created_at: '2024-09-12 13:12:09',
                            type: 'text',
                            files: [],
                            readen: true,
                        }
                    ]
                }
            ],
        }

        setData(response.relations || []);

    }
    useEffect(() => {

        _get_();

    }, []);

    return (
    
        <div className='chat-div relative h-[calc(100vh_-_60px)]'>
           
            <main className="w-full py-8 h-full flex gap-5">

                <Friends 
                    data={data} setData={setData} room={room} setRoom={setRoom} users={users} setUsers={setUsers} 
                    menu={menu} setMenu={setMenu} setLoader={setLoader} current_user={user}
                />

                <Form 
                    room={room} setRoom={setRoom} data={data} setData={setData} menu={menu} setMenu={setMenu} 
                    loader={loader} setLoader={setLoader} current_user={user}
                />

                <Broadcast data={data} setData={setData} room={room} setRoom={setRoom} current_user={user}/>
                
            </main>

        </div>

    )

}
