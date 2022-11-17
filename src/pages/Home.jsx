import AafterTeam from "../components/AafterTeam";
import About from "../components/About";
import CardOneSection from "../components/CardOneSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Roadmap from "../components/Roadmap";
import Teams from "../components/Teams";
import CardSectionTwo from "../components/CardSectionTwo";

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
      <Footer />
    </div>
  );
};

export default Home;
