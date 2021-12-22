import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
import HomePage from "./HomePage/HomePage";
import Products from "./Products/Products";
import Header from "./Header/Header";
import ProductDetails from "./ProductDetails";
import PageNotFound from "./NotFound/NotFound";

function Product() {
  return (
    <div className="main">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" exact component={ProductDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Product;
