import React from "react";
import "./Home.scss";

export const Home = () => {
	return (
		<div className="main">
			<aside>
				{/* Menu*/}
				<div>
					<svg viewBox="0 0 24 24" aria-hidden="true" fill="white">
						<g>
							<path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
						</g>
					</svg>
					<h2>Home</h2>
				</div>
				<div>
					<svg viewBox="0 0 24 24" aria-hidden="true" fill="white">
						<g>
							<path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
						</g>
					</svg>
					<h2>Profile</h2>
				</div>
			</aside>
			<main>{/* Tweets */}</main>
			<aside>
				{/* Trending tweets */}
				<div>
					<h2>Trends for you</h2>
					<p className="TrendSubtext"></p>
					<p className="TrendMain"></p>
					<p></p>
				</div>
			</aside>
		</div>
	);
};
