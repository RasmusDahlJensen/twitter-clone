import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export const SignUp = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			const { data, error } = await supabase.auth.signUp({
				email: email,
				password: password,
				options: {
					data: {
						username: username,
					},
				},
			});

			if (error) {
				setError(error.message);
			} else {
				// SignUp successful, handle next steps
			}
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div>
			<form onSubmit={handleSignUp}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{error && <p>{error}</p>}
				<button type="submit">Sign up</button>
			</form>
		</div>
	);
};
