/* eslint-disable react/prop-types */
function PostItem({ item, handleEdit }) {
	return (
		<li>
			<div className="post-content">
				<h4>{item.title}</h4>
				<p>{item.body}</p>
			</div>
			<div>
				<button onClick={() => handleEdit(item)}>Edit</button>
			</div>
		</li>
	);
}

export default PostItem;
