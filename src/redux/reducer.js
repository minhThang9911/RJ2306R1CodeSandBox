import { ADD_TO_CART, GET_PRODUCT_SUCCESS, VIEW_PRODUCT } from "./action";

const initialState = {
	productList: [],
	selectedProduct: [],
	cart: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCT_SUCCESS:
			return { ...state, productList: action.payload };
		case VIEW_PRODUCT: {
			return {
				...state,
				selectedProduct: action.payload,
			};
		}
		case ADD_TO_CART:
			return { ...state, cart: [...state.cart, action.payload] };

		default:
			return state;
	}
};

export default reducer;
