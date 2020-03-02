import {combineReducers, createStore} from "redux";

import {SettingReducer} from "./SettingReducer";
import {DataReducer} from "./DataReducer";


let reducers = combineReducers ({
    settings: SettingReducer,
    data: DataReducer,
});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;