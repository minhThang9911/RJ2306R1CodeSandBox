import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import path from "../../router/path";
import { VIEW_PRODUCT, getProductList } from "../../redux/action";

function Home() {
	const productList = useSelector((state) => state.productList);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getProductList());
	}, [dispatch]);

	const handleSelect = (product) => {
		dispatch({
			type: VIEW_PRODUCT,
			payload: product,
		});
		navigate(`${path.product}/${product.id}`);
	};
	return (
		<div className="container">
			<div className="row">
				{productList.map((item, index) => (
					<div
						className="col"
						key={index}
						onClick={() => handleSelect(item)}>
						<div className="inner">
							<div>
								<div className="img">
									<img src={item.image} alt={item.title} />
								</div>
								<h3>{item.title}</h3>
							</div>

							<div className="footer">
								<h4>$ {item.price}</h4>
								<p>{item.category}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Home;
