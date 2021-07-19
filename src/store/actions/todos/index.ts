import _ from "lodash";
import * as api from "../../../services/api";

// import { State } from "../../reducers";

export const GET_INDICES_TODOS = "[TODOS] GET_INDICES_TODOS";
export const GET_INDICES_TODOS_SUCCESS = "[TODOS] GET_INDICES_TODOS_SUCCESS";
export const GET_INDICES_TODOS_FAILED = "[TODOS] GET_INDICES_TODOS_FAILED";

export const GET_TODOS_BY_USER = "[TODOS] GET_TODOS_BY_USER";
export const GET_TODOS_BY_USER_SUCCESS = "[TODOS] GET_TODOS_BY_USER_SUCCESS";
export const GET_TODOS_BY_USER_FAILED = "[TODOS] GET_TODOS_BY_USER_FAILED";

export const SET_VALUE = "[TODOS] SET_VALUE";
export const CLEAR_VALUES = "[TODOS] CLEAR_VALUES";

export function setValue(payload) {
	return dispatch => {
		dispatch({ type: SET_VALUE, payload });
	};
}

export function clearValues(payload: boolean = false) {
	return { type: CLEAR_VALUES, payload };
}

export function getIndicesTodos(callback?: Function) {
	return async (dispatch, getState) => {
		dispatch({
			type: GET_INDICES_TODOS
		});

		try {
			let response = await api.sendGet(`/todos`, null);

			let result = await response.json();

			if (result.length) {
				dispatch({
					type: GET_INDICES_TODOS_SUCCESS,
					payload: result
				});

				callback && callback(null, result);
			} else {
				dispatch({
					type: GET_INDICES_TODOS_FAILED
				});
			}
		} catch (error) {
			console.log(error);

			dispatch({
				type: GET_INDICES_TODOS_FAILED,
				payload: {
					error: "Connection error"
				}
			});

			callback && callback("Connection error");
		}
	};
}

export function getTodosByUser(id, callback?: Function) {
	return async (dispatch, getState) => {
		dispatch({
			type: GET_TODOS_BY_USER
		});

		try {
			let response = await api.sendGet(`/todos?userId=${id}`, null);

			let result = await response.json();

			if (result.length) {
				dispatch({
					type: GET_TODOS_BY_USER_SUCCESS,
					payload: result
				});

				callback && callback(null, result);
			} else {
				dispatch({
					type: GET_TODOS_BY_USER_FAILED
				});
			}
		} catch (error) {
			console.log(error);

			dispatch({
				type: GET_TODOS_BY_USER_FAILED,
				payload: {
					error: "Connection error"
				}
			});

			callback && callback("Connection error");
		}
	};
}
