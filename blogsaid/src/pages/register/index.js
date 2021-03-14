import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button } from "../../components/atoms";

const Register = () => {
	return (
		<div className="main-page">
			<div className="left">
				<img src={RegisterBg} className="bg-image" alt="imageBg" />
			</div>
			<div className="right">
				<p>Register</p>
				<Input label="Full Name" placeholder="Full Name" />
				<Input label="Email" placeholder="Email" />
				<Input label="Password" placeholder="Password" />
				<Button title="Register" />
			</div>
		</div>
	);
};

export default Register;
