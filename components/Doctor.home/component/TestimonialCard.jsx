"use client";

export default function TestimonialCard({ opinion }) {
  return (
    <div>
      <blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt={`Image of ${opinion.name}`}
            src={opinion.image}
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p className="mt-0.5 text-lg font-bold text-main">{opinion.name}</p>
            <span className="text-[14px] text-maintitle">{opinion.type}</span>
          </div>
        </div>
        <p className="mt-4 rounded-sm bg-primary-dark-light p-3 font-medium text-black">
          {opinion.description}
        </p>
      </blockquote>
    </div>
  );
}
