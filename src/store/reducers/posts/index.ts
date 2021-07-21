import * as actions from "../../actions/posts";

let initialState = {
	posts: [],
	item: {},
	comments: [],
	loading: {},
	errors: {}
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.GET_POSTS:
			return {
				...state,
				errors: initialState.errors,
				loading: { getAll: true }
			};

		case actions.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: payload,
				loading: { getAll: false }
			};

		case actions.GET_POSTS_FAILED:
			return {
				...state,
				loading: { getAll: false },
				errors: payload
			};

		case actions.GET_COMMENTS:
			return {
				...state,
				errors: initialState.errors,
				loading: { getAll: true }
			};

		case actions.GET_COMMENTS_SUCCESS:
			return {
				...state,
				comments: payload,
				loading: { getAll: false }
			};

		case actions.GET_COMMENTS_FAILED:
			return {
				...state,
				loading: { getAll: false },
				errors: payload
			};

		case actions.SET_VALUE:
			if (payload.loading) {
				payload.loading = { ...state.loading, ...payload.loading };
			}
			return {
				...state,
				...payload
			};

		case actions.CLEAR_VALUES:
			if (payload)
				return {
					...initialState
				};

			return {
				...state,
				...initialState
			};

		default:
			return state;
	}
};

export default reducer;
