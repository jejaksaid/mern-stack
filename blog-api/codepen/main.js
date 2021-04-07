const getButton = document.getElementById("get");
const postButton = document.getElementById("post");

// getButton.addEventListener("click", () => {
// 	alert("halo");
// });

// postButton.addEventListener("click", () => {
// 	alert("hallo again");
// });

getButton.addEventListener("click", () => {
	fetch("http://localhost:4000/v1/customer/products")
		.then((res) => res.json())
		.then((resJSON) => console.log(resJSON))
		.catch((err) => console.log(err));
});

postButton.addEventListener("click", () => {
	fetch("http://localhost:4000/v1/customer/product", {
		method: "POST",
	})
		.then((res) => res.json())
		.then((resJSON) => console.log(resJSON))
		.catch((err) => console.log(err));
});
