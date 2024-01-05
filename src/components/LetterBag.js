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
					Use the button in your Letter Hand to draw a letter tile.<br />
					Collect enough letters to form a <a href="https://wordfinder.yourdictionary.com/blog/bananagrams-dictionary-find-the-right-and-valid-words/"
						target="_blank"
						rel="noopener noreferrer">valid word</a>.<br />
					To use your hand, click or tap on an empty square in the Game Board and begin typing from your available letters.<br />
					You can click/tap twice to place letters downwards.
				</h4>
			</div>
		</div>
	)
};

export default LetterBag;
