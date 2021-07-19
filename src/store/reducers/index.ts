import { combineReducers } from "redux";

import menu from "./menu";
import todos from "./todos";

import { ITodos } from "../../Types/ITodos";

export interface State {
	todos: ITodos[];
}

const appReducer = combineReducers({
	menu,
	todos
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
