import React, { Component } from "react";
import { connect } from "react-redux";
import { ParcelCard } from "../components";
import { fetchParcels } from "../redux/actions";
import { Link } from "react-router-dom";
import style from "./page.module.css";

class ParcelPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchParcels } = this.props;
    fetchParcels();
  }

  renderParcelList = () => {
    return this.props.parcelList.map((val) => {
      console.log(val.id);
      return (
        <Link
          to={`/parcel-options?id=${val.parcel_id}`}
          style={{ textDecoration: "none" }}
        >
          <ParcelCard
            name={val.parcelName}
            price={val.parcelPrice}
            imagepath={val.imagepath}
          />
        </Link>
      );
    });
  };

  render() {
    return (
      <div className={style.intro}>
        <h3
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "30px",
            color: "#ff8ba7",
          }}
        >
          All Parcels
        </h3>
        <div className={style.caption}>
          <h6>
            Need a birthday gift for a bestie, a well done present for a
            colleague or a thank you gift for clients? We’ve grouped together
            some of our most popular gifts to create this sweet Parcel which
            will make someone feel loved, remembered and cared for.
          </h6>
        </div>
        <div>
          <div className={style.parcelOptions}>{this.renderParcelList()}</div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = ({ parcel }) => {
  return {
    parcelList: parcel.parcelList,
  };
};

export default connect(mapStatetoProps, { fetchParcels })(ParcelPage);
