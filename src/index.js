import fruits from "./foods";
import { choice, remove } from "./helpers";

// Randomly draw a fruit from the array
const RANDOMFRUIT = choice(fruits)

console.log(`I'd like one ${RANDOMFRUIT}, please.`)
console.log(`Here you go: ${RANDOMFRUIT}`)
console.log("Delicious! May I have another?")

// Remove the fruit from the array of fruits. will return the mutated array
const removedFruit = remove(fruits, RANDOMFRUIT)

const FRUITSLEFT = fruits.length;

console.log(`I'm sorry, we're all out. We have ${FRUITSLEFT} left.`)

console.log("Removed fruit: ", removedFruit)

