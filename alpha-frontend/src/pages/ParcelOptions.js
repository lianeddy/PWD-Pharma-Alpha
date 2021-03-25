import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { ProductCard } from "../components";
import { fetchParcelId, changeIsCheckedAction } from "../redux/actions";
import Select from "react-select";
import Checkbox from "../components/Checkbox";

class ParcelOptions extends Component {
  state = {
    isChecked: false,
    products: [],
  };

  // Mengambil list produk sesuai tipe parsel
  componentDidMount() {
    const { fetchParcelId } = this.props;
    const params = new window.URLSearchParams(window.location.search);
    console.log(`Parcel type: ${params.get("id")}`);
    const id = params.get("id");
    fetchParcelId(id);
  }

  handleisChecked = (e) => {
    // const { changeIsCheckedAction } = this.props;
    // const products = this.state.products;
    // console.log(`Clicked product: ${id}`);
    // changeIsCheckedAction(id);
  };

  // Menampilkan list produk sesuai kategori produk
  renderShampoo = () => {
    const { parcelbyId } = this.props;
    const shampoo = parcelbyId.filter((obj) => obj.categoryID === 1);
    return shampoo.map((val) => {
      return (
        <div>
          <input
            type="checkbox"
            // onChange={() => this.handleisChecked(val.id_product)}
            // onClick={() => this.handleisChecked(val.id_product)}
          />
          {/* <ProductCard name={val.productName} id_product={val.id_product} /> */}
          <ProductCard name={val.productName} id_product={val.id_product} />
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
          <input type="checkbox" />
          <ProductCard name={val.productName} id_product={val.id_product} />
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
          <input type="checkbox" />
          <ProductCard name={val.productName} id_product={val.id_product} />
        </div>
      );
    });
  };

  handleAddToCartBtn = () => {
    const { parcelbyId } = this.props;
    const productToCart = parcelbyId.filter((val) => {
      return val.isChecked === 1;
    });
    console.log(productToCart);
    // cart action: bawa producttocart dan reset isclickednya di database
  };

  render() {
    console.log(this.state.products);
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
        <Button onClick={this.handleAddToCartBtn}>Add to Cart</Button>
      </div>
    );
  }
}

const mapStatetoProps = ({ parcel }) => {
  return {
    parcelbyId: parcel.parcelbyId,
  };
};

export default connect(mapStatetoProps, {
  fetchParcelId,
  changeIsCheckedAction,
})(ParcelOptions);
