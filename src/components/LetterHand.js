import React from "react";

const LetterHand = ({
	letterHand,
	onDrawLetter,
	drawnLetter,
	isTransitioning,
	playedLetter,
}) => {
	const tray = letterHand; // need a copy per https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development

	// const buttonColor = isTransitioning ? "#787877" : "#4CAF50" // gray or green // not working
	// const buttonColor = "#4CAF50" // gray or green
	return (
		<div className="letter-hand" style={{ textAlign: "center" }}>
			<h2>Letter Hand</h2>{" "}
			<div>
				<ul>
					{tray.map((letter, index) => (
						<li
							key={index}
							className={`tiles ${
								letter === playedLetter && isTransitioning ? "fade-out" : ""
							}`}>
							{letter}
						</li>
					))}
					{/* Fade-in effect for the newly drawn letter during transition */}
					{isTransitioning && drawnLetter && (
						<li className="tiles fade-in">{drawnLetter}</li>
					)}
					{/* Display message when there are no letters in the hand */}
					{letterHand.length === 0 && !isTransitioning && (
						<li style={{ color: "pink" }}>your hand is empty</li>
					)}
				</ul>
			</div>
			<button
				onClick={onDrawLetter}
				// disabled={isTransitioning} //  need to indicate disabled while 2 sec. transition happens
				style={{
					backgroundColor: "#4CAF50", // {buttonColor}, // not working, but need to indicate disabled while 2 sec. transition happens
					color: "white", // White text
					padding: "12px 20px",
					border: "none", // No border for a cleaner look
					borderRadius: "4px",
					cursor: "pointer", // Cursor changes to a pointer to indicate it's clickable
					fontSize: "16px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
					transition: "0.3s", // Smooth transition for hover effects
				}}>
				Draw A Tile
			</button>
		</div>
	);
};

export default LetterHand;
