import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload: pizza id
      console.log("sasasa", action.payload);
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incrItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.qty++;
      item.totalPrice = item.qty * item.unitPrice;
    },
    decrItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.qty--;
      item.totalPrice = item.qty * item.unitPrice;
      // calling reducers inside reducers
      if (item.qty === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;

export const getTotalQty = (state) =>
  state.cart.cart.reduce((sum, item) => item.qty + sum, 0);

export const getCartTotal = (state) =>
  state.cart.cart.reduce((sum, item) => item.totalPrice + sum, 0);

export const { addItem, deleteItem, incrItemQty, decrItemQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
