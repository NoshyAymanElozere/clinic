"use client";
import { fix_number, storage } from "@/public/script/main";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Card({ data, style }) {
  const config = useSelector((state) => state.config);

  return (
    <div className="w-full">
      {style === 2 ? (
        <div className="group w-full cursor-pointer select-none overflow-hidden duration-300">
          <div className="relative h-[9rem] w-full overflow-hidden rounded-[8px]">
            <img
              src={`${storage}/${data.image}`}
              className="h-full w-full object-cover duration-500 group-hover:scale-[1.1]"
            />
          </div>

          <div className="mb-2 mt-4 flex flex-col gap-1">
            <h1 className="text-[1.05rem] font-bold tracking-wide text-gray-950">
              <span>{data.name}</span>
            </h1>

            <p className="text-[.9rem] font-semibold tracking-wide text-gray-600">
              <span>{fix_number(data.services)} Services</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="panel group w-full cursor-default space-y-5 overflow-hidden pb-4">
          <div className="h-[10rem] w-full overflow-hidden">
            <img
              src={`${storage}/${data.image}`}
              className="h-full w-full object-cover duration-300"
            />
          </div>

          <div className="flex w-full flex-col gap-1 px-6 text-left">
            <h1 className="text-[1.1rem] font-bold tracking-wide text-gray-950">
              {data.name}
            </h1>

            <p className="text-[.9rem] font-semibold tracking-wide text-gray-700">
              {fix_number(data.services)} Services
            </p>

            <div className="w-full pt-5">
              <Link
                href={`/categories/${data.id}`}
                className=" flex w-full items-center justify-center rounded-[8px] border border-primary bg-primary p-2 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:bg-white hover:text-main"
              >
                Get Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
