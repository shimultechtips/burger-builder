import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addIngredient = (igtype) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: igtype,
  };
};

export const removeIngredient = (igtype) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: igtype,
  };
};

export const updatePurchaseable = (igtype) => {
  return {
    type: actionTypes.UPDATE_PURCHASEABLE,
    payload: igtype,
  };
};

export const resetIngredients = () => {
  return {
    type: actionTypes.RESET_INGREDIENTS,
  };
};

export const loadOrders = (orders) => {
  return {
    type: actionTypes.LOAD_ORDERS,
    payload: orders,
  };
};

export const orderLoadFailed = () => {
  return {
    type: actionTypes.ORDER_LOAD_FAILED,
  };
};

export const fetchOrders = (token, userId) => (dispatch) => {
  axios
    .get(process.env.REACT_APP_BACKEND_URL + "/order", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      dispatch(loadOrders(response.data));
    })
    .catch((err) => {
      dispatch(orderLoadFailed());
    });
};
