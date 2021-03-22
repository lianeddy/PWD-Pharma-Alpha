import React, { Component } from "react";
import { connect } from "react-redux";
import { ParcelCard } from "../components";
import { fetchParcels } from "../redux/actions";
import { Link } from "react-router-dom";

class ParcelPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchParcels } = this.props;
    fetchParcels();
  }

  renderParcelList = () => {
    return this.props.parcelList.map((val) => {
      console.log(val);
      return (
        <div className="parcel-container">
          <Link to={`/parcel-options?id=${val.id}`}>
            <ParcelCard name={val.parcelName} price={val.parcelPrice} />
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <h4>Parcel Page</h4>
          <div>{this.renderParcelList()}</div>
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
