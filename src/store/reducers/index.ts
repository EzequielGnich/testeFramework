import { combineReducers } from "redux";

import menu from "./menu";
import todos from "./todos";
import albums from "./albums";
export interface State {
	todos: [];
	albums: [];
}

const appReducer = combineReducers({
	menu,
	todos,
	albums
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
