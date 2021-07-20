import { combineReducers } from "redux";

import menu from "./menu";
import todos from "./todos";
import albums from "./albums";

import { ITodos } from "../../Types/ITodos";
import { IAlbums } from "../../Types/IAlbums";

export interface State {
	todos: ITodos[];
	albums: IAlbums[];
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
