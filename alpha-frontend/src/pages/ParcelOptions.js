import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductCard } from "../components";
import { fetchParcelId } from "../redux/actions";

class ParcelOptions extends Component {
  state = {};
  componentDidMount() {
    const { fetchParcelId } = this.props;
    // const id = querystring.parse(this.props.location.search)["?id"];
    const params = new window.URLSearchParams(window.location.search);
    console.log(`Parcel type: ${params.get("id")}`);
    const id = params.get("id");
    fetchParcelId(id);
  }

  renderShampoo = () => {
    const { parcelbyId } = this.props;
    const shampoo = parcelbyId.filter((obj) => obj.categoryID === 1);
    console.log(shampoo);
    return shampoo.map((val) => {
      return (
        <div>
          <ProductCard name={val.productName} category={val.categoryName} />
        </div>
      );
    });
  };

  renderSoap = () => {
    const { parcelbyId } = this.props;
    const soap = parcelbyId.filter((obj) => obj.categoryID === 2);
    return soap.map((val) => {
      return (
        <div>
          <div>
            <ProductCard name={val.productName} category={val.categoryName} />
          </div>
        </div>
      );
    });
  };

  renderPerfume = () => {
    const { parcelbyId } = this.props;
    const perfume = parcelbyId.filter((obj) => obj.categoryID === 3);
    return perfume.map((val) => {
      return (
        <div>
          <div>
            <ProductCard name={val.productName} />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="parcel-options-wrapper">
          <div className="parcel-option-category">
            <h6>Shampoo</h6>
            <div className="parcel-options">{this.renderShampoo()}</div>
          </div>
          <div className="parcel-option-category">
            <h6>Soap</h6>
            <div className="parcel-options">{this.renderSoap()}</div>
          </div>
          <div className="parcel-option-category">
            <h6>Perfume</h6>
            <div className="parcel-options">{this.renderPerfume()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ parcel }) => {
  return {
    parcelbyId: parcel.parcelbyId,
  };
};

export default connect(mapStatetoProps, { fetchParcelId })(ParcelOptions);
