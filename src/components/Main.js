import React from "react";
import Products from "./Products";
import AddToCardProducts from "./AddToCardProducts";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <Products />
      <AddToCardProducts />
    </div>
  );
}

export default Main;
