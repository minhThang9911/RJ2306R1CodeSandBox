import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
	const postList = useSelector((state) => state.postList);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPostList());
	}, [dispatch]);
	return (
		<div>
			<ul></ul>
		</div>
	);
}
import { getPostList } from "./homeSlice";

export default Home;
