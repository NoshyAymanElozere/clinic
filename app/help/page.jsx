"use client";

import { Hearo } from "@/components/Doctor.home/component/hearoSeaction";
import Header from "@/components/Doctor.home/Layout/header";
import { useSelector } from "react-redux";

import Services from "@/components/Doctor.home/component/Services";
import Testimonials from "@/components/Doctor.home/component/testimonials";
import DrStatus from "@/components/Doctor.home/component/DrStatus";
import AvilableTime from "@/components/Doctor.home/component/AvilableTime";
import Offers from "@/components/Doctor.home/component/offers";
import ServicesImage from "@/components/Doctor.home/component/ServicesImage";
import Footer from "@/components/Doctor.home/Layout/footer";

export default function Help() {
  const config = useSelector((state) => state.config);
  return (
    <div className="my-8 w-full">
      <main>
        <Header />
        <Hearo imgSrc="/media/service/background.jpg" />
        <AvilableTime />
        <Services title="Doctor Services" />
        <Offers
          points={"5"}
          description={"    Description about what should he do to earn points"}
        />
        <Testimonials
          title="What People Say"
          info="Welcome to our Website name and what we do say some discriptions abouth this service or what you need. "
        />
        <ServicesImage title={"Pictures of our service"} />
        <Footer />
      </main>
    </div>
  );
}
