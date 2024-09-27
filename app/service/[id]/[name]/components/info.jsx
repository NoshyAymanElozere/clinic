"use client";
import { fix_number } from '@/public/script/main';
import { useSelector } from 'react-redux';
import Side from './side';
import Comments from './comments';
import Images from './images';

export default function Info ({ data, buy }) {

    const config = useSelector((state) => state.config);

    return (

        <div className="w-full flex justify-between flex-wrap gap-5 lg:flex-nowrap lg:gap-8 cursor-default item-details">

            <div className="w-full lg:w-[calc(100%_-_32rem)] flex flex-col gap-6">

                { data.images?.length > 0 && <Images data={data.images} title={data.name}/> }

                {
                    data.details &&
                    <div className="panel p-0 overflow-hidden">
                        <div className="head"><p>Overview</p></div>
                        <div className="quill-content" dangerouslySetInnerHTML={{ __html: data.details }}></div>
                    </div>
                }
             
                <div className="panel p-0 overflow-hidden">
                    
                    <div className="head">
                        <p>Buy Service</p>
                    </div>

                    <div className="px-5 py-9 space-y-6">
                    
                        <div className="flex justify-center items-center gap-8">

                            <h1 className="font-semibold tracking-wide text-[1.05rem] text-gray-950">Order Times :</h1>

                            <select className="form-select w-[8rem] text-[1rem] cursor-default" disabled>
                                <option value="1">1</option>
                            </select>

                        </div>

                        <div className="flex justify-center items-center gap-8">

                            <h1 className="font-semibold tracking-wide text-[1.05rem] text-gray-950">Service Price :</h1>

                            <input type="text" value={`${fix_number(data.new_price, true)} $`} className="form-input text-[1rem] w-[8rem] cursor-default" readOnly/>

                        </div>

                        <div className="w-full flex justify-center items-center">

                            <button onClick={buy} className="py-3 px-6 rounded-md bg-primary text-white cursor-pointer duration-300 hover:opacity-[.8] flex justify-center items-center gap-3">
                                <span className="material-symbols-outlined text-[1.2rem]">shopping_cart</span>
                                <span className="font-semibold tracking-wide text-[1rem]">Book Now</span>
                            </button>

                        </div>

                    </div>

                </div>

                <Comments id={data.id}/>

            </div>

            <div className="w-full lg:w-[30rem]">

                <Side data={data}/>

            </div>

        </div>

    )

}
