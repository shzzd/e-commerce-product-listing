import React from "react";
import icon1 from "../../../assets/icon5.png";
import icon2 from "../../../assets/icon6.png";
import icon3 from "../../../assets/icon7.png";
import map from "../../../assets/map.png";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.wrapper}>
      <div>
        <div className={classes.info}>
          <div></div>
          <p>SHOP NAME</p>
          <p>
            <img src={icon1} alt="" /> Shop Location
          </p>
          <p>
            <img src={icon2} alt="" /> +XX XXX XXX XXXX (Shop Admin)
          </p>
          <p>
            <img src={icon3} alt="" /> info@shop.com
          </p>
        </div>
        <img className={classes.img} src={map} alt="map" />
      </div>
      <div>© 2024 Shop. All rights reserved</div>
    </div>
  );
}
