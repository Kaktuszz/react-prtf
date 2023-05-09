import React from "react";
import classes from "./Home.module.css";
import LinksAndButton from "./UI/LinksAndButton";
import Particle from "./UI/Particle.tsx";

const Home = () => {

  return (
    <div className={classes.container}>
      <Particle />
      <div className={classes.textcont}>
        <h2>Hi, I'm Bohdan Fedirko</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco l
        </p>
        <LinksAndButton link={"#second"} alt={"Lets start"} >Lets start</LinksAndButton>
      </div>
    </div>
  );
};

export default Home;
