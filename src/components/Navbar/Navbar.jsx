import React from "react";
import arrowUp from "../../assets/arrow3.png";
import arrowLeft from "../../assets/arrow4.png";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const subDropDown = () => {
    return (
      <div className={classes.subDropDown}>
        <div>Sub Sub Sections under this</div>
        <div>Sub Sub Sections Under this</div>
        <div>Sub Sub Sections Under this</div>
        <div>Sub Sub Sections Under this</div>
        <img className={classes.arrowLeft} src={arrowLeft} alt="" />
      </div>
    );
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}></div>
      <div className={classes.sections}>
        <div>
          SECTION 1
          <div className={classes.dropDown}>
            <div>Sub Section 1{subDropDown()}</div>
            <div>Sub Section 2{subDropDown()}</div>
            <div>Sub Section 3{subDropDown()}</div>
            <div>Sub Section 4{subDropDown()}</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          SECTION 2
          <div className={classes.dropDown}>
            <div>Sub Section 1{subDropDown()}</div>
            <div>Sub Section 2{subDropDown()}</div>
            <div>Sub Section 3{subDropDown()}</div>
            <div>Sub Section 4{subDropDown()}</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          SECTION 3
          <div className={classes.dropDown}>
            <div>Sub Section </div>
            <div>Sub Section </div>
            <div>Sub Section 3{subDropDown()}</div>
            <div>Sub Section </div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          2 SUB DIVS
          <div className={classes.dropDown}>
            <div>Sub Section 1{subDropDown()}</div>
            <div>Sub Section 2{subDropDown()}</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          SECTION 4
          <div className={classes.dropDown}>
            <div>Sub Section</div>
            <div>Sub Section</div>
            <div>Sub Section 3</div>
            <div>Sub Section</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          TWO LINER 1
          <div className={classes.dropDown}>
            <div>Sub Section</div>
            <div>Sub Section</div>
            <div>Sub Section 3</div>
            <div>Sub Section</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          TWO LINER 2
          <div className={classes.dropDown}>
            <div>Sub Section</div>
            <div>Sub Section</div>
            <div>Sub Section 3</div>
            <div>Sub Section</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          SECTION 5
          <div className={classes.dropDown}>
            <div>Sub Section</div>
            <div>Sub Section</div>
            <div>Sub Section 3</div>
            <div>Sub Section</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
        <div>
          TWO LINER 3
          <div className={classes.dropDown}>
            <div>Sub Section</div>
            <div>Sub Section</div>
            <div>Sub Section 3</div>
            <div>Sub Section</div>
            <img className={classes.arrowUp} src={arrowUp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
