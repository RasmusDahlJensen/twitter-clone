import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});

			if (error) {
				setError(error.message);
			} else {
				const { data: userData, error: userError } =
					await supabase.auth.getUser();

				if (userError) {
					setError(userError.message);
				} else {
					const { user } = userData;
					console.log(user.user_metadata);

					// Save user_metadata to localStorage with expiration
					const expirationTimestamp = Math.floor(Date.now() / 1000) + 3600; // 3600 seconds = 1 hour
					const metadataWithExpiration = {
						user_metadata: user.user_metadata,
						expirationTimestamp: expirationTimestamp,
					};
					localStorage.setItem(
						"user_metadata",
						JSON.stringify(metadataWithExpiration)
					);
				}
			}
		} catch (error) {
			setError(error.message);
		}
	};

	useEffect(() => {
		const checkLocalStorageExpiration = () => {
			const storedMetadata = localStorage.getItem("user_metadata");
			if (storedMetadata) {
				const { user_metadata, expirationTimestamp } =
					JSON.parse(storedMetadata);
				const currentTime = Math.floor(Date.now() / 1000);
				if (currentTime > expirationTimestamp) {
					// Clear localStorage if expiration time has passed
					localStorage.removeItem("user_metadata");
				} else {
					console.log(user_metadata);
				}
			}
		};

		checkLocalStorageExpiration();
	}, []);

	return (
		<div>
			<form onSubmit={handleSignUp}>
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
