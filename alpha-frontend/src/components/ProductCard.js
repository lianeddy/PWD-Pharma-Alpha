import React from "react";
const imagesrc =
  "https://i.pinimg.com/564x/48/59/41/485941384d255a96dda1235183204ed0.jpg";

const ProductCard = (props) => {
  return (
    <div className="card-wrapper">
      <div>
        <img
          top
          width="100%"
          src={imagesrc}
          alt="img"
          style={{ width: "200px", height: "200px" }}
        />
        <div>
          <h6>{props.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
