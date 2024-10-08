"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { AuthButtons } from "../component/AuthButtons";

export default function Header() {
  const config = useSelector((state) => state.config);
  const navLink = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Contact Us" },
  ];

  return (
    <main className=" w-full">
      <header className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block font-extrabold text-main  " href="#">
                logo
              </Link>
            </div>

            <div className="hidden md:block">
              <nav>
                <ul className="flex items-center gap-6 text-sm">
                  {navLink.map((item) => (
                    <li key={item.id}>
                      <Link
                        className="text-gray-500 transition  hover:text-main"
                        href="#"
                      >
                        {item.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <AuthButtons btn_1="Login" btn_2="Sign Up" />
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
