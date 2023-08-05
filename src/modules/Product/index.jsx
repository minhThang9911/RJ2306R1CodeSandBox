import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../redux/action";

function Product() {
	const product = useSelector((state) => state.selectedProduct);
	const dispatch = useDispatch();
	return (
		<div className="product-item">
			<div className="product-img">
				<img src={product.image} />
			</div>
			<div className="product-detail">
				<h2>{product.title}</h2>
				<p className="product-price">$ {product.price}</p>
				<p className="product-category">{product.category}</p>
				<p className="product-description">{product.description}</p>
				<button
					onClick={() =>
						dispatch({
							type: ADD_TO_CART,
							payload: product,
						})
					}>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default Product;
