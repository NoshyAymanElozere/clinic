"use client";

import { AuthButtons } from "./AuthButtons";

export default function DrStatus({ name, department }) {
  return (
    <main>
      <div className="grid  w-full grid-cols-1 rounded-sm bg-white px-5 py-9 sm:grid-cols-2">
        <div className=" flex items-center justify-around">
          <img
            src="/media/Doctors/13.jpg"
            className="size-32 rounded-full  sm:size-40"
            alt="bgStuts"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <h2 className="text-lg  font-extrabold text-[#ef0f0f]">
              Dr:{name}
            </h2>
            <span className="text-[14px] font-bold text-maintitle">
              {department}
            </span>
            <AuthButtons btn_1={"Available"} btn_2={"Book now"} />
          </div>
        </div>
        <div className="flex w-full items-start justify-end">
          <AuthButtons btn_1={"Message"} btn_2={"Follow"} />
        </div>
      </div>
    </main>
  );
}
