import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
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
