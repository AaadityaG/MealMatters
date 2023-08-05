import React from "react";

export default function Footer() {
  return (
    <footer className="text-center dark:bg-blue-500 lg:text-left mt-10 w-full">
      <div className="container p-6 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
          <div className="mb-6 justify-self-start">
            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Mission
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Partners
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-6 justify-self-end">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Contact Us
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    contact@mealmatters.com
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    +91 123456789
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a className="text-neutral-800 dark:text-neutral-400" href="#">
          MealMatters
        </a>
      </div>
    </footer>
  );
}
