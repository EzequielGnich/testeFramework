import { combineReducers } from "redux";

import menu from "./menu";
import todos from "./todos";
import albums from "./albums";
import posts from "./posts";
export interface State {
	todos: {};
	albums: {};
	posts: {};
}

const appReducer = combineReducers({
	menu,
	todos,
	albums,
	posts
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
