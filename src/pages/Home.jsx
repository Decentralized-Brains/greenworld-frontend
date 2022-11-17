import AafterTeam from "../components/home/AafterTeam";
import About from "../components/home/About";
import CardOneSection from "../components/home/CardOneSection";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import Roadmap from "../components/home/Roadmap";
import Teams from "../components/home/Teams";
import CardSectionTwo from "../components/home/CardSectionTwo";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Partners />
      <AafterTeam />
      <CardOneSection />
      <Roadmap />
      <Teams />
      <CardSectionTwo />
    </div>
  );
};

export default Home;
