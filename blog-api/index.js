const express = require("express");

const app = express();
const router = express.Router();

router.use("/products", (req, res, next) => {
	res.json({ name: "saidramadhan", email: "saidramadhan3@gmail.com" });
	next();
});

router.use("/price", (req, res, next) => {
	res.json({ price: 10000000 });
	next();
});
router.get("/customers", (req, res, next) => {
	res.json({ title: "customer 1" });
	next();
});

router.delete("/users", (req, res, next) => {
	res.json({ user: "user 1" });
});
app.use("/", router);

// GET '/users' ==> [{name: said}]

app.listen(4000);
