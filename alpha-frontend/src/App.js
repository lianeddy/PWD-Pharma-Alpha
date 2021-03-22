import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import {
  HomePage,
  AccountPage,
  ChangePassPage,
  HomePage,
  ProductDetail,
  ProfilPage,
  RegisterPage,
} from "./pages";

// link color
// https://www.happyhues.co/palettes/15

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/change-password" component={ChangePassPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/profil" component={ProfilPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/product/:id" component={ProductDetail} />
      </div>
    );
  }
}

export default App;
