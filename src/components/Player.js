import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Player.css";

const Player = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  const rendom =(min,max)=>{
    return Math.floor(Math.random() * (max - min + 1))+1;
  }

  const xHandler = () => {
    
    setX(rendom(-150,150));
  };

  const yHandler = () => {
   
    setY(rendom(-150,150));
  };

  const rotateHandler = () => {
    
    setRotate(rendom(-180,180));
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      xHandler();
      yHandler();
      rotateHandler();
    }, 1000);
    return()=> clearInterval(interval);
  }, [])

  console.log(x);
  console.log(y);
  console.log(rotate);

  return (
    <motion.div
      className="boxx"
      animate={{ x: x, y: y, rotate: rotate }}
      transition={{ type: "spring" }}
    />
  );
};
export default Player;
