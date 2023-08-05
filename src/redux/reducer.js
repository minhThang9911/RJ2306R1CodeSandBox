import { createPostObj } from "../util";
import {
	ADD_POST_SUCCESS,
	DELETE_POST_SUCCESS,
	EDIT_POST_SUCCESS,
	GET_POST_SUCCESS,
	VIEW_POST,
} from "./action";

const initialState = {
	postList: [],
	userList: [],
	selectedPost: createPostObj(),
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POST_SUCCESS:
			return { ...state, ...action.payload };
		case EDIT_POST_SUCCESS: {
			const tmp = [...state.postList];
			const index = tmp.findIndex(
				(post) => post.id === action.payload.id
			);
			tmp[index] = action.payload;
			return {
				...state,
				postList: tmp,
				selectedPost: action.payload,
			};
		}
		case VIEW_POST:
			return { ...state, selectedPost: action.payload };
		case DELETE_POST_SUCCESS: {
			const tmp = state.postList.filter(
				(item) => item.id !== action.payload.id
			);
			return {
				...state,
				postList: tmp,
			};
		}
		case ADD_POST_SUCCESS: {
			return {
				...state,
				postList: [...state.postList, action.payload],
			};
		}

		default:
			return state;
	}
};

export default reducer;
