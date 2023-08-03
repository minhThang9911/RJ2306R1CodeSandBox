import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_POST, getPostList } from "../redux/action";
import { useNavigate } from "react-router";

function PostList() {
	const postList = useSelector((state) => state.postList);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getPostList());
	}, [dispatch]);

	const handleNew = () => {
		navigate("/post");
	};
	const handleEdit = (post) => {
		dispatch({
			type: EDIT_POST,
			payload: post,
		});
		navigate("/post");
	};
	return (
		<div>
			<div className="header">
				<h2>Post</h2>
				<button onClick={handleNew}>Add new Post</button>
			</div>

			<ul className="body">
				{postList.map((item, index) => (
					<li key={index}>
						<div className="post-content">
							<h4>{item.title}</h4>
							<p>{item.body}</p>
						</div>
						<div>
							<button onClick={() => handleEdit(item)}>
								Edit
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostList;
