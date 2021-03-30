import React from "react";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
	const history = useHistory();
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
					<Gap height={20} />
					<Button
						title="View Detail"
						onClick={() => history.push("/detail-blog")}
					/>
				</p>
			</div>
		</div>
	);
};

export default BlogItem;
