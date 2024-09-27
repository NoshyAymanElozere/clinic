"use client";
import { useSelector } from "react-redux";
import Home from "./_home/page.jsx";

export default function Page() {
  const config = useSelector((state) => state.config);

  return <Home />;
}
