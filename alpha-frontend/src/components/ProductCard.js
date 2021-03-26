import React from "react";
import { api } from "../helpers";
const imagesrc =
  "https://i.pinimg.com/564x/48/59/41/485941384d255a96dda1235183204ed0.jpg";

const ProductCard = (props) => {
  return (
    <div className="card-wrapper">
      <div>
        <img
          top
          width="100%"
          src={props.imagepath ? `${api}${props.imagepath}` : imagesrc}
          alt="img"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <div>
          <h6 style={{ color: "#594a4e" }}>{props.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
