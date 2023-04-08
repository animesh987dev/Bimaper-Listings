import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import CityCard from "./CityCard";
import CS from "./CS";
import lko from "../images/lko.jpg";
import del from "../images/del.jpg";
import mum from "../images/mum.jpg";

const City = () => {
  const cityData = [
    { name: "Lucknow", img: lko },
    { name: "Delhi", img: del },
    { name: "Mumbai", img: mum },
    { name: "Lucknow", img: lko },
    { name: "Delhi", img: del },
    { name: "Mumbai", img: mum },
    { name: "Lucknow", img: lko },
    { name: "Delhi", img: del },
    { name: "Mumbai", img: mum },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="xs:px-10 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 pt-20">
      <h2 className="font-bold xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-14 tracking-tighter">
        <span className="text-sky-500">City</span> based listings
      </h2>
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        layout
        className="flex gap-10 w-max overflow-hidden"
      >
        {cityData.map((item) => (
          <CityCard info={item}></CityCard>
        ))}
        <CS></CS>
      </motion.div>
    </div>
  );
};

export default City;
