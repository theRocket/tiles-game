// Function to create an initial letter bag
// range of ASCII values for uppercase letters A-Z is 65-90
const lenAlpha = 26;
const offsetAlpha = 65;
// if we need a list of keys
// const alpha = Array.from(Array(lenAlpha)).map((e, i) => i + offsetAlpha);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
const letterDistribution = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1
};
export const createInitialLetterBag = () => {
  // let initialLetterBag = [];
  // for (const [letter, count] of Object.entries(letterDistribution)) {
  // 	initialLetterBag.push([letter, count]);
  // }
  return letterDistribution;
};

// Function to draw a random letter from the letter bag into the hand
export const drawRandomLetter = (letterBag) => {
  // const letterCounts = Object.values(letterBag);
  // letterCounts.sort((a, b) => {
  //   return b - a;
  // }); // sort in descending order
  // const highestCount = letterCounts[0]; // grab first item (highest count)
  // if (highestCount === 0) {
  //   return null; // all letters spent and bag is empty (change the draw message?)
  // }
  // const randomChar = String.fromCharCode(Math.floor(Math.random() * lenAlpha) + offsetAlpha);
  // if (letterBag[randomChar] === 0) {
  //   return drawRandomLetter(letterBag); // try again (end case handled above when all letter counts are zero)
  // } else {
  //   return randomChar;
  // }
  const availableLetters = Object.entries(letterBag).reduce(
    (l, [key, value]) => (value > 0 ? { ...l, [key]: value } : l),
    {}
  );
  const letters = Object.keys(availableLetters);
  const count = letters.length;
  const idx = Math.floor(Math.random() * count);
  const letter = letters[idx];
  return letter;
};

//Function to create an initial grid that is "size*size" big and filled with empty strings
// Define a standard grid size
export const gridSize = 10;
// Function to create an initial grid state
export const createInitialGrid = () => {
  return Array(gridSize * gridSize).fill('');
};

export const reduceOneLetter = (bag, letterToRemove) => {
  const countLetter = bag[letterToRemove];
  if (countLetter > 0) {
    // console.log(`removing letter ${letterToRemove}`)
    bag[letterToRemove] = countLetter - 1; // this is firing twice and removing two only in Strict Mode (not production)
  }
  // if letter already spent, caller should not be drawing it. Leave at 0
  return bag;
};
// removes the first occurrence of a specific letter from an array
// e.g. playing a letter from the tray
export const removeOneLetter = (tray, letterToRemove) => {
  const index = tray.indexOf(letterToRemove);
  if (index > -1) {
    // console.log(`Deleting letter ${letterToRemove} at position ${index}`)
    // return tray.splice(index, 1) // acting buggy, may be a React issue with modifying existing array
    let frontPart = tray.slice(0, index);
    let lastPart = tray.slice(index + 1); // index to end of array
    return [...frontPart, ...lastPart];
  } else {
    return tray;
  }
};
