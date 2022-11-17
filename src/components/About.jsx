import Tree from "../img/tree1.png";
import "../App.css";

const About = () => {
  return (
    <div className="container pt-10 xl:pt-[100px] pb-10 xl:pb-[100px] grid gap-6 md:grid-cols-2 place-items-center">
      <div className="treeBG">
        <img className="w-[300px] md:w-[350px]" src={Tree} alt="" />
      </div>
      <div>
        <h2>
          Lorem ipsum dolor sit, amet{" "}
          <span className="p-text">consectetur</span> adipisicing elit.
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet adipisicing elit. Cum laboriosam ab ut
          deserunt fuga dolorem sequi reprehenderit incidunt non eius, est,
          recusandae eaque quis nisi amet ex! Architecto, dolore explicabo.
        </p>
        <br />
        <br />
        <button>Read More</button>
      </div>
    </div>
  );
};

export default About;
