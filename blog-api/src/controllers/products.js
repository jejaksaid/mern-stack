exports.createProduct = (req, res, next) => {
	res.json({
		message: "Create Product Success",
		data: {
			id: 1,
			name: "Liquid Paradewa",
			price: 130000,
		},
	});
	next();
};
