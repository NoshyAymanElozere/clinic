"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

export default function Card({ data }) {
  const config = useSelector((state) => state.config);

  return (
    <div className="w-full">
      <div className="panel group w-full cursor-default space-y-5 overflow-hidden pb-4">
        <div className="h-[13rem] w-full overflow-hidden">
          <img
            src={`/media/${data.image}`}
            className="h-full w-full object-cover duration-300"
            alt={data.name}
          />
        </div>

        <div className="flex w-full flex-col gap-1 px-6 text-left">
          <h1 className="text-[1.1rem] font-bold tracking-wide text-gray-950">
            {data.name}
          </h1>

          <p className="text-[.9rem] font-semibold tracking-wide text-gray-700">
            {data.description}
          </p>

          <div className="w-full pt-5">
            <Link
              href="#"
              className="flex items-start justify-center rounded-[8px] border border-primary bg-primary p-2 px-5 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:bg-white hover:text-main"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
