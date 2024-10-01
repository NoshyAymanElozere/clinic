"use client";

import Link from "next/link";

export default function Offers({ points, description }) {
  return (
    <main className="min-h-60 rounded-sm bg-white p-4 font-bold">
      <h4 className="text-[16px] text-main sm:text-[20px]">offers</h4>
      <h3 className="my-3 text-[12px] font-medium text-maintitle sm:text-[15px]">
        This is our way of saying thank you for supporting our business
      </h3>
      <div className="rounded-sm bg-primary-light p-4">
        <div className="grid w-full grid-cols-1 rounded-sm bg-white px-5 py-9 sm:grid-cols-2">
          <div className="flex items-center justify-start">
            <img
              src="/media/Doctors/13.jpg"
              className="h-12 w-12 rounded-full sm:h-20 sm:w-20"
              alt="Profile Image"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="text-lg font-extrabold text-[#ef0f0f]">
                {points} Points
              </h2>
              <span className="text-[14px] font-bold text-maintitle">
                {description}
              </span>
            </div>
          </div>
          <Link
            href="/"
            className="flex w-full items-center justify-end text-main"
          >
            Claim now
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
