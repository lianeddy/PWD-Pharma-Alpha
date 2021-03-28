import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductCard, TitleCard } from "../components";
import {
  fetchParcelId,
  changeIsCheckedAction,
  fetchParcels,
} from "../redux/actions";

class ParcelOptions extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const { fetchParcelId, fetchParcels } = this.props;
    const params = new window.URLSearchParams(window.location.search);
    console.log(`Parcel type: ${params.get("id")}`);
    const id = params.get("id");
    fetchParcelId(id);
    fetchParcels();
  }

  handleisChecked = (item) => {
    const { products } = this.state;
    console.log(`Clicked product: ${item}`);
    const iteminarray = products.indexOf(item);
    console.log(iteminarray);
    if (iteminarray === -1) {
      this.setState({ products: [...products, item] });
    } else {
      products.splice(iteminarray, 1);
    }
  };

  renderTitle = () => {
    const { parcelList } = this.props;
    const params = new window.URLSearchParams(window.location.search);
    const id = params.get("id");
    let onPackage = parcelList.filter((obj) => obj.parcel_id === parseInt(id));
    const { parcelName, description } = onPackage[0];
    return <TitleCard title={parcelName} subtitle={description} />;
  };

  renderShampoo = () => {
    const { parcelbyId } = this.props;
    let shampoo = parcelbyId.filter((obj) => obj.categoryID === 1);
    return shampoo.map((val) => {
      return (
        <div>
          <input
            type="checkbox"
            onClick={() => this.handleisChecked(val.id_product)}
          />
          <ProductCard
            name={val.productName}
            id_product={val.id_product}
            imagepath={val.imagepath}
          />
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
          <input
            type="checkbox"
            onClick={() => this.handleisChecked(val.id_product)}
          />
          <ProductCard
            name={val.productName}
            id_product={val.id_product}
            imagepath={val.imagepath}
          />
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
          <input
            type="checkbox"
            onClick={() => this.handleisChecked(val.id_product)}
          />
          <ProductCard
            name={val.productName}
            id_product={val.id_product}
            imagepath={val.imagepath}
          />
        </div>
      );
    });
  };

  handleAddToCartBtn = () => {
    console.log(this.state.products);
  };

  render() {
    const { products } = this.state;
    console.log(this.state.products);
    return (
      <div>
        <div>{this.renderTitle()}</div>
        <div className="parcel-options-wrapper">
          <div style={{ alignSelf: "center", marginTop: "30px" }}>
            <h4 style={{ color: "#594a4e" }}>Shampoo</h4>
            <div className="parcel-options">{this.renderShampoo()}</div>
          </div>
          <div style={{ alignSelf: "center", marginTop: "30px" }}>
            <h4 style={{ color: "#594a4e" }}>Soap</h4>
            <div className="parcel-options">{this.renderSoap()}</div>
          </div>
          <div style={{ alignSelf: "center", marginTop: "30px" }}>
            <h4>Perfume</h4>
            <div className="parcel-options">{this.renderPerfume()}</div>
          </div>
          <button
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              backgroundColor: "#ff8ba7",
              color: "#33272a",
              width: "150px",
              padding: "5px",
              borderRadius: "5px",
              alignSelf: "center",
              outline: "none",
            }}
            onClick={this.handleAddToCartBtn}
            disabled={products.length === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ parcel }) => {
  return {
    parcelbyId: parcel.parcelbyId,
    parcelList: parcel.parcelList,
  };
};

export default connect(mapStatetoProps, {
  fetchParcelId,
  changeIsCheckedAction,
  fetchParcels,
})(ParcelOptions);
