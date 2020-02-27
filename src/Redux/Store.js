import {combineReducers, createStore} from "redux";

//import {DealReducer} from "./DealReducer";
import {SettingReducer} from "./SettingReducer";


let reducers = combineReducers ({
    settings: SettingReducer,
});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;