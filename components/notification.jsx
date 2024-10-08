"use client";
import { sound, fix_date, print } from "@/public/script/main";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Echo from "@/utils/echo";
import Dropdown from "./menu";
import Elements from "./elements";

export default function Notification() {
  const config = useSelector((state) => state.config);
  const router = useRouter();
  const [channel, setChannel] = useState(null);
  const [message, setMessage] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreaden, setUnreaden] = useState(0);

  const _get_ = () => {
    const data = [];
    const notifies = JSON.parse(localStorage.getItem("notifications") || "[]");
    notifies.forEach((_) => data.push(_create_(_.message)));
    setUnreaden(notifies.filter((_) => !_.readen).length + 5);
    setNotifications(data);
  };
  const _set_ = (notification) => {
    setNotifications([{ ...notification }, ...notifications]);
    setUnreaden((e) => e + 1);
    sound("notify", 1);
    setTimeout(() =>
      document.querySelector(".notification-svg")?.classList.add("active")
    );
    setTimeout(
      () =>
        document.querySelector(".notification-svg")?.classList.remove("active"),
      1000
    );

    let notifies = JSON.parse(localStorage.getItem("notifications") || "[]");
    notifies.unshift({ ...message, readen: false });
    localStorage.setItem("notifications", JSON.stringify(notifies));
  };
  const _create_ = (message) => {
    if (!message.id) return null;
    let user_tables = [
      "order",
      "review",
      "coupon",
      "comment",
      "payment",
      "deposit",
      "withdraw",
      "reply",
      "setting",
      "account",
      "contact",
    ];
    let item_tables = ["category", "product", "blog"];

    const type = item_tables.includes(message.table) ? "md" : "";
    const image = user_tables.includes(message.table)
      ? message.user?.image
      : message.item?.image;
    const url =
      message.process !== "delete" && message.item
        ? `/${message.table}?edit=${message.item.id}`
        : null;
    const title = `${config.text[message.process]} ${
      config.text[message.table] || ""
    } by ${message.user?.name} - ${
      message.item?.name || message.item?.title || message.item?.content || ""
    }`;
    const date = fix_date(message.created_at);

    if (message.table === "category" && !config.user.allow_categories)
      return null;
    if (message.table === "product" && !config.user.allow_products) return null;
    if (message.table === "coupon" && !config.user.allow_coupons) return null;
    if (message.table === "order" && !config.user.allow_orders) return null;
    if (message.table === "review" && !config.user.allow_reviews) return null;
    if (message.table === "blog" && !config.user.allow_blogs) return null;
    if (message.table === "comment" && !config.user.allow_comments) return null;
    if (message.table === "reply" && !config.user.allow_replies) return null;
    if (message.table === "contact" && !config.user.allow_contacts) return null;
    if (message.table === "vendor" && !config.user.allow_vendors) return null;
    if (message.table === "client" && !config.user.allow_clients) return null;
    if (message.table === "admin" && !config.user.super) return null;
    if (message.table === "setting" && !config.user.super) return null;
    if (message.table === "account" && !config.user.super) return null;
    if (message.table === "login" && !config.user.super) return null;
    if (message.table === "register" && !config.user.super) return null;
    if (message.table === "payment" && !config.user.super) return null;

    const notification = {
      id: message.id,
      type: type,
      image: image,
      url: url,
      title: title,
      date: date,
      table: message.table,
    };
    return notification;
  };
  const _remove_ = (id) => {
    setNotifications(notifications.filter((_) => _.id !== id));
    let notifies = JSON.parse(localStorage.getItem("notifications") || "[]");
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifies.filter((_) => _.message?.id !== id))
    );
  };
  const _active_ = () => {
    setUnreaden(0);
    let notifies = JSON.parse(localStorage.getItem("notifications") || "[]");
    notifies = notifies.map((_) => {
      _.readen = true;
      return _;
    });
    localStorage.setItem("notifications", JSON.stringify(notifies));
  };
  useEffect(() => {
    if (!message || message.sender === config.user.id) return;
    let notification = _create_(message.message);
    if (notification) _set_(notification);
  }, [message]);
  useEffect(() => {
    if (!channel) return;
    channel.listen(".notify.box", setMessage);
  }, [channel]);
  useEffect(() => {
    // setChannel(Echo.private('notification'));
    _get_();
  }, []);

  return (
    <div className="dropdown" onClick={_active_}>
      <Dropdown
        offset={[0, 10]}
        btnClassName="relative block p-2 rounded-full bg-primary-light border border-gray-200 hover:border-primary hover:text-primary"
        button={
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
              />
              <path
                d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 6V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {unreaden ? (
              <span className="notification-svg absolute -top-[.2rem] flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full bg-danger ltr:right-0 rtl:left-0">
                <span className="mt-[1px] text-[.73rem] text-white">
                  {unreaden}
                </span>
              </span>
            ) : (
              <span className="absolute top-0 flex w-3 h-3 ltr:right-0 rtl:left-0">
                <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
              </span>
            )}
          </span>
        }
      >
        <ul className="w-[300px] overflow-hidden !rounded-sm border border-gray-200 !py-0 text-xs text-dark !shadow-lg dark:text-white-dark sm:w-[335px]">
          <li
            className="mb-2 bg-primary-light/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-t-md border-b border-gray-200 px-5 py-4.5 hover:!bg-transparent dark:border-dark">
              {/* <div className="absolute inset-0 h-full w-full bg-[url(/media/layout/menu-heade.jpg)] bg-cover bg-center bg-no-repeat"></div> */}

              <h4 className="relative z-10 text-[1rem] font-semibold tracking-wide opacity-[.9]">
                {config.text.notifications}
              </h4>
            </div>
          </li>

          {notifications.length ? (
            <li
              onClick={(e) => e.stopPropagation()}
              className="h-[25rem] overflow-y-auto overflow-x-hidden"
            >
              {notifications.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start px-5 py-3 pointer hover:bg-primary/10"
                  onClick={() => item.url && router.push(item.url)}
                >
                  <Elements
                    element="image"
                    value={item.image}
                    type={item.type}
                    className="mt-[2px] h-8 w-8"
                  />

                  <span className="px-3 dark:text-gray-500">
                    <div className="text-sm font-semibold line-clamp-2 dark:text-white-light/90">
                      {item.title}
                    </div>
                    <div className="line-clamp-2">{item.details}</div>
                  </span>

                  <span className="px-1 font-semibold whitespace-pre rounded bg-white-dark/20 text-dark/60 dark:text-white-dark ltr:ml-auto ltr:mr-2 rtl:ml-2 rtl:mr-auto">
                    {item.date}
                  </span>

                  <button
                    type="button"
                    className="text-neutral-300 hover:text-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      _remove_(item.id);
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.7"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </li>
          ) : (
            <li className="h-[25rem]" onClick={(e) => e.stopPropagation()}>
              <div className="default !grid h-full place-content-center text-[.9rem] hover:!bg-transparent">
                <div className="mx-auto mb-4 text-white rounded-full ring-4 ring-primary/30">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="#a9abb6"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rounded-full feather feather-info bg-primary"
                  >
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>

                {config.text.no_data}
              </div>
            </li>
          )}

          <li className="mt-2 text-center border-t border-white-light dark:border-white/10">
            <button
              type="button"
              className="group !h-[48px] justify-center !py-4 font-semibold text-primary dark:text-gray-400"
            >
              <span className="text-[.85rem] tracking-wide ltr:mr-1 rtl:ml-1">
                {config.text.view_all_activities}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4 transition duration-300 group-hover:translate-x-2 ltr:ml-1 rtl:mr-1 rtl:rotate-[180deg] rtl:group-hover:translate-x-[-10px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
