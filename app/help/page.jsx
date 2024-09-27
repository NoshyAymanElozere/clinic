"use client";
import { useSelector } from 'react-redux';

export default function Help () {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full my-8'>

            <main>
                
                Help Center

            </main>

        </div>
         
    )

}
