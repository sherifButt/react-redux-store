import { combineReducers } from "redux";
import { counterReducer } from "./counter.js";
import { loggedReducer } from "./isLogged.js";
import { productReducer, selectedProductReducer } from "./productReducer.js"

const reducers = combineReducers({
  counter: counterReducer,
  signedIn: loggedReducer,
  allProducts: productReducer,
  product: selectedProductReducer
});
export default reducers;
