"use client";
import { fix_date, fix_number } from '@/public/script/main';
import { useSelector } from 'react-redux';
import Table from "@/components/table";
import Elements from "@/components/elements";
import Link from 'next/link';

export default function Order ({ data }) {

    const config = useSelector((state) => state.config);

    return (

        <div className='w-full space-y-4'>

            <div className="panel p-0 overflow-hidden">
                
                <div className='head !border-0'>
                    <p>All Bookings</p>
                </div>

                <div className="py-6 hidden px-8">

                    <div className="w-full lg:w-[70%] text-gray-700 flex gap-3">

                        <span className="material-symbols-outlined">emoji_objects</span>

                        <p className="font-semibold tracking-wide leading-7">
                            Here you can find you bookings .
                        </p>

                    </div>

                </div>

            </div>

            <Table
                id={1} system={'order'} add={false} settings={true} use_filters={false}
                columns={[
                    {
                        accessor: 'id', title: 'id', render: ({ id }) => (
                            <span>{id}</span>
                        )
                    },
                    {
                        accessor: 'product', title: 'product', render: ({ product }) => (
                            <div className='max-w-[12rem]'>
                                { product && <Elements element='image' value={product.image} type='md'/> }
                                { product ? <Link href={`/product?edit=${product.id}`}>{product.name}</Link> : <span>--</span> }
                            </div>
                        )
                    },
                    {
                        accessor: 'price', title: 'price', render: ({ price }) => (
                            <span>{fix_number(price, true)}&nbsp;{config.text.curr}</span>
                        )
                    },
                    {
                        accessor: 'paid', title: 'paid', render: ({ paid }) => (
                            <span className={`badge ${paid ? 'badge-success' : 'badge-danger'}`}>
                                { paid ? config.text.paid : config.text.not_paid }
                            </span>
                        )
                    },
                    {
                        accessor: 'status', title: 'status', render: ({ status }) => (
                            <div>
                                {
                                    status === 'confirmed' ?
                                    <span className='badge badge-success'>{config.text.confirmed}</span>
                                    : status === 'cancelled' ?
                                    <span className='badge badge-danger'>{config.text.cancelled}</span>
                                    : status === 'request' ?
                                    <span className='badge badge-info'>{config.text.request}</span>
                                    : 
                                    <span className='badge badge-warning'>{config.text.pending}</span>
                                }
                            </div>
                        )
                    },
                    {
                        accessor: 'created_at', title: 'date', render: ({ created_at }) => (
                            <span>{fix_date(created_at)}</span>
                        )
                    },
                ]}
            />

        </div>

    )

}
