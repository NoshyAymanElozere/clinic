"use client";
import { useEffect, useState } from "react";

export default function Pagination({ limit, setLimit, total, page, setPage }) {
  const [currentPage, setCurrentPage] = useState(page);
  const [pages, setPages] = useState([]);
  const totalPages = Math.ceil(total / limit);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const set_pages = () => {
    let _ps_ = [];

    if (totalPages <= 5)
      _ps_ = Array.from({ length: totalPages }, (_, i) => i + 1);
    else if (currentPage <= 3) _ps_ = [1, 2, 3, 4, 5];
    else if (currentPage >= totalPages - 2)
      _ps_ = [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    else
      _ps_ = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];

    setPages(_ps_);
    setStart(total ? (currentPage - 1) * limit + 1 : 0);
    setEnd(currentPage * limit > total ? total : currentPage * limit);
  };
  const change_page = (page) => {
    setCurrentPage(page);
    setPage(page);
  };
  useEffect(() => {
    set_pages();
  }, [currentPage, limit, total]);

  return (
    <div className="flex items-center justify-between w-full gap-4 select-none">
      <div className="flex items-center justify-start gap-7">
        <div className="min-w-[5rem] text-[1rem] font-semibold text-gray-950">
          {start} - {end} &nbsp;/&nbsp; {total}
        </div>

        <select
          className="form-select w-[7rem] cursor-pointer"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div
          onClick={() => currentPage > 1 && change_page(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-primary bg-primary-light text-primary duration-200 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-primary hover:text-white"
          }`}
        >
          <span
            className="material-symbols-outlined -ml-[1px]"
            style={{ fontSize: "1.8rem" }}
          >
            chevron_left
          </span>
        </div>

        <div className="flex items-center justify-center gap-2">
          {currentPage > 3 && totalPages > 5 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => change_page(1)}
                className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-primary bg-primary-light text-[.95rem] font-semibold text-primary duration-200 hover:bg-primary hover:text-white"
              >
                1
              </button>
              <span className="material-symbols-outlined text-primary">
                more_horiz
              </span>
            </div>
          )}
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => change_page(page)}
              className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-primary text-[.95rem] font-semibold text-primary duration-200 hover:text-white ${
                currentPage === page
                  ? "bg-primary text-white shadow-lg"
                  : "bg-primary-light hover:bg-primary"
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages - 2 && totalPages > 5 && (
            <div className="flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-primary">
                more_horiz
              </span>
              <button
                onClick={() => change_page(totalPages)}
                className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-primary bg-primary-light text-[.95rem] font-semibold text-primary duration-200 hover:bg-primary hover:text-white"
              >
                {totalPages}
              </button>
            </div>
          )}
        </div>

        <div
          onClick={() =>
            currentPage < totalPages && change_page(currentPage + 1)
          }
          disabled={currentPage >= totalPages}
          className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-primary bg-primary-light text-primary duration-200 ${
            currentPage >= totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-primary hover:text-white"
          }`}
        >
          <span
            className="material-symbols-outlined -mr-[1px]"
            style={{ fontSize: "1.8rem" }}
          >
            chevron_right
          </span>
        </div>
      </div>
    </div>
  );
}
