import React from "react";
import { Button, Input } from "../../components";

const CreateBlog = () => {
	return (
		<div>
			<p>Create New Blog Post</p>
			<Input label="Post Title" />
			<p>Upload Image</p>
			<textarea></textarea>
			<Button title="Save" />
		</div>
	);
};

export default CreateBlog;
