const express = require("express");

const app = express();
const productRoutes = require("./src/routes/products");
const authRoutes = require("./src/routes/auth");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, DELETE, OPTIONS"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

app.use("/v1/customer", productRoutes);
app.use("/v1/auth", authRoutes);

app.listen(4000, () => {
	console.log("listening on port 4000");
});
