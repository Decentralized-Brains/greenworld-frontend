import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const NavLinks = [
    {
      id: 1,
      text: "Home",
      url: "/#",
    },
    {
      id: 2,
      text: "About",
      url: "/#",
    },
    {
      id: 3,
      text: "Partner",
      url: "/#",
    },
    {
      id: 4,
      text: "Blog",
      url: "/#",
    },
    {
      id: 5,
      text: "Team",
      url: "/#",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[60px] duration-300 z-[100] shadow-lg bg-[#fafeff] backdrop-blur-xl"
          : "fixed w-full h-[90px] duration-300 z-[100]"
      }
    >
      <div className="container mx-auto flex w-full h-full justify-between items-center px-2 2xl:px-16">
        <a
          href="/#"
          className="hidden md:flex items-center justify-center gap-3 -mt-2"
        >
          {/* <img src={logo} className="w-[150px] " alt="" /> */}
        </a>
        <div className="flex items-center justify-center">
          <ul className="hidden md:flex md:gap-x-3 lg:gap-x-12 mt-5">
            {NavLinks.map((data) => (
              <a href={data.url} key={data.id}>
                <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b border-gray-700 hover:text-green-600 duration-300">
                  {data.text}
                </li>
              </a>
            ))}
          </ul>
          <button className="mr-4 md:mr-0 md:ml-12">Login</button>
          <div
            onClick={handleNav}
            className="md:hidden text-black dark:text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-[#f0f7f8] left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a
                href="/#"
                className="flex items-center justify-center gap-3 -mt-2"
              >
                {/* <img src={logo} className="w-[45px] " alt="" /> */}
                <span className="font-bold text-2xl">Logo</span>
              </a>
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <br />
            <hr />
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul>
              {NavLinks.map((data) => (
                <a href={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b hover:text-cyan-500 duration-300">
                    {data.text}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
