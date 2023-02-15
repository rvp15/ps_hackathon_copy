import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/conf1.jpeg";
import img2 from "../../assets/conf2.jpeg";
import img3 from "../../assets/conf3.jpg";
import "./carosel.css";
function Carosel() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="carousel-img" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosel;
