import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Login = ({ onSuccess, onClose }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});

			if (error) {
				setError(error.message);
			} else {
				console.log(data);
				onSuccess(); // Trigger onSuccess callback
				navigate("/home"); // Redirect to the homepage after successful login
			}
		} catch (error) {
			setError(error.message);
		}
	};

	const handleCloseModal = () => {
		setEmail("");
		setPassword("");
		onSuccess();
	};

	return (
		<div className="formWrapper">
			<form onSubmit={handleLogin} className="formContent">
				<span className="close" onClick={handleCloseModal}>
					&times;
				</span>
				<div className="formInputs">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email:"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password:"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && <div className="error">{error}</div>}
				</div>
				<button type="submit" className="submitBtn">
					Sign In
				</button>
			</form>
		</div>
	);
};
