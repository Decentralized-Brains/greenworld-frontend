import COIN from "../img/others/coin-g.png";
import roundimg1 from "../img/others/r1.png";
import roundimg3 from "../img/others/r3.png";
import midimg from "../img/others/image12.png";
import BG from "../img/others/tree-bg.png";
import "./token.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Token = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <section id="hero">
        <div className="bg-gradient-to-b  from-cyan-500 to-blue-800 h-[460px] w-full bg-cover bg-center mix-blend-overlay relative">
          <div className="tokenbg "></div>
          <div className="flex md:hidden">
            <img
              src={BG}
              className="w-full h-[460px] object-cover absolute mix-blend-overlay"
              alt="background"
            />{" "}
          </div>

          <div className="flex flex-col min-h-[460px] justify-center items-center gap-y-6 md:gap-y-10">
            <h1 className="text-[50px] mb-7 text-white font-poppins">Token</h1>
          </div>
        </div>{" "}
      </section>
      <section id="about" className="mx-3 md:mx-0">
        <div className="flex flex-col md:flex-row md:justify-around gap-4 pt-10">
          <div className="mx-4 sm:mt-0 flex flex-col md:items-start justify-center items-center">
            {/* <div className="flex flex-col md:justify-start md:items-start justify-center items-center text-4xl md:text-6xl gap-y-4 mt-0 md:mt-10">
              <span className="font-medium">Lorem Ipsum</span>
              <span className="font-medium text-[#0DCB6B]">Dolor Sit</span>
            </div> */}
            <div className="max-w-[300px] pt-8 text-xl font-normal">
              <p>
                Our innovative two-token structure makes offsetting and
                investing in the voluntary carbon market simple and accessible
                for all.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 pt-8">
              <button className="flex justify-center  text-white text-base md:text-xl font-normal rounded-3xl py-2 w-[180px] bg-gradient-to-r from-[#20972A] to-[#0FC766]">
                Whitepaper
              </button>
              <button className="flex justify-center text-white text-base md:text-xl font-normal rounded-3xl py-2 w-[180px] bg-gradient-to-r from-[#40559E] to-[#0FC7BC]">
                FAQ
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-2 pt-10 md:pt-0">
            <div className="grid  w-full place-content-center">
              <div
                className="flex h-[300px] md:h-[400px] min-w-[300px] md:min-w-[150px] md:max-w-[200px] 
                flex-col justify-evenly  rounded-xl md:rounded-full m-2 p-4 shadow-lg 
                items-center border-[1px] "
              >
                <img
                  src={roundimg1}
                  alt="..."
                  className="w-[200px] align-middle border-none"
                />

                <p className="text-center text-base mb-6">
                  The Block token allows investors to gain exposure to the
                  voluntary carbon credit market. This is the first time
                  investors can easily access this market, making the Block
                  token valuable and innovative.
                </p>
              </div>
            </div>

            <div className="grid  w-full place-content-center">
              <div
                className="flex h-[300px] md:h-[450px] min-w-[300px] md:min-w-[150px] md:max-w-[200px] 
                flex-col justify-evenly  rounded-xl md:rounded-full  m-2 p-4 shadow-lg 
                items-center border-[1px] "
              >
                <img
                  src={roundimg3}
                  alt="..."
                  className=" w-[200px] align-middle border-none"
                />

                <p className="text-center text-base mb-6">
                  The CO2 token is a digital asset backed by carbon credits. It
                  allows businesses to of offset their emissions in a
                  transparent and accessible way. When the token is bought, it
                  is burned and the underlying carbon credits are transferred to
                  the purchaser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="middle" className="my-20 h-full max-w-[1200px] mx-auto">
        <hr className="max-w-[1200px] mx-auto" />
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-y-5 md:gap-y-0 py-16 md:py-24">
          <div className="max-w-[300px] md:max-w-[400px] text-xl font-normal flex border border-gray-200 shadow-md rounded-2xl">
            <p className="m-6">
              With every offset, a fee will go into the block token giving
              individuals exposure to the growing market through the block token
            </p>
          </div>
          <img src={midimg} alt="" className="max-w-[300px] md:max-w-[500px]" />
        </div>
        <hr className="max-w-[1200px] mx-auto" />
      </section>

      <section id="last" className="mx-3 md:mx-0 my-10">
        <div className="flex justify-center items-center font-medium ">
          <h1 className=" text-4xl md:text-5xl text-center">
            The Market Is
            <span className="text-[#0DCB6B] pl-2">Growing Quickly</span>
          </h1>
        </div>
        <div className="flex justify-center text-xl font-normal pt-8">
          <p className="max-w-[1000px] text-center">
            More and more companies offset their emissions through voluntary
            varbon credits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-2 pt-16 place-items-center">
          <div>
            <div className="">
              <img src={COIN} alt="" srcSet="" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 mt-14 md:mt-0">
            <h1
              href="#"
              className=" p-6  max-w-[24rem] h-[10rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200 hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                High Demand
              </p>
              <p className="font-normal pt-6 text-base ">
                Demand is set to grow 15x by 2030 (McKinsey)
              </p>
            </h1>

            <h1
              href="#"
              className=" p-6  max-w-[24rem] h-[10rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200  hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                Net zero commitments
              </p>
              <p className="font-normal  pt-6 text-base">
                Over 2,000 companies announce net-zero ambitions
              </p>
            </h1>
          </div>

          <div className="flex flex-col gap-y-4">
            <h1
              href="#"
              className=" p-6  max-w-[24rem] h-[10rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200  hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                Huge market
              </p>
              <p className="font-normal  pt-6 text-base">
                Corporate market is expected to grow to $30B in 2030
              </p>
            </h1>

            <h1
              href="#"
              className="p-6  max-w-[24rem] h-[10rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200  hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                Low Supply
              </p>
              <p className="font-normal pt-6 text-base">
                Credits take a long time to be issued
              </p>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Token;
