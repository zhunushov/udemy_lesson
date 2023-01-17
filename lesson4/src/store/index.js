import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// ?
const logMidlleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    // next это диспач
    console.log(action.type, getState(), dispatch);
    return next(action);
  };
// const stringMiddleware = () => (next) => (action) => {
//   if (typeof action === "string") {
//     return next({ type: action });
//   }
//   return next(action);
// };
//? -Enhancer Store
// const stringEnhancer =
//   (createStore) =>
//   (...arg) => {
//     const store = createStore(...arg);
//     const orignalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//       if (typeof action === "string") {
//         return orignalDispatch({
//           type: action,
//         });
//       }
//       return orignalDispatch(action);
//     };
//     return store;
//   };

// const logEnhancer =
//   (createStore) =>
//   (...arg) => {
//     const store = createStore(...arg);
//     const orignalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//       console.log(action.type);
//       return orignalDispatch(action);
//     };
//     return store;
//   };

//?-1-monkey patching
// const orignalDispatch = store.dispatch;
// store.dispatch = (action) => {
//   if (typeof action === "string") {
//     return orignalDispatch({
//       type: action,
//     });
//   }
//   orignalDispatch(action);
// };
// export const store = createStore(reducer, compose(stringEnhancer, logEnhancer));//!enhancer
// export const store = createStore(
//   reducer,
//   applyMiddleware(stringMiddleware, logMidlleware)
// );
export const store = createStore(
  reducer,
  applyMiddleware(thunk, logMidlleware)
);
// ?delay action
// const myAction = (dispatch) => {
//   setTimeout(
//     () =>
//       dispatch({
//         type: "DELAY_ACTION",
//       }),
//     1000
//   );
// };
// store.dispatch(myAction);
// ? 2
const delayedActionCreators = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAY_ACTION",
      }),
    timeout
  );
};
store.dispatch(delayedActionCreators(3000));
