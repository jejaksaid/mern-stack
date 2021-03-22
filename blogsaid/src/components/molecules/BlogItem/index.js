import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";

const BlogItem = () => {
	return (
		<div className="blog-item">
			<img className="image-thumb" src={RegisterBg} alt="post" />
			<div className="content-detail">
				<p className="title">Title Blog</p>
				<p className="author">Author - Date post</p>
				<p className="body">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
					iste hic autem maxime excepturi natus accusantium soluta pariatur
					magni officiis quae esse cupiditate, corporis dolore est ratione,
					laborum repellat. Ipsa.
				</p>
			</div>
		</div>
	);
};

export default BlogItem;
