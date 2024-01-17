import React, { useEffect, useState } from "react";
import "./Feature.css";
import axios from "axios";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "../Style.css";
const Featured = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios.get("./branch1.json").then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="mainContainerStyle">
      <div className="mainWrapper">
        <p style={{ color: "red" }}>What's New</p>
        <div className="mainCategoryStyle">
          <div>
            <h1>Featured Courses</h1>
          </div>
          <div>
            <button className="buttonStyle">All Categories</button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Eget aenean
          accumsan bibendum
          <br />
          gravida maecenas augue elementum et neque.Suspendisse imperdiet
        </p>
      </div>
      <div className="divStyle">
        {data.map((item) => {
          return (
            <div className="childDivStyle">
              <img className="ProductimageStyle" src={item.src} alt="" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "10px",
                }}
              >
                <div>
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div>
                  {item.name}
                  <br />
                  {item.instructor}
                </div>
              </div>
              <h5 style={{ paddingLeft: "10px", marginTop: "11px" }}>
                {item.title}
              </h5>
              <div className="borderStyle"></div>
              <div className="style">
                <div
                  style={{
                    paddingLeft: "10px",
                    marginTop: "15px",
                    marginLeft: "-6px",
                  }}
                >
                  <StarIcon className="starStyle" />
                  <StarIcon className="starStyle" />
                  <StarIcon className="starStyle" />
                  <StarIcon className="starStyle" />
                  <StarIcon className="starStyle" />
                </div>

                <div style={{ marginTop: "-26px" }}>
                  <button className="buyStyle">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
