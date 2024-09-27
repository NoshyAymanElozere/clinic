import { api } from "@/public/script/main";
import { redirect } from "next/navigation";
import Index from "./components/index";

export default function Service({ id }) {
  // const response = api(`service/${id}`);

  const response = {
    status: true,
    item: {
      id: 1,
      name: "Maintenance create a one product dropshipping",
      new_price: "200",
      old_price: "250",
      duration: "3 Days",
      views: 1063,
      rate: 4,
      reviews: 358,
      orders: 32,
      pending_orders: 10,
      country: "EG",
      city: "Cairo",
      street: "Talat Harb 20th eltareer",
      language: "en",
      image: "service/11.png",
      includes: [],
      phone: "9660523728",
      whatsapp: "9660523728",
      created_at: "2024-05-02 05:19:20",
      available: true,
      details: `
                <p>
                    <p>I provide you with the following settings and services :-</p>
                    <h1>Please contact first</h1>
                    <p>@ Authenticate the store with your personal data.</p>
                    <p>@ Install the theme, create and customize the home page, add store features.</p>
                    <p>@ Add 20 products to your store [product images and data must be available].</p>
                    <p>@Adjusting payment method settings and setting payment terms upon receipt.</p>
                    <p>@ Link your store to a paid domain with the name you choose.</p>
                    <p>@ Add technical support data and social media accounts.</p>
                    <p>@ Adjust shipping settings and link your store to shipping companies.</p>
                    <p>@ Creating discount coupons, offers and promotional advertisements.</p>
                    <br />
                    <h1>What you will get :-</h1>
                    <ul>
                        <li>A stylish logo with main colors that reflects .</li>
                        <li>personality and attracts attention.</li>
                        <li>Colors that reflects your brand's personality and attracts.</li>
                    </ul>
                </p>
            `,
      images: [
        ["image", "service/11.png"],
        ["image", "service/15.png"],
        ["image", "service/6.png"],
        ["image", "service/4.png"],
        ["image", "service/5.png"],
        ["image", "service/3.png"],
        ["image", "service/2.png"],
        ["image", "service/1.png"],
      ],
      category: {
        id: 1,
        name: "Web Developement",
        image: "service/5.png",
        created_at: "2024-05-01 13:09:32",
        description:
          "Absolutely impressed with Lucas! Finding him on Fiverr was a stroke of luck",
        count: 6,
      },
      vendor: {
        id: 1,
        name: "Dr. Coding Master",
        image: "user/1.png",
      },
    },
  };
  
  if (!response.item) return redirect("/");

  return <Index data={response.item} />;
}
