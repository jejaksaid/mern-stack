const express = require("express");

const app = express();
const router = express.Router();

router.use("/products", (req, res, next) => {
	console.log("url: ", req.originalUrl);
	console.log("method: ", req.method);
	res.json({ name: "saidramadhan", email: "saidramadhan3@gmail.com" });
	next();
});

app.use("/", router);

// GET '/users' ==> [{name: said}]

app.listen(4000);
