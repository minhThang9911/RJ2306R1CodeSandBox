import axios from "axios";

export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const VIEW_PRODUCT = "VIEW_PRODUCT";
export const ADD_TO_CART = "ADD_POST_SUCCESS";

export const getProductList = () => async (dispatch) => {
	try {
		const res = await axios.get("http://localhost:3001/api/products");
		dispatch({
			type: GET_PRODUCT_SUCCESS,
			payload: res.data,
		});
	} catch (e) {
		console.log(e);
	}
};
