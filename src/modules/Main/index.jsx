import path from "../../config/path";
import { getData } from "../../api";
import { useEffect, useState } from "react";
import RenderData from "./RenderData";
import { createCommentObj, createPostObj, createUserObj } from "../../utils/createItem";
export default function Main() {
	const [userList, setUserList] = useState([]);
    const [user,setUser] = useState(createUserObj())
	const [postList, setPostList] = useState([]);
    const [post,setPost] = useState(createPostObj())
	const [commentList, setCommentList] = useState([]);
    const [comment,setComment] = useState(createCommentObj())

	useEffect(() => {
		(async () => {		
			const data = (await getData(path.users)).data;
			setUserList(data);
		})();
	}, []);
	const handleUserSelect = (userId) => {
		(async () => {
			const data = (await getData(path.posts)).data;
			const postsByUser = data.filter((post) => post.userId === userId);
			setPostList(postsByUser);
            const id = userList.findIndex((item) => item.id === userId)
            setUser(userList[id])
		})();
	};

	const handlePostSelect = (postId) => {
		(async () => {
			const data = (await getData(path.comments)).data;
			const commentsByPost = data.filter(
				(comment) => comment.postId === postId
			);
			setCommentList(commentsByPost);
            const id = postList.findIndex((item) => item.id === postId)
            setPost(postList[id])            
		})();
	};

    const handleCommentSelect = (commentId) =>{
        const id = commentList.findIndex((item) => item.id === commentId)
        setComment(commentList[id])
    }

	return (
		<div className="container">
			<div className="row">
				<div className="col users">
					<RenderData link={path.users} editData={user}/>
				</div>
				<div className="col posts">
					<RenderData link={path.posts} editData={post}/>
				</div>
				<div className="col comments">
					<RenderData link={path.comments} editData={comment}/>
				</div>
			</div>
			<div className="row">
				<div className="col users">
					<h2>User List</h2>
					<ul>
						{userList.map((item, index) => (
							<li
								key={index}
								onClick={() => handleUserSelect(item.id)}>
								{item.name}
							</li>
						))}
					</ul>
				</div>
				<div className="col posts">
					<h2>Post List</h2>
					<ul>
						{postList.map((item, index) => (
							<li
								key={index}
								onClick={() => handlePostSelect(item.id)}>
								{item.title}
							</li>
						))}
					</ul>
				</div>
				<div className="col comments">
					<h2>Comment List</h2>
					<ul>
						{commentList.map((item, index) => (
							<li key={index} onClick={()=>handleCommentSelect(item.id)}>{item.name}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
