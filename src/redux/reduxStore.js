import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth-reducer";
import itemsReducer from "./items-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  auth: authReducer,
  items: itemsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
