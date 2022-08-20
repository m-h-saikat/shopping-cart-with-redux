import { cart } from "../../../Data";
import { ADDTOCART, DECREASE, GETTOTAL, INCREASE } from "./ActionType";
const initState = {
  items: cart,
  addedItems: [],
  totalAmount: 0,
  totalCount: 0,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADDTOCART:
      let addedItem = state.items.find((item) => item.id === action.payload);
      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find(
        (item) => action.payload === item.id
      );
      if (existed_item) {
        let newQuantity = addedItem.quantity++;
        return {
          ...state,
          totalAmount: state.totalAmount + addedItem.price,
          totalCount: parseFloat(newQuantity),
        };
      } else {
        //calculating the total
        // let newTotal = state.totalAmount + addedItem.price;
        let newCount = state.totalCount + addedItem.quantity;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          // totalAmount: newTotal,
          totalCount: newCount,
        };
      }
    case GETTOTAL:
      let { totalAmount, totalCount } = state.addedItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          return {
            ...state,
            totalAmount: (cartTotal.totalAmount += itemTotal),
            totalCount: (cartTotal.totalCount += quantity),
          };
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      totalAmount = parseFloat(totalAmount.toFixed());

      return { ...state, totalAmount, totalCount };
    case INCREASE:
      let addedItemQuantity = state.items.find(
        (item) => item.id === action.payload
      );
      // let newTotal = state.totalCount + addedItemQuantity.price;
      return {
        ...state,
        totalCount: state.totalCount + addedItemQuantity.quantity++,
      };

    case DECREASE:
      let addedItemRemove = state.items.find(
        (item) => item.id === action.payload
      );
      //if the qt == 0 then it should be removed
      if (addedItemRemove.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.payload
        );
        let newTotal = state.totalCount - addedItemRemove.price;
        return {
          ...state,
          addedItems: new_items,
          totalCount: newTotal,
        };
      } else {
        addedItemRemove.quantity -= 1;
        let newTotal = state.totalCount - addedItemRemove.price;
        return {
          ...state,
          totalCount: newTotal,
        };
      }
    default:
      return state;
  }
};

export default Reducer;
