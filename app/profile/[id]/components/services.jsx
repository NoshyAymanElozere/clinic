"use client";
import { api } from '@/public/script/main';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Cards from '@/components/cards/services';

export default function Services ({ id }) {

    const config = useSelector((state) => state.config);
    const [items, setItems] = useState([]);
  
    const _get_ = async( page, limit ) => {

        setItems([]);
        const response1 = await api(`profile/${id}/products`, {page: page, limit: limit});
        const response = {
            status: true,
            total: 12,
            items: [
                {
                    id: 1,
                    name: 'Beuty Center In Algamal',
                    image: 'service/9.png',
                    reviews: 429,
                    rate: 5,
                    location: 'Egypt, Cairo',
                    new_price: 60.00,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 2,
                    name: 'Genius loyalty program',
                    image: 'service/11.png',
                    reviews: 540,
                    rate: 4,
                    location: 'Jurdan, Omman',
                    new_price: 38.35,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 3,
                    name: 'Destinations we love',
                    image: 'service/8.png',
                    reviews: 129,
                    rate: 2,
                    location: 'Emirates, Dubai',
                    new_price: 12.50,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 4,
                    name: 'Oriente Apartments',
                    image: 'service/4.png',
                    reviews: 723,
                    rate: 4,
                    location: 'Saudi arabian, Rayiad',
                    new_price: 30.12,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 5,
                    name: 'Aparthotel Stare Miasto',
                    image: 'service/14.png',
                    reviews: 312,
                    rate: 3,
                    location: 'Egypt, Alexandria',
                    new_price: 50.00,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
                {
                    id: 6,
                    name: 'Aparthotel Stare Miasto',
                    image: 'service/8.png',
                    reviews: 312,
                    rate: 3,
                    location: 'Egypt, Alexandria',
                    new_price: 50.00,
                    old_price: 70.00,
                    vendor: {
                        id: 1,
                        name: 'Coding Master',
                        image: 'user/1.png',
                    }
                },
            ],
        }

        setItems([...response.items, ...response.items] || []);
        window.scrollTo(0, 0);

    }
    return (

        <div className="w-full">

            <Cards data={items} pagination read={_get_}/>

        </div>
         
    )

}
