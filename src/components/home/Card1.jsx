import React from "react";

const Card1 = ({ data }) => {
  const { img, title, desc } = data;
  return (
    <div className="shadow-xl border border-gray-500/20 p-4 rounded-xl hover:shadow-none duration-300">
      <img src={img} alt="" className="w-[150px] xl:-mt-10 rounded-xl mb-4" />
      <h3 className="mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card1;
