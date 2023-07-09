import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Index />} />
					<Route path="home" element={<Home />} />
					<Route path="/:username" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
