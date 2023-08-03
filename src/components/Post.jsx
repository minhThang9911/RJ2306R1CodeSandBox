import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { editPostSubmit, newPostSubmit } from "../redux/action";

function Post() {
	const selectdPost = useSelector((state) => state.selectedPost);
	const [post, setPost] = useState({
		title: "",
		body: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (selectdPost.id) {
			setPost(selectdPost);
		}
	}, [selectdPost]);

	const handleSubmit = () => {
		dispatch(editPostSubmit(post));
		navigate("/");
	};
	const handleNew = () => {
		dispatch(newPostSubmit(post));
		navigate("/");
	};
	const handleChange = (e) => {
		setPost((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div>
			<div className="header">
				<h2>{!!post.id ? "Edit Post" : "New Post"}</h2>
			</div>
			<div className="edit-post-body">
				<label className="post-field">
					<h5>Title</h5>
					<input
						name="title"
						value={post.title}
						onChange={handleChange}
					/>
				</label>
				<label className="post-field">
					<h5>Content</h5>
					<textarea
						name="body"
						value={post.body}
						onChange={handleChange}></textarea>
				</label>
			</div>
			<div className="footer">
				{!!post.id ? (
					<button onClick={handleSubmit}>Save</button>
				) : (
					<button onClick={handleNew}>Add</button>
				)}
			</div>
		</div>
	);
}

export default Post;
