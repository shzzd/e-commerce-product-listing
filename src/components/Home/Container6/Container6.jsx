import React from "react";
import i1 from "../../../assets/icon1.png";
import i2 from "../../../assets/icon2.png";
import i3 from "../../../assets/icon3.png";
import i4 from "../../../assets/icon4.png";
import classes from "./Container6.module.css";
import { FiArrowUpRight } from "react-icons/fi";

export default function Container6() {
  const icon = [i1, i2, i3, i4];
  const explore = [
    "explore products",
    "explore cool products",
    "explore products",
    "explore customers",
  ];
  return (
    <div className={classes.wrapper}>
      <h2>H2 title one liner</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
        augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
        ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
        ante. Nullam egestas, nunc at rutrum tincid
      </p>
      {icon.map((e, index) => (
        <div
          key={index}
          className={
            index % 2 === 0 ? classes.container : classes.containerSwap
          }
        >
          <div className={classes.sub1}>
            <h4>
              <img src={icon[index]} alt="" />
              Title h4
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
              ornare congue ante a facilisis. Vestibulum sed magna in ligula
              aliquam luctus non in ante. Nullam egestas, nunc at rutrum
              tincidunt, purus metus malesuada ante, at cursus massa turpis sit
              amet{" "}
            </p>
          </div>
          <div className={classes.sub2}>
            <div className={classes.s1}>{explore[index]}</div>
            <div className={classes.s2}>
              <FiArrowUpRight className={classes.iconStyle} />
            </div>
          </div>
        </div>
      ))}
      <div className={classes.btn}>Learn More</div>
    </div>
  );
}
