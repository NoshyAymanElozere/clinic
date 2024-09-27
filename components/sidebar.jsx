"use client";
import { actions } from "@/public/script/store";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icons from "./icons";

export default function Sidebar() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const config = useSelector((state) => state.config);

  useEffect(() => {
    setTimeout(() => ref.current?.focus(), 200);
  }, [config.side]);

  return (
    <div>
      <div
        className={`${
          config.side && "hidden"
        } fixed left-0 top-0 z-[99] h-full w-full bg-[black]/60 `}
        onClick={() => dispatch(actions.toggle_side())}
      ></div>

      <nav
        className={`sidebar fixed bottom-0 top-0 z-[99] h-full min-h-screen w-[260px] shadow-[1px_0_4px_0_rgba(94,92,154,0.1)] transition-all duration-300`}
      >
        <div className="h-full bg-white select-none dark:bg-black">
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              href="/"
              rel="preload"
              className="main-logo flex shrink-0 items-center pt-[2px] ltr:ml-2 rtl:mr-2"
            >
              {/* <img className="w-6 rtl:ml-2.5 ltr:mr-2.5" src="/media/layout/logo.png"/> */}
              <span
                className="text-2xl font-bold tracking-wide align-middle dark:text-white-dark lg:inline"
                style={{ fontSize: "1.3rem" }}
              >
                <span className="text-primary">Bookinzy.</span>
                <span className="px-1 text-[#c55858]">com</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => dispatch(actions.toggle_side())}
              className="flex items-center w-8 h-8 transition duration-300 rounded-full collapse-icon hover:bg-gray-500/10 dark:text-white-light dark:hover:bg-dark-light/10 rtl:rotate-180"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 m-auto"
              >
                <path
                  d="M13 19L7 12L13 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.5"
                  d="M16.9998 19L10.9998 12L16.9998 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="items-center justify-center hidden w-full px-3 py-4 border-t border-gray-300">
            <input
              type="text"
              ref={ref}
              className="form-input py-2.5 text-[1rem] tracking-wide"
              placeholder="Search ..."
            />
          </div>

          <PerfectScrollbar className="relative h-[calc(100vh_-_130px)] border-t border-gray-300 pt-3">
            <ul className="relative px-3 py-0 space-y-1 font-semibold tracking-wide transition-all duration-300">
              <li className="nav-item">
                <Link
                  href="/"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="chart"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      Home Page
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/categories"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="apps"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      {config.text.categories}
                    </span>
                  </div>
                </Link>
              </li>

              <div className="w-full py-2">
                <div className="h-[1px] w-full bg-gray-300"></div>
              </div>
              <li className="nav-item">
                <Link
                  href="/account"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="user"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      {config.text.account}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/account"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="message"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      {config.text.messages}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="order"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      Bookings
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="setting"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      {config.text.settings}
                    </span>
                  </div>
                </Link>
              </li>
              <div className="w-full py-2">
                <div className="h-[1px] w-full bg-gray-300"></div>
              </div>
              <li className="nav-item">
                <Link
                  href="/about"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="privacy"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      About us
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="users"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      Support
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/auth/login"
                  rel="preload"
                  className="group border border-white transition-all duration-300 hover:border-primary hover:!bg-primary-light"
                >
                  <div className="flex items-center gap-3 px-1">
                    <Icons
                      icon="logout"
                      className="text-gray-950 group-hover:!text-primary"
                    />
                    <span className="text-[1rem] text-black group-hover:!text-gray-950">
                      Logout
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
}
