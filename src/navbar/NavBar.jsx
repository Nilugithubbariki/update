import React from "react";
import NavLink from "./NavLink";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import "../Style.css";
const NavBar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="Mainwrap">
          <div>
            <img
              className="leftLogoStyle"
              src="https://static.crozdesk.com/web_app_library/providers/logos/000/020/181/original/dreamslms-1675929974-logo.png?1675929974"
              alt="logo"
            />
          </div>
          <div>
            <NavLink />
          </div>
          <div>
            <img
              className="rightLogoStyle"
              src="https://thumbs.dreamstime.com/b/lms-letter-initial-logo-design-lms-letter-initial-logo-design-vector-illustration-letter-initial-logo-design-vector-illustration-236632062.jpg"
              alt="logo"
            />
          </div>
        </div>
        <div className="flexWrap">
          <div className="leftContent">
            <p>The Leader in Online Learning</p>
            <h3>
              Engaging &<br /> Accessible Online
              <br /> Courses For all
            </h3>
            <div className="searchStyle">
              <span className="searchIconStyle">
                <SearchIcon />
              </span>
              <input
                className="inputStyle"
                type="text"
                placeholder="Search School"
              />
              <span className="arrowStyle">
                <ArrowForwardIcon />
              </span>
            </div>
            <p>
              Trusted by Over 15K Users
              <br />
              worldside since 2022
            </p>
            <div className="mainstarStyle">
              <h3>290+</h3>
              <h1 className="childStarStyle">
                4.5
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
              </h1>
            </div>
            {/* <img
              className="navimageStyle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxA60_me1btVR8J0jDnmphVdYCFw-1SLRDw&usqp=CAU"
              alt=""
            /> */}
          </div>
          <div className="rightContent">
            <img
              className="navimageStyle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxA60_me1btVR8J0jDnmphVdYCFw-1SLRDw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="cardStyle">
        <div className="childCard">
          <img
            style={{ background: "red" }}
            className="oneStyle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RA9gmOWIx6nXI4LXYSemfbYB6DSwyeVULQ&usqp=CAU"
            alt=""
          />
          <h5 style={{ marginTop: "10px", marginLeft: "10px" }}>1K</h5>
          <br />
          <p style={{ marginTop: "39px", marginLeft: "-20px" }}>
            Online Course
          </p>
        </div>
        <div className="childCard">
          <img
            style={{ background: "rgb(192 214 243)" }}
            className="oneStyle"
            src="https://icon-library.com/images/tutor-icon/tutor-icon-17.jpg"
            alt=""
          />
          <h5 className="valueStyle">20+</h5>
          <p className="pStyle">Expert Tutors</p>
        </div>
        <div className="childCard">
          <img
            style={{ background: "#f9cbf8ab" }}
            className="oneStyle"
            src="https://cdn2.iconfinder.com/data/icons/elearning-blue-and-green/512/e-learning_-_Blue_Green_Fill-31-512.png"
            alt=""
          />
          <h5 style={{ marginTop: "10px", marginLeft: "10px" }}>0K+</h5>
          <p style={{ marginTop: "39px", marginLeft: "-25px" }}>
            Certified course
          </p>
        </div>
        <div className="childCard">
          <img
            className="oneStyle"
            style={{ background: "yellow" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj4BRicEZDOabFgI6mf18BEXg-i1svcBeUQ&usqp=CAU"
            alt=""
          />
          <h5 style={{ marginTop: "10px", marginLeft: "10px" }}>6K</h5>
          <p style={{ marginTop: "39px", marginLeft: "-25px" }}>
            Online Students
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
