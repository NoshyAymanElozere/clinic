"use client";

import Link from "next/link";

export const AuthButtons = ({ btn_1, btn_2 }) => (
  <>
    <div className="flex-wrap sm:flex sm:gap-4">
      <Link
        className="rounded-[8px] bg-main px-5 py-2.5 text-sm font-extrabold text-white shadow"
        href="#"
      >
        {btn_1}
      </Link>

      <div className="hidden sm:flex">
        <Link
          className="rounded-[8px] border border-main bg-white   px-5 py-2.5 text-sm font-extrabold text-main"
          href="#"
        >
          {btn_2}
        </Link>
      </div>
    </div>
  </>
);
