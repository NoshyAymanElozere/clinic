"use client";
import { api, date, print } from "@/public/script/main";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Dropdown from "@/components/menu";
import Elements from "@/components/elements";
import Calendar from "@/components/calendar";
import Select from "@/components/select";

export default function Form({
  filters = {},
  setFilters,
  className,
  scrollTop,
}) {
  const config = useSelector((state) => state.config);
  const routers = useRouter();
  const [categories, setCategories] = useState([]);
  const [vendors, setVendors] = useState([]);

  const _get_ = async () => {
    // const response = await api('search/form');
    const response = {
      status: true,
      categories: [
        {
          id: 1,
          name: "Pro Tech Programming",
          image: "service/1.png",
          rate: 5,
          services: 23,
        },
        {
          id: 2,
          name: "Mohamed Ibrahim",
          image: "service/2.png",
          rate: 4,
          services: 19,
        },
        {
          id: 3,
          name: "Islam Saaid",
          image: "service/3.png",
          rate: 5,
          services: 20,
        },
        {
          id: 4,
          name: "Yossef Yasieen",
          image: "service/4.png",
          rate: 2,
          services: 14,
        },
        {
          id: 5,
          name: "Programmer Prof",
          image: "service/5.png",
          rate: 1,
          services: 24,
        },
        {
          id: 6,
          name: "Enouph Money",
          image: "service/6.png",
          rate: 5,
          services: 50,
        },
        {
          id: 7,
          name: "Thourting buyer",
          image: "service/7.png",
          rate: 4,
          services: 33,
        },
        {
          id: 8,
          name: "Asmaas Mohamed",
          image: "service/8.png",
          rate: 3,
          services: 10,
        },
        {
          id: 9,
          name: "Esraa Salem Ahmed",
          image: "service/4.png",
          rate: 5,
          services: 13,
        },
        {
          id: 10,
          name: "Abdulrahman yasser",
          image: "service/5.png",
          rate: 3,
          services: 28,
        },
      ],
      vendors: [
        {
          id: 1,
          name: "Dr. Coding Master",
          image: "user/1.png",
          rate: 5,
          reviews: 2399,
        },
        {
          id: 2,
          name: "Mohamed Ibrahim",
          image: "user/2.png",
          rate: 4,
          reviews: 129,
        },
        {
          id: 3,
          name: "Islam Saaid",
          image: "user/3.png",
          rate: 5,
          reviews: 2180,
        },
        {
          id: 4,
          name: "Yossef Yasieen",
          image: "user/4.png",
          rate: 2,
          reviews: 144,
        },
        {
          id: 5,
          name: "Programmer Prof",
          image: "user/5.png",
          rate: 1,
          reviews: 284,
        },
        {
          id: 6,
          name: "Enouph Money",
          image: "user/1.png",
          rate: 5,
          reviews: 560,
        },
        {
          id: 7,
          name: "Thourting buyer",
          image: "user/2.png",
          rate: 4,
          reviews: 139,
        },
        {
          id: 8,
          name: "Asmaas Mohamed",
          image: "user/3.png",
          rate: 3,
          reviews: 120,
        },
        {
          id: 9,
          name: "Esraa Salem Ahmed",
          image: "user/4.png",
          rate: 5,
          reviews: 1293,
        },
        {
          id: 10,
          name: "Abdulrahman yasser",
          image: "user/5.png",
          rate: 3,
          reviews: 238,
        },
      ],
    };

    setCategories(response.categories || []);
    setVendors(response.vendors || []);
  };
  const _search_ = () => {
    routers.push(
      `/search/?query=Many services near you&category=${
        filters.category || ""
      }&vendor=${filters.vendor || ""}&date=${filters.date || ""}`
    );
  };
  useEffect(() => {
    _get_();
  }, []);

  return (
    <div
      className={`panel m-auto w-full cursor-default !rounded-md p-4 ${className}`}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div
          onClick={() => window.scrollTo(0, scrollTop || 0)}
          className="grid w-full flex-1 grid-cols-3 gap-4"
        >
          {/* <div className="w-full dropdown">

                        <Dropdown placement='reverse' btnClassName='w-full relative group block'
                            button={
                                <div className='relative w-full'>
                                    <input type="search" value={filters.query || ''} onChange={(e) => setFilters({...filters, query: e.target.value})} className='w-full h-full px-5 py-[1.2rem] text-[1rem] rounded-md font-semibold text-gray-950 tracking-wide border border-gray-300 focus:border-primary' placeholder='Search ...'/>
                                </div>
                            }
                            >

                            <div></div>

                        </Dropdown>

                    </div> */}

          <div className="dropdown w-full">
            <Dropdown
              placement="reverse"
              btnClassName="w-full relative group block"
              button={
                <div className="relative flex w-full items-center gap-3.5 rounded-md border border-gray-300 px-4 py-1.5 hover:bg-primary-light/50">
                  <div className="flex items-center justify-center text-primary">
                    {filters.category ? (
                      <Elements
                        element="image"
                        value={
                          categories.find((_) => _.id == filters.category)
                            ?.image
                        }
                        type="md"
                        className="flex h-9 w-9 items-center justify-center"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-[1.7rem]">
                        dataset
                      </span>
                    )}
                  </div>
                  <div className="w-full font-semibold text-gray-900 ltr:text-left rtl:text-right">
                    <span className="select-none text-[.85rem] tracking-wide opacity-[.9]">
                      Departments
                    </span>
                    <p className="line-clamp-1 text-[1rem] tracking-wide">
                      {categories.find((_) => _.id == filters.category)?.name ||
                        "Select Category"}
                    </p>
                  </div>
                  {filters.category ? (
                    <div
                      onClick={(e) => {
                        setFilters({ ...filters, category: 0 });
                        e.stopPropagation();
                      }}
                      className="absolute right-4 top-[50%] flex h-[2.1rem] w-[2.1rem] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white-light/30 hover:bg-white-light"
                    >
                      <span className="material-symbols-outlined text-[1.1rem] text-gray-600">
                        close
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              }
            >
              <Select
                data={categories}
                onChange={(e) => setFilters({ ...filters, category: e.id })}
                title="Select department"
                className="min-w-[27rem] shadow-lg"
              />
            </Dropdown>
          </div>

          <div className="dropdown w-full">
            <Dropdown
              placement="reverse"
              btnClassName="w-full relative group block"
              button={
                <div className="relative flex w-full items-center gap-3.5 rounded-md border border-gray-300 px-4 py-1.5 hover:bg-primary-light/50">
                  <div className="flex items-center justify-center text-primary">
                    {filters.vendor ? (
                      <Elements
                        element="image"
                        value={
                          vendors.find((_) => _.id == filters.vendor)?.image
                        }
                        className="flex h-9 w-9 items-center justify-center"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-[1.7rem]">
                        group
                      </span>
                    )}
                  </div>
                  <div className="w-full font-semibold text-gray-900 ltr:text-left rtl:text-right">
                    <span className="select-none text-[.85rem] tracking-wide opacity-[.9]">
                      Doctor
                    </span>
                    <p className="line-clamp-1 text-[1rem] tracking-wide">
                      {vendors.find((_) => _.id == filters.vendor)?.name ||
                        "Select doctor"}
                    </p>
                  </div>
                  {filters.vendor ? (
                    <div
                      onClick={(e) => {
                        setFilters({ ...filters, vendor: 0 });
                        e.stopPropagation();
                      }}
                      className="absolute right-4 top-[50%] flex h-[2.1rem] w-[2.1rem] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white-light/30 hover:bg-white-light"
                    >
                      <span className="material-symbols-outlined text-[1.1rem] text-gray-600">
                        close
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              }
            >
              <Select
                data={vendors}
                onChange={(e) => setFilters({ ...filters, vendor: e.id })}
                type="user"
                title="Select Vendor"
                className="min-w-[27rem] shadow-lg"
              />
            </Dropdown>
          </div>

          <div className="dropdown w-full">
            <Dropdown
              placement="reverse"
              btnClassName="w-full relative group block"
              button={
                <div className="relative flex w-full items-center justify-start gap-3.5 rounded-md border border-gray-300 px-4 py-1.5 hover:bg-primary-light/50">
                  <div className="flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[1.6rem]">
                      calendar_month
                    </span>
                  </div>
                  <div className="w-full font-semibold text-gray-900 ltr:text-left rtl:text-right">
                    <span className="select-none text-[.85rem] tracking-wide opacity-[.9]">
                      Check In
                    </span>
                    {filters.date ? (
                      <p className="line-clamp-1 text-[1rem] tracking-wide">
                        {date("year", filters.date)},{" "}
                        {date("month_name", filters.date)}{" "}
                        {date("day", filters.date)}
                      </p>
                    ) : (
                      <p className="line-clamp-1 text-[1rem] tracking-wide">
                        Select Date
                      </p>
                    )}
                  </div>
                  {filters.date && (
                    <div
                      onClick={(e) => {
                        setFilters({ ...filters, date: "" });
                        e.stopPropagation();
                      }}
                      className="absolute right-4 top-[50%] flex h-[2.1rem] w-[2.1rem] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white-light/30 hover:bg-white-light"
                    >
                      <span className="material-symbols-outlined text-[1.1rem] text-gray-600">
                        close
                      </span>
                    </div>
                  )}
                </div>
              }
            >
              <Calendar
                data={filters.date ? new Date(filters.date) : ""}
                onChange={(e) =>
                  setFilters({ ...filters, date: date("date", e) })
                }
                className="min-w-[28rem] shadow-lg"
              />
            </Dropdown>
          </div>
        </div>

        <div
          onClick={_search_}
          className="flex h-[3.2rem] w-[3.2rem] cursor-pointer items-center justify-center rounded-full bg-[#ef0f0f] text-white hover:opacity-[.8]"
        >
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>
    </div>
  );
}
