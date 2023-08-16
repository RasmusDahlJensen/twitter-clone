import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./SignUp.scss";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export const SignUp = ({ onSuccess }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			const { user, error } = await supabase.auth.signUp({
				email: email,
				password: password,
			});

			if (error) {
				setError(error.message);
			} else {
				// User registration successful, now insert into user_profiles table
				const { data, error } = await supabase
					.from("user_profiles")
					.insert([{ user_id: user.id, username: username }]);

				if (error) {
					setError(error.message);
				} else {
					onSuccess(); // Trigger onSuccess callback
				}
			}
		} catch (error) {
			setError(error.message);
		}
	};

	const handleCloseModal = () => {
		setUsername("");
		setEmail("");
		setPassword("");
		onSuccess(); // Trigger onSuccess callback
	};

	return (
		<div className="formWrapper">
			<form onSubmit={handleSignUp} className="formContent">
				<span className="close" onClick={handleCloseModal}>
					&times;
				</span>
				<div className="formInputs">
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username:"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
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
					Sign up
				</button>
			</form>
		</div>
	);
};
