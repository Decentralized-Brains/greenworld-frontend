import Tree from "../../img/tree1.png";
import "../../App.css";

const About = () => {
  return (
    <div>
      <div className="md:hidden w-full text-center pt-10 px-6">
        <h3 className="text-2xl">Introducing block2030</h3>
        <p className="pt-4 text-lg">
          Ublocking the potential of the carbon market
        </p>
      </div>
      <div className="container pt-10 md:mt-4 xl:pt-[20px] pb-10 xl:pb-[100px] grid gap-6 md:grid-cols-2 place-items-center">
        <div className="treeBG">
          <img className="w-[300px] md:w-[500px]" src={Tree} alt="" />
        </div>
        <div>
          <h2>
            Overcoming barriers so everyone can participate in the carbon market
          </h2>
          <br />
          <p>
            Effortlessly offset your company's carbon emissions with our
            innovative tokenization system. Built on blockchain technology for
            maximum transparency and security.
          </p>
          <br />
          <br />
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
