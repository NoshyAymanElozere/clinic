"use client";
import { useSelector } from 'react-redux';

export default function Policy () {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full my-8'>

            <main>
                
                Privacy Policy

            </main>

        </div>
         
    )

}
