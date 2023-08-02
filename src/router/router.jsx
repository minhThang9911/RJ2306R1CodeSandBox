import Main from "../modules/Main";
import Users from "../modules/Users";
import Posts from "../modules/Posts";
import Comments from "../modules/Comments";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/users",
		element: <Users />,
	},
	{
		path: "/posts",
		element: <Posts />,
	},
	{
		path: "/comments",
		element: <Comments />,
	},
]);
export default router;
