import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="container-fluid header">
			<h1>Redux Blog</h1>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/post"}>New Post</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;
