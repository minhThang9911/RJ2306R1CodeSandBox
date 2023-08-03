import axios from "axios";

export const FETCH_POST = "FETCH_POST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const NEW_POST_SUCCESS = "NEW_POST_SUCCESS";

export const getPostList = () => {
	return async (dispatch) => {
		const res = await axios.get(" http://localhost:3001/posts");
		dispatch({
			type: FETCH_POST_SUCCESS,
			payload: res.data,
		});
	};
};
export const editPostSubmit = (post) => {
	return async (dispatch) => {
		const res = await axios.put(
			` http://localhost:3001/posts/${post.id}`,
			post
		);
		dispatch({
			type: EDIT_POST_SUCCESS,
			payload: post,
		});
	};
};

export const newPostSubmit = (post) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(" http://localhost:3001/posts", post);
			console.log(res);
		} catch (e) {
			e.response.data;
		}

		dispatch({
			type: NEW_POST_SUCCESS,
			payload: post,
		});
	};
};
