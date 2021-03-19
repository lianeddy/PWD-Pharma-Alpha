import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { productById } from "../redux/actions";

class ProductDetail extends Component {
  state = {
    data: {},
    selectedQty: 1,
  };

  componentDidMount() {
    const { productById } = this.props;
    const id = this.props.match.params.id;
    console.log(id);
    productById(id);
  }

  increaseQty = () => {
    this.setState({
      selectedQty: this.state.selectedQty + 1,
    });
  };

  decreaseQty = () => {
    this.setState({
      selectedQty: this.state.selectedQty - 1,
    });
  };

  render() {
    const {
      productName,
      price,
      description,
      categoryID,
      imagepath,
    } = this.props.product;

    return (
      <div>
        <div className="product-detail-container">
          <div className="image-detail">
            <div>Product Image</div>
          </div>
          <div>
            <div>
              <div>Product Name:{productName}</div>
              <div>Descriptions: {description}</div>
            </div>
            <div>
              <div>Rp {price.toLocaleString()}</div>
              <div>
                <div>Stock:</div>
                <div>
                  <div>
                    <button>-</button>
                    {this.state.selectedQty}
                    <button>+</button>
                  </div>
                  <div>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ user, product }) => {
  return {
    product: product.productList,
    user: user.id,
  };
};

export default connect(mapStatetoProps, { productById })(ProductDetail);
