"use client";
import { useSelector } from "react-redux";
import Icons from "./icons";

export default function Loader({ className = "" }) {
  const config = useSelector((state) => state.config);

  return (
    <div
      className={`screen_loader animate__animated w-full ${
        className.includes("fixed")
          ? "fixed z-[999] h-screen"
          : className.includes("container")
          ? "absolute z-40 h-screen"
          : "absolute z-40 h-full"
      } ${
        className.includes("bg") ? "bg-panel" : "bg-body"
      } ${className} inset-0 grid place-content-center`}
    >
      <Icons
        icon="loader"
        className={`${
          className.includes("small")
            ? "h-[32px] w-[32px]"
            : className.includes("medium")
            ? "h-[50px] w-[50px]"
            : "h-[65px] w-[65px]"
        }`}
      />
    </div>
  );
}
