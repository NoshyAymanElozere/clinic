"use client";
import { actions } from "@/public/script/store";
import { api } from "@/public/script/main";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "./menu";
import Elements from "./elements";
import Icons from "./icons";
import Notification from "./notification";

export default function Header() {
  const config = useSelector((state) => state.config);
  const router = useRouter();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(config.lang);

  const logout = async () => {
    dispatch(actions.toggle_user(null));
    router.replace("/auth/login");
    const response = await api("auth/logout");
  };
  return (
    <header className="sticky top-0 z-50 h-[60px] w-full border-b border-gray-300 bg-white">
      <main className="flex items-center justify-between h-full">
        <div className="flex items-center h-full gap-3">
          <div
            onClick={() => dispatch(actions.toggle_side())}
            className="-mt-[1px] flex cursor-pointer items-center justify-center text-primary hover:opacity-[.8]"
          >
            <span className="material-symbols-outlined text-[1.7rem]">
              menu
            </span>
          </div>

          <Link href="/">
            <h1 className="text-[1.4rem] font-bold tracking-wider text-primary hover:opacity-[.8]">
              <span className="text-primary">Bookinzy.</span>
              {/* <span className='text-[#27aabb]'>Master.</span> */}
              <span className="px-1 text-[#c55858]">com</span>
            </h1>
          </Link>

          <div className="flex items-center justify-start h-full px-4 header-menu">
            <Link href="/" target="_blank" className="h-full">
              <div className="flex items-center justify-center h-full gap-3 px-4 transition-all duration-300 border-b-2 border-white cursor-pointer hover:border-primary hover:bg-primary-light hover:text-primary">
                <span className="material-symbols-outlined mt-[1px] !text-[1.4rem]">
                  add_circle
                </span>
                <span className="text-[1.05rem] font-semibold tracking-wide">
                  Add Service
                </span>
              </div>
            </Link>
            <Link href="/categories" className="h-full">
              <div className="flex items-center justify-center h-full gap-3 px-4 transition-all duration-300 border-b-2 border-white cursor-pointer text-gray-950 hover:border-primary hover:bg-primary-light hover:text-primary">
                <span className="material-symbols-outlined mt-[1px] !text-[1.4rem]">
                  apps
                </span>
                <span className="text-[1.05rem] font-semibold tracking-wide">
                  Categories
                </span>
              </div>
            </Link>
            <Link href="/account?order" className="h-full">
              <div className="flex items-center justify-center h-full gap-3 px-4 transition-all duration-300 border-b-2 border-white cursor-pointer text-gray-950 hover:border-primary hover:bg-primary-light hover:text-primary">
                <span className="material-symbols-outlined mt-[1px] !text-[1.4rem]">
                  shopping_cart
                </span>
                <span className="text-[1.05rem] font-semibold tracking-wide">
                  Bookings
                </span>
              </div>
            </Link>
            <Link href="/" className="h-full">
              <div className="flex items-center justify-center h-full gap-3 px-4 transition-all duration-300 border-b-2 border-white cursor-pointer text-gray-950 hover:border-primary hover:bg-primary-light hover:text-primary">
                <span className="material-symbols-outlined mt-[1px] !text-[1.4rem]">
                  favorite
                </span>
                <span className="text-[1.05rem] font-semibold tracking-wide">
                  Favorites
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex min-w-[15rem] select-none items-center justify-end gap-4">
          <div className="dropdown">
            <Dropdown
              offset={[0, 10]}
              btnClassName="relative block p-2 rounded-full bg-primary-light border border-gray-200 hover:border-primary hover:text-primary"
              button={<Icons icon="order" />}
            ></Dropdown>
          </div>

          <div className="dropdown">
            <Dropdown
              offset={[0, 11]}
              btnClassName="relative block p-2 rounded-full bg-primary-light border border-gray-200 hover:border-primary hover:text-primary"
              button={
                lang && (
                  <img
                    className="object-cover w-5 h-5 rounded-full"
                    src={`/media/flags/${lang.toUpperCase()}.svg`}
                    alt="flag"
                  />
                )
              }
            >
              <ul className="langs-list grid w-[280px] grid-cols-2 gap-2 overflow-hidden !rounded-sm border border-gray-200 !px-2 font-semibold text-dark !shadow-lg">
                {config.langs_list.map((item) => (
                  <li key={item.code}>
                    <button
                      type="button"
                      className={`flex w-full rounded-md hover:text-primary ${
                        lang === item.code ? "bg-primary/10 text-primary" : ""
                      }`}
                      onClick={() => {
                        dispatch(actions.toggle_lang(item.code));
                        setLang(item.code);
                      }}
                    >
                      <img
                        src={`/media/flags/${item.code.toUpperCase()}.svg`}
                        alt="flag"
                        className="object-cover w-5 h-5 rounded-full"
                      />
                      <span className="ltr:ml-3 rtl:mr-3">
                        {config.text[item.code]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </div>

          <Notification />

          <div className="dropdown">
            <Dropdown
              offset={[0, 10]}
              btnClassName="relative group block"
              button={
                <Elements
                  element="image"
                  value={"user/1.png"}
                  className="h-[2.4rem] w-[2.4rem]"
                />
              }
            >
              <ul className="w-[230px] overflow-hidden !rounded-sm border border-gray-200 !py-0 font-semibold !shadow-lg">
                <li>
                  <div className="flex items-center px-4 py-3 mb-2 border-b border-white-light dark:border-white-light/10">
                    <Elements
                      element="image"
                      value={"user/1.png"}
                      className="h-[1.8rem] w-[1.8rem]"
                    />

                    <div className="w-[10rem] ltr:pl-3 rtl:pr-3">
                      <h4 className="-mt-[1px] w-full truncate text-base tracking-wide">
                        Coding Master
                      </h4>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/account")}
                    className="text-gray-800"
                  >
                    <Icons icon="user" />
                    <span className="px-3 text-[1rem] tracking-wide">
                      Account
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/account?wallet")}
                    className="text-gray-800"
                  >
                    <span className="material-symbols-outlined text-[1.3rem]">
                      account_balance_wallet
                    </span>
                    <span className="px-3 text-[1rem] tracking-wide">
                      Balance
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/account?order")}
                    className="text-gray-800"
                  >
                    <Icons icon="order" />
                    <span className="px-3 text-[1rem] tracking-wide">
                      Bookings
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/account?setting")}
                    className="text-gray-800"
                  >
                    <Icons icon="setting" />
                    <span className="px-3 text-[1rem] tracking-wide">
                      Settings
                    </span>
                  </button>
                </li>
                {/* <li>
                                    <button onClick={() => router.push('/')} className='text-gray-800'>
                                        <Icons icon='message'/>
                                        <span className='px-3 tracking-wide text-[1rem]'>Chatbox</span>
                                    </button>
                                </li> */}
                <li className="mt-2 border-t border-white-light">
                  <button onClick={logout} className="text-danger">
                    <Icons icon="logout" />
                    <span className="!py-1 px-3 text-[1rem] font-semibold tracking-wide ">
                      Logout
                    </span>
                  </button>
                </li>
              </ul>
            </Dropdown>
          </div>

          <div className="items-center justify-end hidden gap-2 ltr:pl-2 rtl:pr-2">
            <button className="cursor-pointer rounded-md border border-primary bg-primary px-7 py-2 text-[.95rem] font-semibold tracking-wide text-white duration-300 hover:border-secondary hover:bg-secondary hover:text-white">
              Login
            </button>
            <button className="hidden cursor-pointer rounded-md border border-primary bg-white px-6 py-2 text-[.95rem] font-semibold tracking-wide text-primary duration-300 hover:border-secondary hover:bg-secondary hover:text-white">
              Register
            </button>
          </div>
        </div>
      </main>
    </header>
  );
}
