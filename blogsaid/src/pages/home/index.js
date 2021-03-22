import React from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";

const Home = () => {
	return (
		<div className="home-page-wrapper">
			<div className="create-wrapper">
				<Button title="create blog post" />
			</div>
			<Gap height={20} />
			<div className="content-wrapper">
				<BlogItem />
				<BlogItem />
				<BlogItem />
				<BlogItem />
			</div>
			<div className="pagination">
				<Button title="Previous" />
				<Gap height={20} />
				<Button title="Next" />
			</div>
		</div>
	);
};

export default Home;
