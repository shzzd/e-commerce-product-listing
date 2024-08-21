import React from "react";
import classes from "./Container2.module.css";

export default function Container2() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerContainer1}>
        <div className={classes.innerContainer2}>
          <h2>
            About The Quick <br></br> Shop this is H2
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
            ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis
            bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus
            vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique
            purus,
          </p>
          <div>Learn more about Shop</div>
        </div>
      </div>
    </div>
  );
}
