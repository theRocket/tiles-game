Create the Grid:

Start by creating the grid where players will form words. It could be a simple 2D array to represent the grid cells.

# Implementing Form Fields in the Grid

## Grid with Input Fields:

Each cell in your crossword grid can be an individual input field.
You can create a grid layout using CSS (like grid or flexbox) and render input fields in each cell.

## Managing State:

The value of each input field should be controlled by the state in your component.
- [x] Use the useState hook to create a state variable that holds the current values of all the cells.

## Updating State:

## Attach an onChange handler to each input field.
- [x] When the user types a letter into a cell, the onChange handler updates the state to reflect the new value.

# Implement the Letter Pool:
- [x] Display a set of letters that the player can choose from. This can be an array of letter objects.
- [x] Display the count of letters remaining to be chosen in the upper corner of the tile and decrement when drawn
- [ ] Assure after letter count is zero, it can no longer be drawn
- [ ] Determine why an event is firing twice that calls `reduceOneLetter()`. Is it the transition state?
- [ ] Add tests for src/components/gameUtil.js (at minimum)

# Enable Letter Placement:

- [x] Implement functionality to let the player place a letter from the pool into a grid cell.

# Handle State Changes:

- [x] Ensure that placing a letter updates the grid and the letter pool appropriately.

# Replenish the Letter Pool:

- [ ] After a letter is used, randomly select a new letter from the bag to add to the pool.
