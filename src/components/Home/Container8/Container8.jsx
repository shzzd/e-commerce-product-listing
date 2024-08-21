import React from "react";
import classes from "./Container8.module.css";

export default function Container8() {
  const date = ["03", "04", "05"];
  return (
    <div className={classes.wrapper}>
      <h2>H2 title one liner</h2>
      <div>
        <div className={classes.container1}>
          <div></div>
          <p>January 06, 2024</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
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
        </div>
        <div className={classes.container2}>
          {[...Array(3)].map((e, index) => (
            <div key={index} className={classes.subContainer2}>
              <div></div>
              <div>
                <p>January {date[index]}, 2024</p>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.btn}>View All Notice & Events</div>
    </div>
  );
}
