import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import StarIcon from "@mui/icons-material/Star";
import "slick-carousel/slick/slick-theme.css";
import "./CategoryStyle.css";
import "./Trending.css";
import "./Feature.css";
import "../Style.css";
const cardsData = [
  {
    id: 1,
    src: "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=ais",
    name: "David Powell",
    instructor: "Instructor",
    title: "Complet HTML,CSS and Javascript Course",
  },
  {
    id: 2,
    src: "https://st3.depositphotos.com/3591429/12861/i/450/depositphotos_128610006-stock-photo-computer-with-online-course-concept.jpg",
    name: "David Powell",
    instuctor: "Instructor",
    title: "Fullstack WordPress Developer",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwY291cnNlc3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Michael Morgan",
    instuctor: "Instructor",
    title: "Advanced Android 12 & Kotlin Development Course",
  },
  {
    id: 3,
    src: "https://cdn.elearningindustry.com/wp-content/uploads/2016/09/online-course-development-process-must-know-outsource.jpeg",
    name: "Michael Morgan",
    instructor: "Instructor",
    title: "iOS & Swift Complete iOS Application Development Course",
  },
  {
    id: 3,
    src: "https://images.inc.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg",
    name: "Michael Morgan",
    instructor: "instructor",
    title: "REST APIs with Flask and Python Developer Course",
  },
  {
    src: "https://www.oberlo.com/media/1603898030-womans-hands-typing-laptop-scaled.jpg?fit=max&fm=jpg&w=1824",
    name: "Michael Morgan",
    instructor: "instructor",
    title: "Complete Python & PostgreSQL Developer Course",
  },
  {
    src: "https://www.oberlo.com/media/1603898030-womans-hands-typing-laptop-scaled.jpg?fit=max&fm=jpg&w=1824",
    name: "Michael Morgan",
    instructor: "instructor",
    title: "Complete Python & PostgreSQL Developer Course",
  },
];

const cardData = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/pupils-doing-task-laptops-focused-teacher-monitoring-them_74855-10356.jpg",
    name: "Alice Lane",
    instructor: "instructor",
    courses: "Courses 0",
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/id/1366724990/photo/smiling-computer-science-teacher-using-laptop-during-a-class-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=zVHFiRTY0aSu3zpDGM3jWV1sXBkPurXfr4GmClgvsiI=",
    name: "Alice Lane",
    instructor: "instructor",
    courses: "Courses 10",
  },
  {
    id: 3,
    src: "https://www.shutterstock.com/image-photo/beautiful-young-teacher-laptop-sitting-260nw-1068056885.jpg",
    name: "Alice Lane",
    instructor: "instructor",
    courses: "Courses 11",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/1307615661/photo/smiling-indian-business-man-working-on-laptop-at-home-office-young-indian-student-or-remote.webp?b=1&s=170667a&w=0&k=20&c=1CbFcZ9U8TpQhel60806hiNu5XsJ7YqzTQMCj2-WJDA=",
    name: "Alice Lane",
    instructor: "instructor",
    courses: "Courses 12",
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-07ODNSaBiqRtsiW3hlPtiqsKgcq5LwGKFhZr3Y3PzwDe3pzmyCxjQNyywddwmYOnlnA&usqp=CAU",
    name: "Alice Lane",
    instructor: "instructor",
    courses: "Courses 15",
  },
  {
    id: 6,
    src: "https://media.istockphoto.com/id/1451131632/photo/businessman-constantly-working-stock-photo.jpg?s=612x612&w=0&k=20&c=xXwHT62mKPJNkjkBB40mM45EWbxcP9dUmy3CGkjflig=",
    name: "Alice Lane",
    instructor: "instructor",
    courses: "Courses 14",
  },
];
const Cards = ({ src, name, instructor, courses }) => (
  <div className="card sideCard">
    <div>
      <img className="thirdImageStyle" src={src} alt="" />
    </div>
    <p>{name}</p>
    <p>{instructor}</p>
    <h5>{courses}</h5>
    <hr />
  </div>
);
const Card = ({ src, name, instructor, title }) => (
  <div className="card sideCard">
    <div>
      <img className="secondimageStyle" src={src} alt="" />
    </div>
    <p>{name}</p>
    <p>{instructor}</p>
    <h5>{title}</h5>
    <hr />
    <div className="line"></div>
    <div className="style">
      <div>
        <StarIcon className="starStyle" />
        <StarIcon className="starStyle" />
        <StarIcon className="starStyle" />
        <StarIcon className="starStyle" />
        <StarIcon className="starStyle" />
      </div>
      <div className="buyNowStyle">
        <button className="buyStyle">Buy Now</button>
      </div>
    </div>
  </div>
);

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="MainCardWrapperStyle">
      <div className="mainCardStyle">
        <p style={{ color: "red" }}>What's New</p>
        <div className="mainCategoryStyle">
          <div>
            <h1>Trending Courses</h1>
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
        <Slider {...settings} className="slidertwoOnly">
          {cardsData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </Slider>
      </div>
      <div className="featuredInc">
        <div className="center">
          <h1>Featured Instructor</h1>
          <p>
            Lorem Ipsum dolor sit amet,consectetur adilpiscing elit.Eget aenean
            accumsan bibendum
            <br />
            gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
        </div>
      </div>
      <div>
        <Slider {...settings} className="sliderThreeOnle">
          {cardData.map((card) => (
            <Cards key={card.id} {...card} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
