import React from "react";
import "./MasterSkill.css";
import "../Style.css";
const MasterSkill = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="leftContainer">
          <p style={{ color: "red" }}>What's New</p>
          <h3>Master the skills to drive your career</h3>
          <p>
            Lorem Ipsum dolor sit amet,consectetur adipiscing elit.Eget aenean
            accumsan accumsan bibendum
            <br />
            gravida maecenas augue elementum et neque.Suspendisse imperdiet.
          </p>
          <div className="boxStyle">
            <div className="gridboxStyle">
              <img
                className="masterImageStyle"
                src="https://icon-library.com/images/tutor-icon/tutor-icon-17.jpg"
                alt=""
              />
              <p className="masterParaStyle">
                {" "}
                ContentStay motivated with
                <br /> engaging instuctors
              </p>
            </div>
            <div className="gridboxStyle">
              <img
                className="masterImageStyle"
                src="https://cdn2.iconfinder.com/data/icons/elearning-blue-and-green/512/e-learning_-_Blue_Green_Fill-31-512.png"
                alt=""
              />
              <p className="masterParaStyle">
                {" "}
                Keep up with in the latest in
                <br /> cloud
              </p>
            </div>
            <div className="gridboxStyle">
              {" "}
              <img
                className="masterImageStyle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj4BRicEZDOabFgI6mf18BEXg-i1svcBeUQ&usqp=CAU"
                alt=""
              />
              <p className="masterParaStyle">
                Get certified with 100+
                <br /> certification courses
              </p>
            </div>
            <div className="gridboxStyle">
              <img
                className="masterImageStyle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj4BRicEZDOabFgI6mf18BEXg-i1svcBeUQ&usqp=CAU"
                alt=""
              />
              <p className="masterParaStyle">
                Build skills your way,from labs to courses
              </p>
            </div>
          </div>
          <img
            className="imageTwoStyle"
            src="https://www.mzuonline.in/images/mzu-mid-img1.png"
            alt="logo"
          />
        </div>
        {/* <div className="rightContainer">
          <img
            className="midimgStyle"
            src="https://www.mzuonline.in/images/mzu-mid-img1.png"
            alt="image_logo"
          />
        </div> */}
      </div>
    </div>
  );
};

export default MasterSkill;
