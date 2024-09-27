"use client";
import { active_link, get_cookie, print } from "@/public/script/main";
import { actions } from "@/public/script/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { English } from "@/public/langs/en";
import { Arabic } from "@/public/langs/ar";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Chat from "./chat";
import Loader from "./loader";

export default function Layout({ children }) {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [animation, setAnimation] = useState(false);
  const [loader, setLoader] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAnimation(false);
    setTimeout(() => setAnimation(config.animation));
    setTimeout(() => setLoader(false), 1000);
    setTimeout(() => active_link(pathname), 200);
    window.scrollTo(0, 0);
  }, [pathname, config.animation]);
  useEffect(() => {
    let current_text = English;
    const lang = localStorage.getItem("lang");
    dispatch(actions.toggle_dir(lang === "ar" ? "rtl" : "ltr"));

    if (lang === "ar") current_text = Arabic;
    if (lang === "en") current_text = English;
    dispatch(actions.toggle_text(current_text));
  }, [dispatch, config.lang, pathname]);
  useEffect(() => {
    dispatch(actions.toggle_theme(localStorage.getItem("theme")));
    dispatch(actions.toggle_menu(localStorage.getItem("menu")));
    dispatch(actions.toggle_layout(localStorage.getItem("layout")));
    dispatch(actions.toggle_dir(localStorage.getItem("dir")));
    dispatch(actions.toggle_animation(localStorage.getItem("animation")));
    dispatch(actions.toggle_nav(localStorage.getItem("nav")));
    dispatch(actions.toggle_lang(localStorage.getItem("lang")));
    dispatch(actions.toggle_user(get_cookie("user")));
    dispatch(actions.toggle_side());
    setAnimation(config.animation);
  }, [dispatch]);

  return (
    <div
      className={`${config.side && "toggle-sidebar"} ${config.menu} ${
        config.dir
      } relative`}
    >
      <Loader
        className={`fixed ${
          loader ? "scale-1 opacity-1 rounded-none" : "scale-0 opacity-0"
        } transition-all duration-500`}
      />

      <Chat />

      <Sidebar />

      <Header />

      <div className="relative">{children}</div>

      <Footer />
    </div>
  );
}
