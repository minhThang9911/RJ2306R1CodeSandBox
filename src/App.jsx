import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import PostList from "./components/PostList";
import Post from "./components/Post";
import { Suspense } from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PostList />,
	},
	{
		path: "/post",
		element: <Post />,
	},
]);

export default function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}
