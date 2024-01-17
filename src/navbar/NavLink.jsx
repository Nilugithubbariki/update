import React from "react";
import { Link } from "react-router-dom";
const NavLink = () => {
  return (
    <div className="pageStyle">
      <Link to="/HomePage" className="listStyle">
        Home
      </Link>
      <Link to="/AboutPage" className="listStyle">
        About Us
      </Link>
      <Link to="/Instructors" className="listStyle">
        Instuctor
      </Link>
      <Link to="/Students" className="listStyle">
        Students
      </Link>
      <Link to="/Pages" className="listStyle">
        Pages
      </Link>
      <Link to="/Blog" className="listStyle">
        Blog
      </Link>
      <Link to="/Contact" className="listStyle">
        Contact Us
      </Link>
    </div>
  );
};

export default NavLink;
