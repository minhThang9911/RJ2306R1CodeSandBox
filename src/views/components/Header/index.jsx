import { Link } from "react-router-dom";
import path from "../../../router/path";

function Header() {
	return (
		<div className="container-fluid header">
			<h1>Redux Blog</h1>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={`${path.postEdit}new`}>New Post</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;
