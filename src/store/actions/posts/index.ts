import _ from "lodash";
import * as api from "../../../services/api";

export const GET_POSTS = "[POSTS] GET_POSTS";
export const GET_POSTS_SUCCESS = "[POSTS] GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "[POSTS] GET_POSTS_FAILED";

export const GET_COMMENTS = "[POSTS] GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "[POSTS] GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILED = "[POSTS] GET_COMMENTS_FAILED";

export const SET_VALUE = "[POSTS] SET_VALUE";
export const CLEAR_VALUES = "[POSTS] CLEAR_VALUES";

export function setValue(payload) {
	return dispatch => {
		dispatch({ type: SET_VALUE, payload });
	};
}

export function clearValues(payload: boolean = false) {
	return { type: CLEAR_VALUES, payload };
}

export function getPosts(callback?: Function) {
	return async (dispatch, getState) => {
		dispatch({
			type: GET_POSTS
		});

		try {
			let response = await api.sendGet(
				`/posts?_expand=user&_embed=comments`,
				null
			);

			let result = await response.json();

			if (result.length) {
				dispatch({
					type: GET_POSTS_SUCCESS,
					payload: result
				});

				callback && callback(null, result);
			} else {
				dispatch({
					type: GET_POSTS_FAILED
				});
			}
		} catch (error) {
			console.log(error);

			dispatch({
				type: GET_POSTS_FAILED,
				payload: {
					error: "Connection error"
				}
			});

			callback && callback("Connection error");
		}
	};
}

export function getComments(id, callback?: Function) {
	return async (dispatch, getState) => {
		dispatch({
			type: GET_COMMENTS
		});

		try {
			let response = await api.sendGet(`/posts/${id}/comments`, null);

			let result = await response.json();

			if (result.length) {
				dispatch({
					type: GET_COMMENTS_SUCCESS,
					payload: result
				});

				callback && callback(null, result);
			} else {
				dispatch({
					type: GET_COMMENTS_FAILED
				});
			}
		} catch (error) {
			console.log(error);

			dispatch({
				type: GET_COMMENTS_FAILED,
				payload: {
					error: "Connection error"
				}
			});

			callback && callback("Connection error");
		}
	};
}
