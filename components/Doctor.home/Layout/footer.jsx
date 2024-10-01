"use client";

export default function Footer() {
  return (
    <footer className="mt-3 bg-main">
      <main className="mx-auto max-w-screen-xl p-5 px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* About Us Section */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-white">Logo</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  Company History
                </a>
              </li>
              <li>
                <p className="mt-4 leading-relaxed text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  id, iure consectetur et error hic!
                </p>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  Employee Handbook
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-white">Our Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  Google Ads
                </a>
              </li>
            </ul>
          </div>

          {/* Stay in Touch Section */}
          <div className="text-center sm:text-left md:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold text-white">Stay in Touch</p>
            <p className="mt-4 leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id,
              iure consectetur et error hic!
            </p>
            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                />
                <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-white sm:text-left">
            &copy; 2022. All rights reserved.
          </p>
          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            {/* Social Media Icons */}
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </footer>
  );
}
