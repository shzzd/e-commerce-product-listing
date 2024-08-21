import React from "react";
import classes from "./Container10.module.css";

export default function Container10() {
  return (
    <div className={classes.wrapper}>
      <div>
        <h2>h2 title one liner</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
          ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
          ante. Nullam egestas, nunc at rutrum
        </p>
      </div>
      <div className={classes.container}>
        {[...Array(4)].map((e, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? classes.sub1 : classes.sub2}
          >
            {[...Array(3)].map((e, index) => (
              <div key={index}></div>
            ))}
          </div>
        ))}
      </div>
      <div className={classes.btn}>Learn More</div>
    </div>
  );
}
