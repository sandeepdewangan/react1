import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      // Allow us to **mutate** state inside reducers
      state.balance = state.balance + Number(action.payload);
      state.isLoading = false;
    },
    withdraw(state, action) {
      // Allow us to **mutate** state inside reducers
      state.balance = state.balance - Number(action.payload);
    },
    // to receive more than one arguments
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        // reducer logic
        // action.payload.amount
        // action.payload.purpose
      },
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

// In next project we will use react toolkit way.
// thunk is pre configured in react tool kit.
export function deposit(amount, currency) {
  if (currency === "INR") return { type: "account/deposit", payload: amount };

  // if we return a function from the dispatch function,
  // then redux will think that it is a Async function

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );
    const data = await res.json();
    const converted = data.rates.INR;
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export const { withdraw } = accountSlice.actions;

export default accountSlice.reducer;
