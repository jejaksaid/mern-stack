const { validationResult } = require("express-validator");

exports.createBlogPost = (req, res, next) => {
	const title = req.body.title;
	// const image = req.body.image;
	const body = req.body.body;

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log("err : ", errors);
		res.status(400).json({
			message: "Request Error",
			data: null,
		});
	}

	const result = {
		message: "Create Blog Post Success",
		data: {
			post_id: 1,
			title: "Title Blog",
			image: "imagefile.png",
			body: "Lorem Impsum is simply dummy text of the printing",
			created_at: "12/06/2020",
			author: {
				uid: 1,
				name: "Testing",
			},
		},
	};
	res.status(201).json(result);
};
`	`;
