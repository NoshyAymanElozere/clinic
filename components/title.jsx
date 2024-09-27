"use client";
import { useSelector } from 'react-redux';

export default function Title ({ head, text, style }) {

    const config = useSelector((state) => state.config);
 
    return (

        <div className='w-full'>
            {
                style === 2 ?
                <div className='w-full px-4 py-12 bg-primary/10'>

                    <main className='flex flex-col items-center justify-center gap-5 cursor-default'>

                        <h1 className='text-center text-[1.9rem] text-gray-950 font-bold tracking-wide w-[20rem] leading-[140%]'>
                            {head}
                        </h1>

                        <p className='text-center text-[1.1rem] text-gray-800 font-semibold tracking-wide w-[25rem]'>
                            {text}
                        </p>

                    </main>

                </div> :
                <main className='flex flex-col w-full gap-2'>

                    <div className={`flex justify-${text ? 'start' : 'center'} items-center ${text ? 'text-[1.4rem]' : 'text-[1.7rem] mt-3 mb-1'} font-bold tracking-wide cursor-default text-gray-950`}>
                        {head}
                    </div>

                    {
                        text &&
                        <div className='flex justify-start items-center text-[1.05rem] font-bold cursor-default text-gray-600'>
                            {text}
                        </div>
                    }

                </main>
            }
        </div>

    )

}
