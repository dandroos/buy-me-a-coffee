import React from "react";
import coffeeImage from "../images/coffee.svg";
import cakeImage from "../images/cake.svg";

export default function Graphics() {
  return (
    <div className="svg-canvas">
      <img src={coffeeImage} alt="Cup of coffee svg" className="svg svg-coffee" />
      <img src={cakeImage} alt="Cake svg" className="svg svg-cake" />
    </div>
  );
}
