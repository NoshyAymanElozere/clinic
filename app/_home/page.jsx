"use client";
import { storage, print, api } from "@/public/script/main";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Services from "@/components/cards/services";
import Categories from "@/components/cards/categories";
import Title from "@/components/title";

export default function Home() {
  const config = useSelector((state) => state.config);
  const [data, setData] = useState({});

  const _get_ = async () => {
    // const response = api('home');

    const services = [
      {
        id: 1,
        name: "Beuty Center In Algamal",
        image: "service/9.png",
        reviews: 429,
        rate: 5,
        location: "Egypt, Cairo",
        new_price: 60.0,
        old_price: 70.0,
        vendor: {
          id: 1,
          name: "Coding Master",
          image: "user/1.png",
        },
      },
      {
        id: 2,
        name: "Genius loyalty program",
        image: "service/11.png",
        reviews: 540,
        rate: 4,
        location: "Jurdan, Omman",
        new_price: 38.35,
        old_price: 70.0,
        vendor: {
          id: 1,
          name: "Coding Master",
          image: "user/1.png",
        },
      },
      {
        id: 3,
        name: "Destinations we love",
        image: "service/8.png",
        reviews: 129,
        rate: 2,
        location: "Emirates, Dubai",
        new_price: 12.5,
        old_price: 70.0,
        vendor: {
          id: 1,
          name: "Coding Master",
          image: "user/1.png",
        },
      },
      {
        id: 4,
        name: "Oriente Palace Apartments",
        image: "service/4.png",
        reviews: 723,
        rate: 4,
        location: "Saudi arabian, Rayiad",
        new_price: 30.12,
        old_price: 70.0,
        vendor: {
          id: 1,
          name: "Coding Master",
          image: "user/1.png",
        },
      },
      {
        id: 5,
        name: "Aparthotel Stare Miasto",
        image: "service/3.png",
        reviews: 312,
        rate: 3,
        location: "Egypt, Alexandria",
        new_price: 50.0,
        old_price: 70.0,
        vendor: {
          id: 1,
          name: "Coding Master",
          image: "user/1.png",
        },
      },
    ];
    const categories = [
      {
        id: 1,
        name: "Beuty Center",
        image: "service/1.png",
        reviews: 429,
        rate: 5,
        services: 30,
        location: "Egypt, Cairo",
      },
      {
        id: 2,
        name: "Second Category",
        image: "service/2.png",
        reviews: 429,
        rate: 5,
        services: 40,
        location: "Egypt, Cairo",
      },
      {
        id: 3,
        name: "Beuty Center",
        image: "service/3.png",
        reviews: 429,
        rate: 5,
        services: 30,
        location: "Egypt, Cairo",
      },
      {
        id: 4,
        name: "Second Category",
        image: "service/4.png",
        reviews: 429,
        rate: 5,
        services: 40,
        location: "Egypt, Cairo",
      },
      {
        id: 5,
        name: "Beuty Center",
        image: "service/5.png",
        reviews: 429,
        rate: 5,
        services: 30,
        location: "Egypt, Cairo",
      },
      {
        id: 6,
        name: "Beuty Center",
        image: "service/6.png",
        reviews: 429,
        rate: 5,
        services: 30,
        location: "Egypt, Cairo",
      },
      {
        id: 7,
        name: "Second Category",
        image: "service/7.png",
        reviews: 429,
        rate: 5,
        services: 40,
        location: "Egypt, Cairo",
      },
      {
        id: 8,
        name: "Beuty Center",
        image: "service/11.png",
        reviews: 429,
        rate: 5,
        services: 30,
        location: "Egypt, Cairo",
      },
      {
        id: 9,
        name: "Second Category",
        image: "service/4.png",
        reviews: 429,
        rate: 5,
        services: 40,
        location: "Egypt, Cairo",
      },
      {
        id: 10,
        name: "Beuty Center",
        image: "service/3.png",
        reviews: 429,
        rate: 5,
        services: 30,
        location: "Egypt, Cairo",
      },
      {
        id: 11,
        name: "Second Category",
        image: "service/2.png",
        reviews: 429,
        rate: 5,
        services: 40,
        location: "Egypt, Cairo",
      },
      {
        id: 12,
        name: "Beuty Center",
        image: "service/1.png",
        reviews: 429,
        rate: 5,
        services: 30,
        location: "Egypt, Cairo",
      },
    ];
    const reviews = [
      {
        id: 1,
        content:
          "Contributing from all corners of the world, MUty, Contributing from all corners of the world.",
        rate: 5,
        created_at: "2024-09-12",
        client: {
          id: 1,
          name: "Dr. Coding Master",
          image: "user/1.png",
          location: "Egypt, Cairo",
        },
      },
      {
        id: 2,
        content:
          "Contributing from all corners of the world, MUty, Contributing from all corners of the world.",
        rate: 3,
        created_at: "2024-09-12",
        client: {
          id: 1,
          name: "Mohamed Ibrahim",
          image: "user/2.png",
          location: "United stated",
        },
      },
      {
        id: 3,
        content:
          "Contributing from all corners of the world, MUty, Contributing from all corners of the world.",
        rate: 2,
        created_at: "2024-09-12",
        client: {
          id: 1,
          name: "Ahmed Salem",
          image: "user/3.png",
          location: "Saudi arabian",
        },
      },
      {
        id: 1,
        content:
          "Contributing from all corners of the world, MUty, Contributing from all corners of the world.",
        rate: 4,
        created_at: "2024-09-12",
        client: {
          id: 1,
          name: "Dr. Coding Master",
          image: "user/1.png",
          location: "Egypt, Cairo",
        },
      },
      {
        id: 1,
        content:
          "Contributing from all corners of the world, MUty, Contributing from all corners of the world.",
        rate: 4,
        created_at: "2024-09-12",
        client: {
          id: 1,
          name: "Dr. Coding Master",
          image: "user/1.png",
          location: "Egypt, Cairo",
        },
      },
      {
        id: 1,
        content:
          "Contributing from all corners of the world, MUty, Contributing from all corners of the world.",
        rate: 4,
        created_at: "2024-09-12",
        client: {
          id: 1,
          name: "Dr. Coding Master",
          image: "user/1.png",
          location: "Egypt, Cairo",
        },
      },
    ];

    setTimeout(
      () =>
        setData({
          ...data,
          recommeded: services,
          recently: services,
          categories: categories,
          reviews: reviews,
        }),
      5000
    );
  };
  useEffect(() => {
    _get_();
  }, []);

  return (
    <div className="w-full space-y-12">
      <Hero />

      <Features
        style={2}
        title="We Are Always Ready to Help You & Your Family ?"
      />

      <main className="space-y-12">
        <Categories
          data={data.categories}
          slider
          title="We Have Specialist Doctors To Solve Your Problems "
        />

        <Services data={data.recommeded} slider title="Top Services" />
      </main>

      <Title
        style={2}
        head="Keep services flexible"
        text="Use Reserve Now Pay Later to secure the activities you don't want to miss it."
      />

      <Features
        style={3}
        title="Free cancellation"
        text="You'll receive a full refund at least 24 hours"
      />

      <main className="space-y-8">
        <Services
          data={data.recommeded}
          slider
          title="Based on your location"
        />

        <Services data={data.recommeded} slider title="Recently services" />
      </main>

      <Features style={4} />
    </div>
  );
}
