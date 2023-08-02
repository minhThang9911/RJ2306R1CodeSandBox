export const createUserObj = (
	id = "",
	name = "",
	username = "",
	email = "",
	address = "",
	phone = "",
	website = "",
	company = ""
) => ({
	id,
	name,
	username,
	email,
	address,
	phone,
	website,
	company,
});
export const createCommentObj = (
	postId = "",
	id = "",
	name = "",
	email = "",
	body = ""
) => ({
	postId,
	id,
	name,
	email,
	body,
});

export const createPostObj = (userId ="", id="", title="", body="") => ({
	userId,
	id,
	title,
	body,
});
