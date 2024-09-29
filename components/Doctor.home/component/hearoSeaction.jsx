"use client";

import DrStatus from "./DrStatus";

export const Hearo = ({ imgSrc, altText = "Hero background image" }) => (
  <main className="relative mb-[200px]">
    <section className=" h-screen w-full overflow-hidden">
      <img src={imgSrc} alt={altText} className="h-full w-full  " />
    </section>
    <main className="absolute bottom-[-150px] w-full">
      <DrStatus name={"MOhamed"} department={"teeth"} />
    </main>
  </main>
);
