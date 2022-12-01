import BG from "../img/others/tree-bg.png";
import COIN from "../img/others/coin-g.png";
import roundimg1 from "../img/others/r1.png";
import roundimg2 from "../img/others/r2.png";
import roundimg3 from "../img/others/r3.png";
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
        <div className="bg-gradient-to-b from-cyan-500 to-blue-800 h-[460px] w-full bg-cover bg-center relative">
          <div className="tokenbg hidden md:flex"></div>
          <div className="flex md:hidden">
            <img
              src={BG}
              className="w-full h-[460px] object-cover absolute mix-blend-overlay"
              alt="background"
            />{" "}
          </div>

          {/* <img
            src={BG}
            className="w-full h-[460px] object-cover absolute mix-blend-overlay"
            alt="background"
          /> */}
          <div class="flex flex-col min-h-[460px] justify-center items-center gap-y-6 md:gap-y-10">
            <div className="text-white text-4xl md:text-6xl font-semibold font-popins">
              Carbon X Crypto
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="mx-3 md:mx-0">
        <div className="flex flex-col md:flex-row md:justify-around gap-4 pt-20">
          <div className="mx-4 sm:mt-0 flex flex-col md:justify-start md:items-start justify-center items-center">
            <div className="flex flex-col md:justify-start md:items-start justify-center items-center text-4xl md:text-6xl gap-y-4 mt-0 md:mt-10">
              <span className="font-medium">Lorem Ipsum</span>
              <span className="font-medium text-[#0DCB6B]">Dolor Sit</span>
            </div>
            <div className="max-w-[300px] pt-8">
              <p>
                Lorem ipsum dolor sit amet consectetur. Nisi odio placerat
                pellentesque dictum viverra. Ac quam curabitur aliquet cursus in
                justo nunc.
              </p>
            </div>
            <div
              className="flex flex-col gap-y-6 
          pt-8"
            >
              <button className="text-center text-white text-base md:text-xl font-normal rounded-3xl py-2 w-[180px] bg-gradient-to-r from-[#20972A] to-[#0FC766]">
                Lite Paper
              </button>
              <button className="text-center text-white text-base md:text-xl font-normal rounded-3xl py-2 w-[180px] bg-gradient-to-r from-[#40559E] to-[#0FC7BC]">
                FAQs
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-2 pt-10 md:pt-0">
              <div className="grid  w-full place-content-center ">
                <div
                  className="flex h-[300px] md:h-[400px] min-w-[300px]  md:min-w-[150px] md:max-w-[180px] 
                flex-col justify-around rounded-xl md:rounded-full  p-4 shadow-lg 
                items-center border-[1px] "
                >
                  <p className="mt-0 md:mt-6 text-center text-base pb-8 md:pb-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quasi quod beatae quia corrupti deleniti
                    voluptatibus incidunt aspernatur.
                  </p>
                  <div class=" w-[150px]  md:w-[150px] p-4">
                    <img
                      src={roundimg1}
                      alt="..."
                      class="max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>
              </div>
              <div className="grid  w-full place-content-center">
                <div
                  className="flex-col-reverse flex h-[300px] md:h-[500px] min-w-[300px] md:min-w-[150px] md:max-w-[180px] 
                md:flex-col rounded-xl md:rounded-full  p-4 shadow-lg items-center border-[1px]
                justify-around "
                >
                  <div class=" w-[150px]  md:w-[150px] p-4">
                    <img
                      src={roundimg2}
                      alt="..."
                      class="max-w-full align-middle border-none h-auto"
                    />
                  </div>
                  <p className=" text-center text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quasi quod beatae quia corrupti deleniti
                    voluptatibus incidunt aspernatur. andae quasi quod beatae
                    quia corrupti deleniti
                  </p>
                </div>
              </div>
              <div className="grid  w-full place-content-center">
                <div
                  className="flex h-[300px] md:h-[400px] min-w-[300px] md:min-w-[150px] md:max-w-[180px] 
                flex-col justify-around rounded-xl md:rounded-full  p-4 shadow-lg 
                items-center border-[1px] "
                >
                  <p className="mt-0 md:mt-6 text-center text-base pb-8 md:pb-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quasi quod beatae quia corrupti deleniti
                    voluptatibus incidunt aspernatur.
                  </p>
                  <div class=" w-[150px]  md:w-[150px] p-4">
                    <img
                      src={roundimg3}
                      alt="..."
                      class=" max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="last" className="mx-3 md:mx-0">
        <div className="flex justify-center font-medium text-3xl sm:text-5xl pt-36">
          <h1>
            Lorem Ipsum
            <span className="text-[#0DCB6B] pl-2">Dolor sit</span>
          </h1>
        </div>
        <div className="flex justify-center text-xl font-normal pt-8 ">
          <p className="max-w-[1000px] text-center">
            Lorem ipsum dolor sit amet consectetur. Nisi odio placerat
            pellentesque dictum viverra. Ac quam curabitur aliquet cursus in
            justo nunc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-4 pt-24 place-items-center">
          <div>
            <div>
              <img src={COIN} alt="" srcSet="" />
            </div>
            <div className="bg-gradient-to-r from-[#419E40] to-[#12C2BB]">
              <h3 className="text-center py-3 text-white">
                1 token = Tonnes of Carbon
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 mt-14 md:mt-0">
            <div>
              <h1
                href="#"
                className="block p-6  max-w-[24rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200"
              >
                <p className="mb-2 text-4xl font-medium text-[#219325] tracking-tigh text-center">
                  Lorem ipsum
                </p>
                <p className="font-normal pt-6 text-base text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                  quam congue nuncLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vel quam congue nuncLorem ipsum dolor
                </p>
              </h1>
            </div>

            <div>
              <h1
                href="#"
                className="block p-6  max-w-[24rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200"
              >
                <p className="mb-2 text-4xl font-medium text-[#219325] tracking-tigh text-center">
                  Lorem ipsum
                </p>
                <p className="font-normal text-justify pt-6 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                  quam congue nuncLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vel quam congue nuncLorem ipsum dolor
                </p>
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div>
              <h1
                href="#"
                className="block p-6  max-w-[24rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200"
              >
                <p className="mb-2 text-4xl font-medium text-[#219325] tracking-tigh text-center">
                  Lorem ipsum
                </p>
                <p className="font-normal text-justify pt-6 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                  quam congue nuncLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vel quam congue nuncLorem ipsum dolor
                </p>
              </h1>
            </div>

            <div>
              <h1
                href="#"
                className="block p-6  max-w-[24rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200"
              >
                <p className="mb-2 text-4xl font-medium text-[#219325] tracking-tigh text-center">
                  Lorem ipsum
                </p>
                <p className="font-normal text-justify pt-6 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                  quam congue nuncLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vel quam congue nuncLorem ipsum dolor
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-xl font-normal pt-24 ">
          <p className="text-center max-w-[860px]">
            Lorem ipsum dolor sit amet consectetur. Nisi odio placerat
            pellentesque dictum viverra. Ac quam curabitur aliquet cursus in
            justo nunc.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Token;
