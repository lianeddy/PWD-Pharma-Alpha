import React, { Component } from "react";
import { Route } from "react-router-dom";
import { HomePage, ProductDetail, ProfilPage, RegisterPage } from "./pages";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/profil" component={ProfilPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/product/:id" component={ProductDetail} />
      </div>
    );
  }
}

export default App;
