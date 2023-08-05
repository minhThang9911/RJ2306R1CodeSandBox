import { createBrowserRouter } from "react-router-dom";
import path from "./path";
import Main from "../views/layout/Main";
import Home from "../modules/Home";
import Product from "../modules/Product";

const router = createBrowserRouter([
	{
		path: path.root,
		element: <Main />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: path.productWithId,
				element: <Product />,
			},
		],
	},
]);

export default router;
