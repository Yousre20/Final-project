import React from "react";
/* eslint-disable */
const CarouselComponent = () => {
    return (
      <React.Fragment>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="./images/slide1/1_7139ef28-07b6-4865-bee7-48fe5e374ac6.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="./images/slide1/50_1.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./images/slide1/55_6690a6ef-2cd1-4362-b5be-c8ac5c80606e.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./images/slide1/Black_and_White_Back_to_School_Facebook_Cover_1.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./images/slide1/Untitled-1_d454b04c-4e05-4708-b292-571307ff8b84.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
            </div>
            </React.Fragment>
  );
};

export default CarouselComponent;

