import React from "react";
import classes from "./Container1.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Container1() {
  return (
    <div className={classes.wrapper}>
      <div></div>
      <p>Welcome to Grand Shop</p>
      <p>A Single Line of Motto Text</p>
      <div>
        Main CTA 1 <FaArrowRightLong />
      </div>
    </div>
  );
}
