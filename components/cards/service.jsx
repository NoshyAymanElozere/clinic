"use client";
import { fix_number, storage } from "@/public/script/main";
import { useSelector } from "react-redux";
import Stars from "@/components/stars";
import Link from "next/link";

export default function Card({ data, style }) {
  const config = useSelector((state) => state.config);

  return (
    <div className="w-full">
      {style === 2 ? (
        <div className="panel flex cursor-pointer items-center justify-start gap-4 px-6 py-5 shadow-none duration-300 hover:shadow-lg">
          <div className="layer flex h-12 w-12 items-center justify-center overflow-hidden rounded-sm">
            {/* <img
              src={`${storage}/${data.image}`}
              className="h-full w-full object-cover"
            /> */}
          </div>

          <div className="flex flex-col gap-1">
            <p className="line-clamp-1 text-[1rem] font-bold tracking-wide text-gray-950">
              {data.name}
            </p>

            <p className="text-[.9rem] font-semibold tracking-wide text-gray-950">
              {data.reviews} reviews
            </p>
          </div>
        </div>
      ) : (
        <div className="panel w-full overflow-hidden rounded-md bg-white p-4">
          <Link href={`/service/${data.id}/${data.name}`}>
            <div className="relative h-[11rem] w-full overflow-hidden rounded-sm">
              <img
                className="h-full w-full object-cover object-center"
                src={`${storage}/${data.image}`}
              />

              <div className="absolute bottom-0 left-0 flex w-full items-center justify-start px-4 py-3">
                {/* <div className="h-[2.8rem] w-[2.8rem] cursor-pointer rounded-full border-2 border-primary bg-black p-[1px] shadow-md">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={`${storage}/${data.vendor?.image}`}
                  />
                </div> */}
              </div>
            </div>
          </Link>

          <div className="flex cursor-default flex-col justify-start gap-3 px-1 pt-5">
            <h2 className="text-[1.15rem] font-bold text-gray-950">
              {data.name}
            </h2>

            <div className="flex gap-2 text-sm font-semibold text-gray-800">
              <Stars count={data.rate} />
              {/* <span>( {fix_number(data.reviews)} )</span> */}
            </div>

            <p className="w-[95%] text-[1rem] font-bold tracking-wide text-gray-900">
              {data.location}
            </p>

            <div className=" items-center justify-between gap-5 pt-3">
              {/* <div className="flex items-center justify-start rounded-md border border-gray-300 bg-primary-light/50 px-6 py-2">
                <span className="text-[1rem] font-bold tracking-wide text-gray-950">
                  ${fix_number(data.new_price, true)}
                </span>
              </div> */}

              <Link
                href={`/service/${data.id}/${data.name}`}
                className="w-full"
              >
                <button className="rounded-[8px] border border-main bg-primary px-6 py-2.5 py-2.5 text-[.95rem] font-semibold tracking-wide text-white hover:bg-white hover:text-main ">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
