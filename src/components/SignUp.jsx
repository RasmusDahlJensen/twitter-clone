import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

export const SignUp = () => {
	return (
		<div>
			<form>
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" />
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" />
			</form>
		</div>
	);
};
