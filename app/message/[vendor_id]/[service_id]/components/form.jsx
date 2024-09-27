"use client";
import { api, date, storage, fix_date, sound, scroll_down, is_down, print } from '@/public/script/main';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Elements from '@/components/elements';
import Icons from '@/components/icons';
import Link from 'next/link';

export default function Form ({ messages, setMessages, vendor, menu, setMenu, current_user }) {

    const config = useSelector((state) => state.config);
    const [last, setLast] = useState('');
    const [content, setContent] = useState('');
    const [scroller, setScroller] = useState(false);
    const ref = useRef(null);

    const _update_room_ = ( message ) => {

        if ( date('date') !== last ) {
            setMessages([...messages, {sender_id: 'system', created_at: date(), content: fix_date(message.created_at)}, message]);
            setLast(date('date'));
        }
        else setMessages([...messages, message]);

        setContent('');
        scroll_down('.display-content');
        sound('send');

    }
    const _send_ = async( file ) => {

        let message = {
            id: date(),
            created_at: date(),
            sender_id: current_user.id,
            receiver_id: vendor.id,
            type: file ? 'file' : 'text',
            content: ref.current?.value || '',
            file: file,
            local: true,
        }

        _update_room_(message);
        let request = {content: message.content, type: message.type, file: message.file?.file}
        const response = await api(`message/${vendor.id}/send`, request);

    }
    return (

        <div className="w-full panel p-0 flex-1 relative overflow-hidden">

            <div className="w-full h-full">

                <div className="flex justify-between items-center px-5 py-3.5 gap-3.5 border-b border-gray-200">

                    <div className="flex items-center gap-3.5">

                        <button onClick={() => setMenu(!menu)} type="button" className="xl:hidden hover:text-primary">
                            <Icons icon='menu' className='w-7 h-7'/>
                        </button>

                        <div className="relative">
                            
                            <Elements element='image' value={vendor.image} className='w-11 h-11'/>

                            { vendor.online && <Icons icon='online'/> }

                        </div>

                        <div>

                            <div className="font-semibold truncate flex items-center tracking-wide default gap-x-1">
                                <span className='max-w-[10rem] text-[1.05rem]'>{vendor.name}</span>
                            </div>
                            
                            <div className={`text-[.8rem] font-semibold mt-[.05rem] flex items-center select-none tracking-wide ${vendor.online ? 'text-primary' : 'text-danger'}`}>
                                { vendor.online ? 'Online' : 'Offline' }
                            </div>

                        </div>

                    </div>

                    <div className="flex items-center gap-5">

                        <div className='cursor-pointer flex justify-center items-center text-gray-950'>
                            <span className='material-symbols-outlined text-[1.4rem]'>call</span>
                        </div>
                        <div className='cursor-pointer flex justify-center items-center text-gray-950'>
                            <span className='material-symbols-outlined text-[1.5rem]'>videocam</span>
                        </div>
                        <div className='cursor-pointer flex justify-center items-center text-gray-950'>
                            <span className='material-symbols-outlined font-bold text-[1.4rem]'>more_vert</span>
                        </div>

                    </div>

                </div>

                {
                    messages.length ?
                    <div onScroll={(e) => setScroller( is_down(e) )} className='overflow-auto h-[calc(100vh_-_255px)] display-content'>

                        <div className="p-5 cursor-default">

                            <div className="flex justify-center items-center">
                            
                                <div className="rounded-md py-2.5 px-6 bg-[#777]">
                                    
                                    <span className="flex items-start gap-2 text-[#ffd279]">

                                        <span className="material-symbols-outlined icon mt-[1px]" style={{ fontSize: '1rem' }}>lock</span>

                                        <span className='text-[.85rem] tracking-wide'>{config.text.encrypt_messages}</span>

                                    </span>

                                </div>

                            </div>

                            {
                                messages?.map((message, index) => {
                                    
                                    let sender = message.sender_id === current_user.id;
                                    let image = sender ? current_user.image : vendor.image;
                                    let file_url = message.local ? message.file?.url : `${storage}/${message.file?.url}`;

                                    return (

                                        <div key={index} id={message.id} className='pt-2.5 pb-0'>
                                            {
                                                message.sender_id === 'system' ?
                                                <div className="flex justify-center items-center">

                                                    <div className="rounded-md py-1.5 px-5 bg-[#888] text-white text-[.85rem] tracking-wide font-semibold">
                                                        <span>{message.content}</span>
                                                    </div>

                                                </div> :
                                                <div className={`flex items-start ${sender && 'justify-end'}`}>

                                                    <div className={`${sender && 'order-2'} ${messages[index-1]?.sender_id === message.sender_id && 'invisible'}`}>
                                                        <Elements element='image' value={image} className='w-10 h-10'/>
                                                    </div>

                                                    <div className="space-y-1.5 w-[60%] mx-[.6rem] -mt-[1px]">

                                                        <div className={`flex items-center ${sender && 'justify-end'}`}>

                                                            <div className={`rounded-md relative tracking-wide ${sender ? 'bg-primary/20 text-gray-950' : 'bg-primary text-white'}`}>
                                                                {
                                                                    message.type === 'file' ?
                                                                    <Link href={file_url} target='_blank' download className='select-none hover:opacity-[.8]'>
                                                                        {
                                                                            message.file.type === 'image' ?
                                                                            <div className='rounded-md p-1.5'>
                                                                                <img src={file_url} className='w-auto max-w-[15rem] max-h-[12rem] rounded-md'/>
                                                                            </div> :
                                                                            message.file.type === 'video' ?
                                                                            <div className='rounded-md p-1.5'>
                                                                                <video src={file_url} className='w-auto max-w-[15rem] max-h-[12rem] rounded-md'></video>
                                                                            </div> :
                                                                            <div className='p-2 w-full min-w-[15rem] rounded-md'>
                                                                                <div className={`p-2 rounded-md flex justify-between items-center ${sender ? 'bg-primary/20' : 'bg-black/30'}`}>
                                                                                    <div className="flex justify-start items-center">
                                                                                        <span className="material-symbols-outlined -mt-[.5px] opacity-[.5]">description</span>
                                                                                        <div className="flex justify-start items-center flex-col mx-[.5rem]">
                                                                                            <span className="w-full flex justify-start items-center truncate tracking-wide max-w-[15rem] text-[.9rem] opacity-[.7]">{message.file.name}</span>
                                                                                            <span className="w-full flex justify-start items-center max-w-[15rem] text-[.76rem] opacity-[.6]">{message.file.size}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span className="material-symbols-outlined opacity-[.6]">download</span>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    </Link> :
                                                                    <div className='p-5 py-2.5 font-semibold text-[.95rem]'>{message.content}</div>
                                                                }
                                                            </div>

                                                        </div>

                                                        {/* <div className={`text-gray-950 text-[.75rem] tracking-wide px-1 font-semibold ${sender && 'ltr:text-right rtl:text-left'}`}>
                                                            { fix_time(message.created_at) }
                                                        </div> */}

                                                    </div>

                                                </div>
                                            }
                                        </div>

                                    );

                                })
                            }

                        </div>

                        { scroller && <Elements element='scroll_down' onClick={() => scroll_down('.display-content', true)}/> }

                    </div> :
                    <div className='flex items-center justify-center h-[calc(100vh_-_255px)] text-white'>
                        <Icons icon='chat' className='w-[280px]'/>
                    </div>
                }

                <div className="px-5 py-2 sm:py-5 absolute bottom-0 left-0 w-full select-none">

                    <div className="flex w-full gap-x-4 rtl:space-x-reverse items-center">

                        <form className="relative flex-1 input" onSubmit={(e) => { e.preventDefault(); _send_(); }}>

                            <input ref={ref} value={content} onChange={(e) => setContent(e.target.value)} className="form-input rounded-full bg-body border border-gray-300 px-12 py-2.5" placeholder={config.text.type_msg} autoComplete='off' required/>

                            <button type="button" className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 hover:text-primary outline-none">
                                <Icons icon='face'/>
                            </button>

                            <button type="submit" className="absolute ltr:right-5 rtl:left-5 -translate-y-1/2 hover:text-primary top-[1.4rem] rtl:rotate-[-90deg] outline-none">
                                <Icons icon='send'/>
                            </button>

                        </form>

                        <div className="flex items-center gap-x-4 rtl:space-x-reverse sm:py-0 py-3">

                            <button className="bg-body hover:bg-primary-light rounded-md p-2.5 border border-gray-300 hover:text-primary outline-none hidden sm:block">
                                <Icons icon='voice'/>
                            </button>

                            <Elements element='upload' multiple={true} onChange={_send_}>
                                <button className="attach-file bg-body hover:bg-primary-light rounded-md p-2.5 border border-gray-300 hover:text-primary outline-none">
                                    <Icons icon='folder'/>
                                </button>
                            </Elements>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}
