import {
  ADDTOCART,
  DECREASE,
  GETTOTAL,
  INCREASE,
  INCREMENT,
} from "./ActionType";

export const addToCart = (value) => {
  return { type: ADDTOCART, payload: value };
};
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrease = (value) => {
  return {
    type: DECREASE,
    payload: value,
  };
};
export const getTotal = () => {
  return {
    type: GETTOTAL,
  };
};
export const increase = (value) => {
  return {
    type: INCREASE,
    payload: value,
  };
};
