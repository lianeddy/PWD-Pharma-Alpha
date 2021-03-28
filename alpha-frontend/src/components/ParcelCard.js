import React from "react";
import { api } from "../helpers";
import style from "./component.module.css";
const imagesrc =
  "https://i.pinimg.com/564x/48/59/41/485941384d255a96dda1235183204ed0.jpg";

const ParcelCard = (props) => {
  return (
    <div className={style.cardWrapper}>
      <div>
        <img
          top
          width="100%"
          src={props.imagepath ? `${api}${props.imagepath}` : imagesrc}
          alt="img"
          style={{ width: "210px", height: "210px", objectFit: "cover" }}
        />
        <div>
          <h5>{props.name}</h5>
          <h7>Rp {props.price.toLocaleString()}</h7>
        </div>
      </div>
    </div>
  );
};

export default ParcelCard;
