import Letter from "./Letter";

const LetterBag = ({ letterBag, drawnLetter, isTransitioning }) => {
	const bagArr = Object.entries(letterBag);
	return (
		<div>
			{bagArr.map((letterTuple) => (
				<Letter
					key={letterTuple[0].charCodeAt(0)} // convert to unique int
					letter={letterTuple[0]}
					letterCount={letterTuple[1]}
					drawnLetter={drawnLetter}
					isTransitioning={isTransitioning}/>
		))}
		</div>
	)
};

export default LetterBag;
