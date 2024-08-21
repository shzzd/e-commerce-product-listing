import React from "react";
import classes from "./Container5.module.css";
import { FaArrowRight } from "react-icons/fa6";

export default function Container5() {
  return (
    <div className={classes.wrapper}>
      <h2>Yellow title h2</h2>
      <div></div>
      <h3>H3 Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
        augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
        ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
        ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada
        ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem
        fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis
        placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed
        egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim.
        Aenean rutrum tristique purus,
      </p>
      <p>
        Learn More <FaArrowRight className={classes.iconStyle} />
      </p>
    </div>
  );
}
