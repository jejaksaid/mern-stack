import React from "react";
import { RegisterBg } from "../../assets";
import { Input, Button } from "../../components/atoms";

const Login = () => {
	return (
		<div className="main-page">
			<div className="left">
				<img src={RegisterBg} className="bg-image" alt="imageBg" />
			</div>
			<div className="right">
				<p className="title">Login</p>
				<Input label="Full Name" placeholder="Full Name" />
				<Input label="Email" placeholder="Email" />
				<Input label="Password" placeholder="Password" />
				<Button title="Register" />
			</div>
		</div>
	);
};

export default Login;
