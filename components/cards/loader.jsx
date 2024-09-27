"use client";
import { useEffect, useState } from "react";

export default function Loader ({ count, className, cols }) {

    return (

        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6 ${className}`}>
            {
                Array.from({length: count || 0}, (_, index) => index + 1).map(_ => 
                    <div key={_} className="w-full space-y-2">

                        <div className='w-full bg-primary/10 h-[12rem] rounded-sm overflow-hidden relative'>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shimmer"></div>
                        </div>

                        <div className='w-[100%] bg-primary/10 h-[4rem] rounded-sm overflow-hidden relative'>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shimmer"></div>
                        </div>

                        <div className='w-[60%] bg-primary/10 h-[2rem] rounded-sm overflow-hidden relative'>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25 animate-shimmer"></div>
                        </div>

                    </div>
                )
            }
        </div>
         
    )

}
