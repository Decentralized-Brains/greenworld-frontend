import React from "react";
import RoadmapCard from "./RoadmapCard";
import { motion } from "framer-motion";
const PopUp = {
  offscreen: { scale: 0.3 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};

const FromDown = {
  offscreen: { y: 150 },
  onscreen: {
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};

const Roadmap = () => {
  return (
    <div className="container pb-16 xl:first-letter:pb-[100px] text-center">
      <h3 className="text-3xl">
        <span className="p-text">Road</span> Map
      </h3>
      <br />
      <br />
      {/* <div className="w-full h-[2px] bg-gray-200 absolute mt-4">h2</div> */}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="grid place-items-center gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
      >
        <motion.div variants={FromDown}>
          <RoadmapCard num={1} />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard num={2} />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard num={3} />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard num={4} />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard num={5} />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard num={6} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Roadmap;
