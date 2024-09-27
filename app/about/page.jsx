"use client";
import { useSelector } from 'react-redux';

export default function About () {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full my-8'>

            <main>
                
                About Us

            </main>

        </div>
         
    )

}
