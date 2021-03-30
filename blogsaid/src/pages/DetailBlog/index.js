import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
import { useHistory } from "react-router-dom";
import { Gap, Link } from "../../components";

const DetailBlog = () => {
	const history = useHistory();
	return (
		<div className="detail-blog-wrapper">
			<img className="img-cover" src={RegisterBg} alt="thumb" />
			<p className="blog-title">Title Blog</p>
			<p className="blog-author">Author - Date Post</p>
			<p className="blog-body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
				dolore veritatis sequi labore dolores vel quis consequatur soluta ipsa,
				eaque voluptatibus id, necessitatibus fugit minima accusamus possimus
				nisi iste reprehenderit!
			</p>
			<Gap height={20} />
			<Link title="kembali ke home" onClick={() => history.push("/")} />
		</div>
	);
};

export default DetailBlog;
