import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCardProduct from "./AddToCartProduct";
import { getTotal } from "./Redux/AddToCart/Action";

function AddToCardProducts() {
  const { addedItems, totalAmount, totalCount } = useSelector(
    (state) => state.items
  );
  const [quantity] = useSelector((state) => state.items.addedItems);

  console.log("qun" + quantity);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
    // eslint-disable-next-line
  }, [totalCount, totalAmount]);
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {addedItems.map((item) => {
          return <AddToCardProduct key={item.id} id={item.id} {...item} />;
        })}

        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalCount}</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCardProducts;
