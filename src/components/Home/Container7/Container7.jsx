import React from "react";
import classes from "./Container7.module.css";

export default function Container7() {
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
        <div className={classes.subBlur}></div>
        <div className={classes.sub2}>
          <div>Branch 1</div>
        </div>
        <div className={classes.sub1}>
          <div>Branch 2</div>
        </div>
        <div className={classes.sub2}>
          <div>Branch 3</div>
        </div>
        <div className={classes.subBlur}></div>
      </div>
      <div className={classes.btn}>Save More</div>
    </div>
  );
}
