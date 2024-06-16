import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// combined reducer
const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});

// Middleware setup
// Setting dev tools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
