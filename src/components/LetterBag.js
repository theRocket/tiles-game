import Letter from "./Letter";

const LetterBag = ({ letterBag, drawnLetter, isTransitioning }) => {
	const bagArr = Object.entries(letterBag);
	return (
		<div style={{ textAlign: "center" }}>
			<h2>Letter Bag</h2>{" "}
			{bagArr.map((letterTuple) => (
				<Letter
					key={letterTuple[0].charCodeAt(0)} // convert to unique int
					letter={letterTuple[0]}
					letterCount={letterTuple[1]}
					drawnLetter={drawnLetter}
					isTransitioning={isTransitioning}/>
			))}
			<div>
				<h4 style={{ marginBottom: "20px" }}>
					Use the button in your Letter Hand to draw a letter tile<br />
					Collect enough letters to form a <a href="https://wordfinder.yourdictionary.com/blog/bananagrams-dictionary-find-the-right-and-valid-words/"
						target="_blank"
						rel="noopener noreferrer">valid word</a>.<br />
					Then (left mouse button) click anywhere on the Game Board grid and begin typing to use letters from your letter hand.<br />
					Click twice to write downward instead of horizontally across the grid.
				</h4>
			</div>
		</div>
	)
};

export default LetterBag;
