"use client";
import { fix_date } from "@/public/script/main";
import Stars from "@/components/stars";

export default function Side ({ data }) {

    return (
  
        <div className="w-full space-y-5">

            <div className="panel p-0 overflow-hidden">

                <div className="head">
                    <p>Statistics</p>
                </div>

                <ul className="w-full p-6 space-y-5 cursor-default">

                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Reviews</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[.9rem] tracking-wide font-semibold">
                            <Stars count={data.rate} className='text-[1.2rem]'/>
                            <span className="opacity-[.8]">( {data.reviews} )</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Reply After</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>15 Minutes</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Sales</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>{data.orders}</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Complete Orders</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>98.56 %</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Delivery duration</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>{data.duration}</span>
                        </div>
                    </li>
                    <li className="w-full flex justify-between items-center">
                        <div className="w-1/2 flex justify-start items-center text-[1rem] tracking-wide font-semibold">
                            <span>Register Date</span>
                        </div>
                        <div className="w-1/2 flex justify-start items-center gap-2 text-[1rem] tracking-wide font-semibold">
                            <span>{fix_date(data.created_at)}</span>
                        </div>
                    </li>

                </ul>

            </div>

            <div className="panel p-0 overflow-hidden">

                <div className="head">
                    <p>Authentication</p>
                </div>

                <ul className="w-full p-6 grid grid-cols-2 gap-4">

                    <li className="w-full flex items-center gap-3.5">
                        <span className="material-symbols-outlined text-[1.2rem] font-bold text-primary">check</span>
                        <span className="font-semibold text-[1.1rem] tracking-wide">E-mail</span>
                    </li>
                    <li className="w-full flex items-center gap-3.5">
                        <span className="material-symbols-outlined text-[1.2rem] font-bold text-primary">check</span>
                        <span className="font-semibold text-[1.1rem] tracking-wide">ID Card</span>
                    </li>
                    <li className="w-full flex items-center gap-3.5">
                        <span className="material-symbols-outlined text-[1.2rem] font-bold text-danger">close</span>
                        <span className="font-semibold text-[1.1rem] tracking-wide">Phone Number</span>
                    </li>

                </ul>

            </div>

        </div>

    )

}
