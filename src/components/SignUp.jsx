import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./SignUp.scss";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export const SignUp = ({ onSuccess }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [error, setError] = useState(null);

	const handleSignup = async (e) => {
		e.preventDefault();

		try {
			const { error: signUpError } = await supabase.auth.signUp({
				email: email,
				password: password,
			});

			if (signUpError) {
				setError(signUpError.message);
			} else {
				// Insert user profile after successful signup with email and Bio
				const { error: profileInsertError } = await supabase
					.from("user_profiles")
					.insert([
						{
							email: email,
							bio: "Please customize your bio",
							username: username,
						},
					]);

				if (profileInsertError) {
					setError(profileInsertError.message);
				} else {
					onSuccess(); // Trigger onSuccess callback
				}
			}
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="formWrapper">
			<form onSubmit={handleSignup} className="formContent">
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
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username:"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
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
