import { Link } from "react-router-dom";
import path from "../../../router/path";

function Header() {
	return (
		<div className="container-fluid header">
			<Link to={"/"}>
				<h1>Shop</h1>
			</Link>
		</div>
	);
}

export default Header;
