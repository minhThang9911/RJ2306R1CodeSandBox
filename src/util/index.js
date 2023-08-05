export function createProductObj(
	id = 0,
	title = "",
	price = 0,
	description = "",
	category = "",
	image = "",
	rating = { rate: 0, count: 0 }
) {
	return {
		id,
		title,
		price,
		description,
		category,
		image,
		rating,
	};
}
