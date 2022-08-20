import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Products() {
  const { items } = useSelector((state) => state.items);
  console.log(items);
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {items.map((item) => {
        return <Product key={item.id} id={item.id} {...item} />;
      })}
    </div>
  );
}

export default Products;
