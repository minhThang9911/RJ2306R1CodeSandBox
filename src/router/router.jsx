import { createBrowserRouter } from "react-router-dom";
import path from "./path";
import Post from "../modules/Post";
import Main from "../views/layout/Main";
import Home from "../modules/Home";

const router = createBrowserRouter([
	{
		path: path.root,
		element: <Main />,
		children: [
			{
				element: <Home />,
			},
			{
				path: path.post,
				element: <Post />,
			},
		],
	},
]);

export default router;
