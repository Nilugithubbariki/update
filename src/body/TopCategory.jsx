import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoryStyle.css";
import "../Style.css";
const cardsData = [
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXJd1XeCdCo4OXQl5k-a-vH72ANpiPKOgUI7xfnoD3A&s",
    name: "Angular",
    course: "4 Courses",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    name: "Bootstrap",
    course: "3 Courses",
  },
  {
    id: 3,
    src: "https://cdn4.iconfinder.com/data/icons/blackicon/54/css3_icon-512.png",
    name: "CSS3",
    course: "3 Courses",
  },
  {
    id: 3,
    src: "https://cdn.thenewstack.io/media/2014/04/homepage-docker-logo.png",
    name: "Docker Development",
    course: "2 Courses",
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXJd1XeCdCo4OXQl5k-a-vH72ANpiPKOgUI7xfnoD3A&s",
    name: "Angular",
    course: "4 Courses",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    name: "Bootstrap",
    course: "3 Courses",
  },
  {
    id: 3,
    src: "https://cdn4.iconfinder.com/data/icons/blackicon/54/css3_icon-512.png",
    name: "CSS3",
    course: "3 Courses",
  },
];

const Card = ({ src, name, course }) => (
  <div className="card firstSideCard">
    <img className="firstimageStyle" src={src} alt="" />

    <p>{name}</p>
    <p>{course}</p>
  </div>
);

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="mainCardStyle">
        <p style={{ color: "red" }}>Favourite Course</p>
        <div className="mainCategoryStyle">
          <div>
            <h1>Top Category</h1>
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
        <div className="firstSlider">
          <Slider {...settings} className="sliderOneStyle">
            {cardsData.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
