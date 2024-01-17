import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./navbar/AboutPage";
import HomePage from "./navbar/HomePage";
import Instructurs from "./navbar/Instructurs";
import Students from "./navbar/Students";
import Pages from "./navbar/Pages";
import Blog from "./navbar/Blog";
import Contact from "./navbar/Contact";
import NavBar from "./navbar/NavBar";
import TopCategory from "./body/TopCategory";
import Featured from "./body/Featured";
// import Outletapply from "./body/Outletapply";
// import ErrorComponent from "./navbar/ErrorComponent";
import MasterSkill from "./body/MasterSkill";
import TrendingCourses from "./body/TrendingCourses";
import Leading from "./body/Leading";
import Footer from "./body/Footer";
const App = () => {
  return (
    <div>
      <NavBar />
      <TopCategory />
      <Featured />
      <MasterSkill />
      <TrendingCourses />
      <Leading />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Outletapply />} /> */}
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Instructors" element={<Instructurs />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="*" element={<ErrorComponent />} /> */}
      </Routes>
    </div>
  );
};

export default App;
