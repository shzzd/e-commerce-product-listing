import React from "react";
import classes from "./Container9.module.css";

export default function Container9() {
  const date = ["Oct 12", "Sep 23", "Aug 23"];
  return (
    <div className={classes.wrapper}>
      <h2>H2 title one liner</h2>
      <div>
        <div className={classes.container1}>
          <div>
            <div className={classes.sub1}>
              Oct
              <span id={classes.dateNo}>31</span>
            </div>
            <div className={classes.sub2}>
              <p>Lorem ipsum us</p>
              <p>Oct 31, 2024</p>
            </div>
          </div>
        </div>
        <div className={classes.container2}>
          {[...Array(3)].map((e, index) => (
            <div key={index} className={classes.subContainer2}>
              <div>
                {date[index].split(" ")[0]}
                <span id={classes.dateNo}>{date[index].split(" ")[1]}</span>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum augue sed tellus accumsan, nec congue quam lacinia.
                  Duis ornare congue ante a facilisis. Vestibulum sed magna in
                  ligula aliquam luctus non in ante. Nullam egestas, nunc at
                  rutrum tincidunt, purus metus malesuada ante, at cursus massa
                  turpis sit amet nulla. Quisque non ante quis lorem fermentum
                  auctor sed sed ligula. Aenean turpis sapien, efficitur quis
                  placerat at, facilisis bibendum erat. Aliquam quis mattis leo,
                  sed egestas augue. Phasellus vitae vulputate nisi, vitae
                  eleifend enim. Aenean rutrum tristique purus,
                </p>
              </div>
            </div>
          ))}
          <div className={classes.btn}>View All Notice & Events</div>
        </div>
      </div>
    </div>
  );
}
