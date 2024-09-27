"use client";
import { useSelector } from 'react-redux';
import Elements from "@/components/elements";

export default function Info ({ data, setData }) {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full space-y-4'>

            <div className="panel p-0 overflow-hidden">
                
                <div className='w-full flex justify-between items-center gap-4 py-4 bg-primary-light/0 px-6'>

                    <div className='flex justify-start items-center gap-4'>

                        <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-primary p-[2px] layer'>
                            <img src="/media/user/1.png" className="w-full h-full object-cover rounded-full"/>
                        </div>

                        <div className='flex flex-col gap-0.5 text-gray-950 text-[1rem] tracking-wide select-none'>
                            <span className='font-bold text-[1.1rem]'>Login as:</span>
                            <span>codingmaster@gmail.com</span>
                        </div>

                    </div>

                    <div className='flex justify-end items-center'>
                        
                        <div className='text-gray-950 tracking-wide font-bold text-[.95rem] underline duration-300 cursor-pointer select-none'>
                            Switch User
                        </div>

                    </div>

                </div>

            </div>

            <div className="panel p-0 overflow-hidden">
                
                <div className="head px-7 py-4">
                    <p>Information</p>
                </div>

                <div className='w-full p-7 space-y-8'>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 lg:gap-x-8'>

                        <Elements element='input' name='Full Name' value={data.name} onChange={(e) => setData({...data, name: e})}/>
                        <Elements element='input' name='Email' value={data.email} onChange={(e) => setData({...data, email: e})}/>
                        {/* <Elements element='select' children='phone' name='Key' value={data.phone_code} onChange={(e) => setData({...data, phone_code: e})}/> */}
                        <Elements element='input' name='Phone' value={data.phone} onChange={(e) => setData({...data, phone: e})}/>
                        <Elements element='select' children='country' name='Country' value={data.country} onChange={(e) => setData({...data, country: e})}/>
                        <Elements element='input' name='City' value={data.city} onChange={(e) => setData({...data, city: e})}/>
                        <Elements element='input' name='Street' value={data.street} onChange={(e) => setData({...data, street: e})}/>

                    </div>

                    <div className='w-full pt-1 pb-3 space-y-5'>

                        <div onClick={() => setData({...data, active: !data.active})} className='flex justify-start items-center gap-4 select-none cursor-pointer'>
                           
                            <div className={`w-[1.3rem] h-[1.3rem] flex justify-center items-center border-2 rounded-[.2rem] group-hover:border-primary ${data.active ? 'bg-primary border-primary' : 'border-gray-400'}`}>
                                <span className='material-symbols-outlined text-[1.1rem] text-white'>check</span>
                            </div>

                            <span className={`text-[1rem] mt-[1px] font-semibold group-hover:text-primary ${data.active ? 'text-gray-900' : 'text-gray-600'}`}>
                                Yes, I want free paperless
                            </span>

                        </div>

                        <div onClick={() => setData({...data, active1: !data.active1})} className='flex justify-start items-center gap-4 select-none cursor-pointer'>
                           
                            <div className={`w-[1.3rem] h-[1.3rem] flex justify-center items-center border-2 rounded-[.2rem] group-hover:border-primary ${data.active1 ? 'bg-primary border-primary' : 'border-gray-400'}`}>
                                <span className='material-symbols-outlined text-[1.1rem] text-white'>check</span>
                            </div>

                            <span className={`text-[1rem] mt-[1px] font-semibold group-hover:text-primary ${data.active1 ? 'text-gray-900' : 'text-gray-600'}`}>
                                Update my account
                            </span>
                            
                        </div>

                    </div>

                </div>

            </div>
         
        </div>

    );

}
