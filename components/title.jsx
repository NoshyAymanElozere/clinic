"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Title({ head, text, style }) {
  const config = useSelector((state) => state.config);

  return (
    <div className="w-full">
      {style === 2 ? (
        <div className="w-full bg-primary/10 px-4 py-12">
          <main className="flex cursor-default flex-col items-center justify-center gap-5">
            <div className="flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-white hover:bg-main ">
              <span className="material-symbols-outlined text-[3rem] text-main hover:text-white">
                medical_services
              </span>
            </div>
            <h1 className="w-[80rem] text-center text-[1.9rem] font-bold leading-[140%] tracking-wide text-main">
              {head}
            </h1>
            <div className="flex w-full items-center justify-center ">
              <img src="/media/icons/icon/section-img.png" alt="" />
            </div>
            <p className="w-[25rem] text-center text-[1.1rem] font-semibold tracking-wide text-gray-800">
              {text}
            </p>
            <div className="flex w-full items-center justify-center pt-5">
              <Link
                href="/"
                className="  rounded-[8px] border border-primary bg-primary p-2 px-3 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:bg-white hover:text-main"
              >
                Countact Now
              </Link>
            </div>
          </main>
        </div>
      ) : (
        <main className="flex w-full flex-col gap-2">
          <div
            className={`flex justify-${
              text ? "start" : "center"
            } items-center ${
              text ? "text-[1.4rem]" : "mb-1 mt-3 text-[1.7rem]"
            } cursor-default font-bold tracking-wide text-gray-950`}
          >
            {head}
          </div>

          {text && (
            <div className="flex cursor-default items-center justify-start text-[1.05rem] font-bold text-gray-600">
              {text}
            </div>
          )}
        </main>
      )}
    </div>
  );
}
