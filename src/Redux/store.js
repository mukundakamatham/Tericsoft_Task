import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { hilightsReducer } from "./highlights/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  highlights: hilightsReducer

});

/**
 *
 * @param {redux state} state
 */
// const logger = (store) => (next) => (action) => {
//   console.log("dispatching action,", action, next, state);
//   const val = next(action);
//   console.log("exiting logger");
//   return val;
// };

// const thunkMiddleware = (store) => (next) => (action) => {
//   return typeof action === "function"
//     ? action(store.dispatch, store.getState)
//     : next(action);
// };

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
