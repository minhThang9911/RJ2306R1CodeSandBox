import axios from "axios";

export function createPostObj(
	userId = -1,
	id = -1,
	title = "",
	body = "",
	dayCreated = "",
	emoji = {
		thumbsUp: 0,
		wow: 0,
		heart: 0,
		rocket: 0,
		coffee: 0,
	}
) {
	return {
		userId,
		id,
		title,
		body,
		dayCreated,
		emoji,
	};
}

export const reactionEmoji = {
	thumbsUp: "👍",
	wow: "😮",
	heart: "❤️",
	rocket: "🚀",
	coffee: "☕",
};

export const fetcher = axios.create({
	baseURL: "http://localhost:3001/",
	timeout: 1000,
});
