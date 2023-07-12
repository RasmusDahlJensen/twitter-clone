import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Protected } from "./components/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<Index />} />
				<Route path="home" element={<Home />} />
				<Route path="/:username" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
