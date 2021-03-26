import React from "react";

const TitleCard = (props) => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "30px", marginBottom: "20px" }}
    >
      <h2 style={{ color: "#594a4e" }}>{props.title}</h2>
      <h6>{props.subtitle}</h6>
    </div>
  );
};

export default TitleCard;
