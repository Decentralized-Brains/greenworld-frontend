import BG from "../img/others/tree-bg.png";
import COIN from "../img/others/coin-g.png";

const Token = () => {
  return (
    <div>
      <section id="hero">
        <div className="bg-gradient-to-b from-cyan-500 to-blue-800 h-[460px] w-full bg-cover bg-center relative">
          <img
            src={BG}
            className="w-full h-[460px] object-cover absolute mix-blend-overlay"
            alt="background"
          />
          <div className="flex flex-col min-h-[460px] justify-center items-center gap-y-6 md:gap-y-10">
            <div className="text-white text-4xl md:text-6xl font-semibold font-popins">
              Carbon X Crypto
            </div>
            <button className="  rounded-3xl py-1 md:py-2 px-6 md:px-10 bg-gradient-to-r from-[#054d2a] to-[#106317]">
              <p className="text-center text-white text-base md:text-xl">
                Buy Token
              </p>
            </button>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex flex-col md:flex-row md:justify-around gap-4 pt-20">
          <div className="mx-4 sm:mt-0 flex flex-col md:justify-start md:items-start justify-center items-center">
            <div className="flex flex-col md:justify-start md:items-start justify-center items-center text-4xl md:text-6xl gap-y-4 mt-0 md:mt-10">
              <span className="font-medium font-popins">Lorem Ipsum</span>
              <span className="font-medium font-popins text-[#0DCB6B]">
                Dolor Sit
              </span>
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
              <button className="text-center text-white text-base md:text-xl font-normal font-popins rounded-3xl py-2 w-[180px] focus:outline-none bg-gradient-to-r from-[#20972A] to-[#0FC766]">
                Lite Paper
              </button>
              <button className="text-center text-white text-base md:text-xl font-normal font-popins rounded-3xl py-2 w-[180px] focus:outline-none bg-gradient-to-r from-[#40559E] to-[#0FC7BC]">
                FAQs
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
              <div className="grid  w-full place-content-center ">
                <div className="flex h-[300px] md:h-[400px] min-w-[300px]  md:min-w-[150px] md:max-w-[180px] flex-col justify-center md:justify-between rounded-xl md:rounded-full bg-white p-4 shadow-md items-center border-[1px] md:border-0 border-green-300">
                  <p className="mt-0 md:mt-10 text-center text-sm pb-8 md:pb-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quasi quod beatae quia corrupti deleniti
                    voluptatibus incidunt aspernatur.
                  </p>
                  <div className="mt-4 h-[120px] w-[120px] rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="grid  w-full place-content-center">
                <div className="flex h-[300px] md:h-[500px] min-w-[300px] md:min-w-[150px] md:max-w-[180px] flex-col rounded-xl md:rounded-full bg-white p-4 shadow-md items-center border-[1px] border-green-300 md:border-0">
                  <div className="mt-4 h-[120px] w-[120px] rounded-full bg-green-500"></div>
                  <p className="mt-10 text-center text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quasi quod beatae quia corrupti deleniti
                    voluptatibus incidunt aspernatur.
                  </p>
                </div>
              </div>
              <div className="grid  w-full place-content-center">
                <div className="flex h-[300px] md:h-[400px] min-w-[300px] md:min-w-[150px] md:max-w-[180px] flex-col justify-center md:justify-between rounded-xl md:rounded-full bg-white p-4 shadow-md items-center border-[1px] border-green-300 md:border-0">
                  <p className="mt-0 md:mt-10 text-center text-sm pb-8 md:pb-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quasi quod beatae quia corrupti deleniti
                    voluptatibus incidunt aspernatur.
                  </p>
                  <div className="mt-4 h-[120px] w-[120px] rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="last">
        <div className="flex justify-center font-medium text-3xl sm:text-5xl font-popins pt-36">
          <h1>
            Lorem Ipsum
            <span className="text-[#0DCB6B] pl-2">Dolor sit</span>
          </h1>
        </div>
        <div className="flex justify-center text-xl font-popins font-normal pt-8 ">
          <p className="max-w-[1000px] text-center">
            Lorem ipsum dolor sit amet consectetur. Nisi odio placerat
            pellentesque dictum viverra. Ac quam curabitur aliquet cursus in
            justo nunc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-36 place-items-center">
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
          <div className="flex flex-col gap-y-4">
            <div>
              <h1
                href="#"
                className="block p-6  max-w-[24rem] bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200"
              >
                <p className="mb-2 text-4xl font-normal text-[#219325] tracking-tigh text-center">
                  lorem ipsum
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
                <p className="mb-2 text-4xl font-normal text-[#219325] tracking-tigh text-center">
                  lorem ipsum
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
                <p className="mb-2 text-4xl font-normal text-[#219325] tracking-tigh text-center">
                  lorem ipsum
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
                <p className="mb-2 text-4xl font-normal text-[#219325] tracking-tigh text-center">
                  lorem ipsum
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
        <div className="flex justify-center text-xl font-popins font-normal pt-48 ">
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
