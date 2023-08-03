import {
	EDIT_POST,
	EDIT_POST_SUCCESS,
	FETCH_POST_SUCCESS,
	NEW_POST_SUCCESS,
} from "./action";

const initialState = {
	postList: [],
	selectedPost: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POST_SUCCESS:
			return { ...state, postList: action.payload };

		case EDIT_POST:
			return { ...state, selectedPost: action.payload };
		case EDIT_POST_SUCCESS:
			const tmp = [...state.postList];
			const postIndex = tmp.findIndex(
				(item) => item.id === action.payload.id
			);
			tmp[postIndex] = action.payload;
			return { postList: tmp, selectedPost: {} };
		case NEW_POST_SUCCESS:
			return {
				postList: [...state.postList, action.payload],
				selectedPost: {},
			};
	}

	return state;
};

export default rootReducer;
