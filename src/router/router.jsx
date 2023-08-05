import { createBrowserRouter } from "react-router-dom";
import path from "./path";
import Main from "../views/layout/Main";
import Home from "../modules/Home";
import ViewPost from "../modules/Post/ViewPost";
import EditPost from "../modules/Post/EditPost";

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
				path: path.postWithId,
				element: <ViewPost />,
			},
			{
				path: path.postEditWithId,
				element: <EditPost />,
			},
		],
	},
]);

export default router;
