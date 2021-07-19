import * as actions from "../../actions/todos";

let initialState = {
	items: [],
	indices: [],
	loading: {},
	errors: {}
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.GET_INDICES_TODOS:
			return {
				...state,
				errors: initialState.errors,
				loading: { getIndices: true }
			};

		case actions.GET_INDICES_TODOS_SUCCESS:
			var reduced = [];

			payload.forEach(item => {
				var duplicated =
					reduced.findIndex(redItem => {
						return item.userId == redItem.userId;
					}) > -1;

				if (!duplicated) {
					reduced.push(item);
				}
			});

			return {
				...state,
				indices: [...reduced],
				loading: { getIndices: false }
			};

		case actions.GET_INDICES_TODOS_FAILED:
			return {
				...state,
				loading: { getIndices: false },
				errors: payload
			};

		case actions.GET_TODOS_BY_USER:
			return {
				...state,
				errors: initialState.errors,
				loading: { getAll: true }
			};

		case actions.GET_TODOS_BY_USER_SUCCESS:
			return {
				...state,
				items: payload,
				loading: { getAll: false }
			};

		case actions.GET_TODOS_BY_USER_FAILED:
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
