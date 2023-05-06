import React, { useState } from "react";
import classes from "./Header.module.css";
// import { Button } from "bootstrap";

const Header = () => {


    const [collapse, setCollapse] = useState(false);

    const collapseHandler =()=>{
        setCollapse(prevState => !prevState);
    }


  return (
      <div className={`${classes.test} ${collapse === true ? classes.collapsed : ""}`} onClick={collapseHandler}>
        <p>Bohdan Fedirko</p>
        <nav className={classes.navs}>
          <ul>
            <li><a  href="#" alt="Work">Work</a></li>
            <li><a  href="#" alt="Content">Content</a></li>
            <li><a  href="#" alt="About">About</a></li>
            <li><a href="#" alt="github">GIT</a></li>
          </ul>
        </nav>
      </div>
  );
};

export default Header;
