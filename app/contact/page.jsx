"use client";
import { useSelector } from 'react-redux';

export default function Contact () {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full my-8'>

            <main>
                
                Contact Us

            </main>

        </div>
         
    )

}
