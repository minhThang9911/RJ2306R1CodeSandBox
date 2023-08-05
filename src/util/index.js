import axios from "axios";

export function createPostObj(
	userId = -1,
	id = -1,
	title = "",
	body = "",
	timeCreated = "",
	reaction = {
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
		timeCreated,
		reaction,
	};
}

export function createPostObjNoId(
	userId = -1,
	title = "",
	body = "",
	timeCreated = "",
	reaction = {
		thumbsUp: 0,
		wow: 0,
		heart: 0,
		rocket: 0,
		coffee: 0,
	}
) {
	return {
		userId,
		title,
		body,
		timeCreated,
		reaction,
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
	baseURL: "http://localhost:3001/api/",
	timeout: 3000,
});

fetcher.interceptors.response.use(
	(res) => {
		if (res.status === 200 && Array.isArray(res.data)) {
			const newData = res.data.map((item) => {
				let timeCreated = item.timeCreated;
				let reaction = item.reaction;
				if (!timeCreated) {
					timeCreated = Math.floor(Math.random() * 60) + " min ago";
				}
				if (!reaction) {
					const thumbsUp = Math.floor(Math.random() * 100);
					const wow = Math.floor(Math.random() * 100);
					const heart = Math.floor(Math.random() * 100);
					const rocket = Math.floor(Math.random() * 100);
					const coffee = Math.floor(Math.random() * 100);
					reaction = {
						thumbsUp,
						wow,
						heart,
						rocket,
						coffee,
					};
				}
				return {
					...item,
					timeCreated,
					reaction,
				};
			});
			res.data = newData;
		}
		return res;
	},
	(err) => Promise.reject(err)
);
