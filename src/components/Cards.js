// This will contain all the cards
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-18.jpg"
              text="Explore the diverse beauty of Seoul"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-19.jpg"
              text="Travel through the island of Jeju"
              label="Leisure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-20.jpg"
              text="Take a fun and relaxing tour in Busan"
              label="Leisure"
              path="./services"
            />
            <CardItem
              src="images/img-23.jpg"
              text="Experience the magestic beauty of Korean temples"
              label="Adventure"
              path="./products"
            />
            <CardItem
              src="images/img-22.jpg"
              text="Taste Korean traditional dishes"
              label="Food"
              path="./sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
