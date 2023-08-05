import path from "../router/path";
import { fetcher } from "../util";

export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const VIEW_POST = "VIEW_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";

export const getPostList = () => async (dispatch) => {
	try {
		const resPost = (await fetcher.get(path.api.post)).data;
		const resUser = (await fetcher.get(path.api.user)).data;
		const matchedPost = resPost.map((post) => {
			const userName =
				resUser[resUser.findIndex((user) => user.id == post.userId)]
					.name;
			return {
				...post,
				userName,
			};
		});
		dispatch({
			type: GET_POST_SUCCESS,
			payload: {
				postList: matchedPost,
				userList: resUser,
			},
		});
	} catch (e) {
		console.log(e);
	}
};

export const editPost = (post) => async (dispatch) => {
	try {
		const res = await fetcher.put(`${path.api.post}/${post.id}`, post);
		dispatch({
			type: EDIT_POST_SUCCESS,
			payload: post,
		});
	} catch (e) {
		console.log(e);
	}
};

export const deletePost = (post) => async (dispatch) => {
	try {
		const res = await fetcher.delete(`${path.api.post}/${post.id}`);
		dispatch({
			type: DELETE_POST_SUCCESS,
			payload: post,
		});
	} catch (e) {
		console.log(e);
	}
};

export const newPost = (post) => async (dispatch) => {
	try {
		const res = await fetcher.post(path.api.post, post);
		dispatch({
			type: ADD_POST_SUCCESS,
			payload: post,
		});
	} catch (e) {
		console.log(e);
	}
};
