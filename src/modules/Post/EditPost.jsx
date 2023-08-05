/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost, newPost } from "../../redux/action";
import { useEffect, useState } from "react";
import { createPostObj, createPostObjNoId } from "../../util";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
	const selectPost = useSelector((state) => state.selectedPost);
	const userList = useSelector((state) => state.userList);
	const [post, setPost] = useState(createPostObj());
	const [isNew, setIsNew] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		if (id === "new") {
			setIsNew(true);
			setPost(createPostObjNoId());
		} else {
			setPost(selectPost);
		}
	}, [id, selectPost]);
	const handleChange = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	};
	const handleSave = () => {
		const min = new Date().getMinutes();
		const tmp = {
			...post,
			timeCreated: `${min} min ago`,
		};
		if (isNew) {
			dispatch(newPost(tmp));
		} else {
			dispatch(editPost(tmp));
		}
		navigate("/");
	};

	const handleDelete = () => {
		dispatch(deletePost(post));
		navigate("/");
	};
	return (
		<div className="edit-post-wraper">
			<h1>{isNew ? "Add a New Post" : "Edit Post"}</h1>
			<label>
				<p>Post Title</p>
				<input
					name="title"
					onChange={handleChange}
					value={post.title}
				/>
			</label>
			<label>
				<p>Author</p>
				<select
					name="userId"
					value={post.userId}
					onChange={handleChange}>
					{userList.map((item) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>
			</label>
			<label>
				<p>Content</p>
				<textarea
					name="body"
					onChange={handleChange}
					value={post.body}></textarea>
			</label>
			<button onClick={handleSave}>Save Post</button>
			{!isNew && <button onClick={handleDelete}>Delete Post</button>}
		</div>
	);
}

export default EditPost;
