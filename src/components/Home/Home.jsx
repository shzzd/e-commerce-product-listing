import React from "react";
import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Container1 from "./Container1/Container1";
import Container2 from "./Container2/Container2";
import Container3 from "./Container3/Container3";
import Container4 from "./Container4/Container4";
import Container5 from "./Container5/Container5";
import Container7 from "./Container7/Container7";
import Container6 from "./Container6/Container6";
import Container8 from "./Container8/Container8";
import Container9 from "./Container9/Container9";
import Container10 from "./Container10/Container10";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Footer />
    </div>
  );
}
