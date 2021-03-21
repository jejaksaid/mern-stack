import React from "react";
import { Button } from "../../components";
import "./home.scss";

const Home = () => {
	return (
		<div className="home-page-wrapper">
			<div className="create-wrapper">
				<Button title="create blog post" />
			</div>
			<p>Blog content</p>
			<p>Blog content</p>
			<p>Blog content</p>
			<p>Blog content</p>
			<p>Blog content</p>
			<p>Pagination</p>
		</div>
	);
};

export default Home;
