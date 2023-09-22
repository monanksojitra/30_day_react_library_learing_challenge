import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Day11.css";

export default function Day11() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="box">
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
