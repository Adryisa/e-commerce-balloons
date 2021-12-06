import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/indexReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore(initialState: {}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;
  return createStore(
      rootReducer,
      initialState,
       composeEnhancers(applyMiddleware(thunk)),
  )
}

const store = configureStore({});
export type RootState = typeof store.getState
export type AppDispatch = typeof store.dispatch