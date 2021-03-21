import React from "react";
import { BlogItem, Button } from "../../components";
import "./home.scss";

const Home = () => {
	return (
		<div className="home-page-wrapper">
			<div className="create-wrapper">
				<Button title="create blog post" />
			</div>
			<BlogItem />
			<p>Pagination</p>
		</div>
	);
};

export default Home;
