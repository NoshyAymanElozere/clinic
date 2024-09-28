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
        name: "heba yousef ",
        image: "Doctors/doctor-detail.jpg",
        reviews: 429,
        rate: 5,
        location: "Dermatology (Skin)",
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
        name: "Donia Akram ",
        image: "Doctors/5.jpg",
        reviews: 540,
        rate: 4,
        location: "Ear, Nose and Throa",
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
        name: "Nesma Ahmed ",
        image: "Doctors/6.jpg",
        reviews: 129,
        rate: 2,
        location: "Ophthalmology (Eyes)",
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
        name: "Yossra Mohamed",
        image: "Doctors/8.jpg",
        reviews: 723,
        rate: 4,
        location: "Saudi arabian, Rayiad",
        new_price: 30.12,
        old_price: 70.0,
        vendor: {
          id: 1,
          name: "Chest and Respiratory",
          image: "user/1.png",
        },
      },
      {
        id: 5,
        name: "Mona Ahmed",
        image: "Doctors/9.jpg",
        reviews: 312,
        rate: 3,
        location: "Egypt, Alexandria",
        new_price: 50.0,
        old_price: 70.0,
        vendor: {
          id: 1,
          name: "Chest and Respiratory",
          image: "user/1.png",
        },
      },
    ];
    const categories = [
      {
        id: 1,
        name: "nabil moahmed",
        image: "Doctors/blog1.jpg",
        reviews: 429,
        rate: 5,
        services: "General Treatment",
        location: "Egypt, Cairo",
      },
      {
        id: 2,
        name: "Yousef ALsyed",
        image: "Doctors/blog2.jpg",
        reviews: 429,
        rate: 5,
        services: "Teeth Whitening",
        location: "Egypt, Cairo",
      },
      {
        id: 3,
        name: "mohamed khaled",
        image: "Doctors/blog3.jpg",
        reviews: 429,
        rate: 5,
        services: "Heart Surgery",
        location: "Egypt, Cairo",
      },
      {
        id: 4,
        name: "Gergo naser",
        image: "Doctors/doc1.png",
        reviews: 429,
        rate: 5,
        services: "Ear Treatment",
        location: "Egypt, Cairo",
      },
      {
        id: 5,
        name: "Abdelrahman abdelaziz",
        image: "Doctors/doc2.jpg",
        reviews: 429,
        rate: 5,
        services: "Vision Problems",
        location: "Egypt, Cairo",
      },
      {
        id: 6,
        name: "Ahmed khaled ",
        image: "Doctors/doc2.png",
        reviews: 429,
        rate: 5,
        services: "Blood Transfusion",
        location: "Egypt, Cairo",
      },
      {
        id: 7,
        name: "noshy Ayman",
        image: "Doctors/doc3.jpg",
        reviews: 429,
        rate: 5,
        services: " Dental Care",
        location: "Egypt, Cairo",
      },
      {
        id: 8,
        name: "omnaia ayman",
        image: "Doctors/doc5.jpg",

        reviews: 429,
        rate: 5,
        services: " teeth Whitening",
        location: "Egypt, Cairo",
      },
      {
        id: 9,
        name: "yousef joon",
        image: "Doctors/doc4.jpg",
        reviews: 429,
        rate: 5,
        services: "Teeth Whitening",
        location: "Egypt, Cairo",
      },
      {
        id: 10,
        name: "meenem ghonim",
        image: "Doctors/doc1.png",
        reviews: 429,
        rate: 5,
        services: "General Treatment",
        location: "Egypt, Cairo",
      },
      {
        id: 11,
        name: "heba kotp",
        image: "Doctors/doctor-detail.jpg",
        reviews: 429,
        rate: 5,
        services: "teeth Whitening",
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

        <Services data={data.recommeded} slider title="Top Related Doctors" />
      </main>

      <Title
        style={2}
        head="Do you need Emergency Medical Care? "
        text="you can contanct with us any time"
      />

      <Features
        style={3}
        title="Symptoms and solutions"
        text="You'll receive a full refund at least 24 hours"
        className="text-main"
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
