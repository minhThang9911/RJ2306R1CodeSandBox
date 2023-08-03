import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <User />,
	},
]);

export default function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}
