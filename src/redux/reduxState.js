import {combineReducers, legacy_createStore} from "redux";
import cabinetReducer from "./cabinetReducer";
import advertisementReducer from "./advertisementReducer";

let reducers = combineReducers({
    cabinetPage: cabinetReducer,
    advertisementPage: advertisementReducer,

})

let store = legacy_createStore(reducers)

window.store = store

export default store

