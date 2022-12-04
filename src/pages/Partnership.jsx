import "./token.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Partnership = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mx-auto ">
      <div className="relative h-[460px] w-full bg-gradient-to-b from-cyan-500 to-blue-800 bg-cover  bg-center">
        <div className="tokenbg"></div>
        <img
          className="w-[100%] h-[460px] object-cover mix-blend-overlay"
          alt="460x photo"
        />
        <div className="absolute top-40 text-center w-[100%]">
          <h1 className="text-[50px] mb-7 text-white font-poppins">
            Partnerships
          </h1>
          <button className="font-light mx-auto text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#20972A] to-[#0CCC6F]">
            Become a Partner
          </button>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="text-center py-44 mx-auto w-2/4 max-sm:w-3/4">
          <h1 className=" md:text-[38px] mb-8 text-[40px] font-semibol max-sm:text-[36px]">
            Lorem Ipsum <span className="text-[#0DCB6B]">Dolor sit</span>
          </h1>
          <h2 className="text-lg font-thin max-sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo
            officiis eum rem, voluptatum minus. Voluptas aut recusandae ea natus
            corporis excepturi ipsam.
          </h2>
          <div className="pt-12 max-md:flex-col gap-8 flex justify-center max-sm:flex-col max-sm:p-2">
            <button className="rounded-full px-14 py-2 bg-gradient-to-r from-[#40559E] to-[#0FC7BC] text-white text-light md:py-2 md:px-8  ">
              Learn More
            </button>
            <button className="rounded-full px-10 py-2 bg-gradient-to-r from-[#20972A] to-[#0FC766] text-white text-light md:px-8">
              Become a partner
            </button>
          </div>
        </div>
      </div>

      <h1 className="py-8 text-center font-light text-4xl tracking-widest max-sm:text-[30px] ">
        CREDIT ELIGIBILITY
      </h1>
      <div className="w-[100%] p-8 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="m-5 h-[300px] text-center rounded-2xl shadow-lg lg:p-3">
          <h1 className="p-8 mt-6 text-[25px] text-[#219325] font-light">
            Lorem Ipsum
          </h1>
          <p className="text-[#4E4B4B] font-normal max-md:text-[13px] max-md:px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            molestias et quod, doloremque magnam fugiat!
          </p>
        </div>
        <div className="m-5 h-[300px] text-center rounded-2xl shadow-lg lg:p-3">
          <h1 className="p-8 mt-6 text-[25px] text-[#219325] font-light">
            Lorem Ipsum
          </h1>
          <p className="text-[#4E4B4B] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            molestias et quod, doloremque magnam fugiat!
          </p>
        </div>
        <div className="m-5 h-[300px] text-center rounded-2xl shadow-lg lg:p-3">
          <h1 className="p-8 mt-6 text-[25px] text-[#219325] font-light">
            Lorem Ipsum
          </h1>
          <p className="text-[#4E4B4B] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            molestias et quod, doloremque magnam fugiat!
          </p>
        </div>
      </div>

      <div className="bottom--text">
        <p className="text-center p-8 w-3/4 mx-auto max-sm:w-full max-sm:text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt
          impedit natus nulla aperiam dolor molestias assumenda voluptate
          facilis at..Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Molestias quo architecto illo necessitatibus porro velit sint a quas
          consequuntur quia.
        </p>
      </div>
    </div>
  );
};

export default Partnership;
