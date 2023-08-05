/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { editPost } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import path from "../../router/path";
import { reactionEmoji } from "../../util";

function ViewPost() {
	const post = useSelector((state) => state.selectedPost);
	const navigate = useNavigate();
	const handleReaction = (e) => {
		const editedReaction = {
			...post.reaction,
			[e.target.name]: post.reaction[e.target.name] + 1,
		};
		const editedPost = {
			...post,
			reaction: editedReaction,
		};
		dispatch(editPost(editedPost));
	};
	const handleEdit = () => {
		console.log(path.postEdit);
		navigate(`${path.postEdit}${post.id}`);
	};
	return (
		<div key={post.id} className="post-item">
			<div className="body">
				<h2>{post.title}</h2>
				<p className="body__text">{post.body}</p>
				<p className="body__link">
					<a onClick={handleEdit}>Edit Post</a> by &nbsp;
					{post.userName}
					&nbsp;
					{post.timeCreated}
				</p>
				<p className="body_emoji">
					<button name="thumbsUp" onClick={handleReaction}>
						{reactionEmoji.thumbsUp}
					</button>
					&nbsp;{post.reaction.thumbsUp}&nbsp;
					<button name="wow" onClick={handleReaction}>
						{reactionEmoji.wow}
					</button>
					&nbsp;
					{post.reaction.wow}&nbsp;
					<button name="heart" onClick={handleReaction}>
						{reactionEmoji.heart}
					</button>{" "}
					&nbsp;
					{post.reaction.heart}&nbsp;
					<button name="rocket" onClick={handleReaction}>
						{reactionEmoji.rocket}
					</button>
					&nbsp;{post.reaction.rocket}&nbsp;
					<button name="coffee" onClick={handleReaction}>
						{reactionEmoji.coffee}
					</button>
					&nbsp;{post.reaction.coffee}&nbsp;
				</p>
			</div>
		</div>
	);
}

export default ViewPost;
