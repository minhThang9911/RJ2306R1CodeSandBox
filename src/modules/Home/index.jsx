import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VIEW_POST, editPost, getPostList } from "../../redux/action";
import { Link, useNavigate } from "react-router-dom";
import path from "../../router/path";
import { reactionEmoji } from "../../util";

function Home() {
	const postList = useSelector((state) => state.postList);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getPostList());
	}, [dispatch]);

	const handleReaction = (post, e) => {
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
	const handleView = (post) => {
		dispatch({
			type: VIEW_POST,
			payload: post,
		});
		navigate(`${path.post}/${post.id}`);
	};
	return (
		<div>
			<ul>
				{postList.map((item, index) => (
					<li key={index} className="post-item">
						<div className="body">
							<h2>{item.title}</h2>
							<p className="body__text">{item.body}</p>
							<p className="body__link">
								<a onClick={() => handleView(item)}>
									View Post
								</a>
								&nbsp; by &nbsp;
								{item.userName}
								&nbsp;
								{item.timeCreated}
							</p>
							<p className="body_emoji">
								<button
									name="thumbsUp"
									onClick={(e) => handleReaction(item, e)}>
									{reactionEmoji.thumbsUp}
								</button>
								&nbsp;{item.reaction.thumbsUp}&nbsp;
								<button
									name="wow"
									onClick={(e) => handleReaction(item, e)}>
									{reactionEmoji.wow}
								</button>
								&nbsp;
								{item.reaction.wow}&nbsp;
								<button
									name="heart"
									onClick={(e) => handleReaction(item, e)}>
									{reactionEmoji.heart}
								</button>{" "}
								&nbsp;
								{item.reaction.heart}&nbsp;
								<button
									name="rocket"
									onClick={(e) => handleReaction(item, e)}>
									{reactionEmoji.rocket}
								</button>
								&nbsp;{item.reaction.rocket}&nbsp;
								<button
									name="coffee"
									onClick={(e) => handleReaction(item, e)}>
									{reactionEmoji.coffee}
								</button>
								&nbsp;{item.reaction.coffee}&nbsp;
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
export default Home;
