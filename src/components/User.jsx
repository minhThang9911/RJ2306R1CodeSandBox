import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER, FETCH_USER } from "../redux/action";

function User() {
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const handleGetUser = () => {
		dispatch({ type: FETCH_USER });
	};

	const handleDeleteUser = (id) => {
		dispatch({ type: DELETE_USER, payload: id });
	};
	return (
		<div>
			<h1>User list</h1>
			<button onClick={handleGetUser}>Get users</button>
			{users.length !== 0 && (
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Email</th>
							<th>Website</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.website}</td>
								<td>
									<button
										onClick={() =>
											handleDeleteUser(user.id)
										}>
										Delete user
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}
export default User;
