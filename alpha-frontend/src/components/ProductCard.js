import React from "react";
import { connect, useDispatch } from "react-redux";
import { api } from "../helpers";
import { changeIsCheckedAction } from "../redux/actions";
const imagesrc =
  "https://i.pinimg.com/564x/48/59/41/485941384d255a96dda1235183204ed0.jpg";

// src={imagepath ? `${api}${imagepath}` : wander} alt="ga keambil"

const ProductCard = (props) => {
  // const dispatch = useDispatch();

  // const handleisChecked = (id) => {
  // console.log(props.id_product);
  //   console.log(`Clicked product: ${id}`);
  //   dispatch(changeIsCheckedAction(id));
  // };

  return (
    <div className="card-wrapper">
      <div>
        {/* <input
          type="checkbox"
          onClick={() => handleisChecked(props.id_product)}
        /> */}
        <img
          top
          width="100%"
          src={props.imagepath ? `${api}${props.imagepath}` : imagesrc}
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
