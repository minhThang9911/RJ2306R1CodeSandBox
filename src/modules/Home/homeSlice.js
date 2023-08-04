import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetcher } from "../../util";
import path from "../../router/path";

export const AC_POST_GET_LIST = "post/getlist";

export const getPostList = createAsyncThunk(
	AC_POST_GET_LIST,
	async (thunkAPI) => {
		try {
			const res = await fetcher.get(path.api.post);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	}
);

const initialState = {
	postList: [],
};
const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPostList.fulfilled, (state, action) => {
			state.postList.push(action.payload);
		});
	},
});
