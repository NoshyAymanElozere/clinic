"use client";

export default function Stars({ count, className }) {
  return (
    <div
      className={`stars-div flex items-center justify-start gap-1 text-[#f2af32] ${
        className || "text-[1.05rem]"
      }`}
    >
      <i
        className={
          count < 1
            ? count <= 0
              ? "fa fa-star-o"
              : "fa fa-star-half-full"
            : "fa fa-star"
        }
      ></i>
      <i
        className={
          count < 2
            ? count <= 1
              ? "fa fa-star-o"
              : "fa fa-star-half-full"
            : "fa fa-star"
        }
      ></i>
      <i
        className={
          count < 3
            ? count <= 2
              ? "fa fa-star-o"
              : "fa fa-star-half-full"
            : "fa fa-star"
        }
      ></i>
      <i
        className={
          count < 4
            ? count <= 3
              ? "fa fa-star-o"
              : "fa fa-star-half-full"
            : "fa fa-star"
        }
      ></i>
      <i
        className={
          count < 5
            ? count <= 4
              ? "fa fa-star-o"
              : "fa fa-star-half-full"
            : "fa fa-star"
        }
      ></i>
    </div>
  );
}
