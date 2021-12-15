import { createStore } from "redux"
import rootReducer from "../reducers"
import configureStore, { store } from "./store"


test('', () => {
    expect(JSON.stringify(store)).toEqual(JSON.stringify(configureStore({})))
})