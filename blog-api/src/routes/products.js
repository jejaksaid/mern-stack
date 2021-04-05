const express = require("express");

const router = express.Router();

router.use("/products", (req, res, next) => {
	res.json({ name: "saidramadhan", email: "saidramadhan3@gmail.com" });
	next();
});

module.exports = router;
