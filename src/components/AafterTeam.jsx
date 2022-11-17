import World from "../img/world.png";

const AafterTeam = () => {
  return (
    <div className="container xl:pb-10 grid md:grid-cols-2 gap-6 place-items-center">
      <div>
        <h2>
          Lorem ipsum <span className="p-text">dolor</span> sit amet
          consectetur.
        </h2>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          eius ducimus consectetur similique eum harum assumenda nihil soluta
          numquam ea? Necessitatibus eum sequi, id nobis natus incidunt neque
          repellat quidem?
        </p>
      </div>
      <img className="max-w-[300px]" src={World} alt="" />
    </div>
  );
};

export default AafterTeam;
