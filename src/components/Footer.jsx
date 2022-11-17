import React from "react";

import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company"];
  return (
    <div className="relative px-6 bg-gray-900">
      <div className="container">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 dark:border-trueGray-400 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <a href="/">
                <h2 className="text-gray-100">Logo</h2>
              </a>
            </div>

            <div className="max-w-md mt-4 text-gray-300 dark:text-gray-400">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:ml-0">
            {navigation.map((item, index) => (
              <a key={index} href="/">
                <a className="w-full pr-4 py-2 text-gray-400 rounded-md dark:text-gray-300 hover:text-green-600 focus:outline-none dark:focus:bg-trueGray-400">
                  {item}
                </a>
              </a>
            ))}
          </div>

          <div className="">
            <div className="text-gray-100">Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-300">
              <a
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <BsTwitter />
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <BsFacebook />
              </a>
              <a
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <BsInstagram />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <span className="sr-only">Linkedin</span>
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © Lorem ipsum dolor sit amet
        </div>
        <div className="h-[10px]"></div>
      </div>
    </div>
  );
}
