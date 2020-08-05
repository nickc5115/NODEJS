import update from 'immutability-helper';

const initialArray = [1, 2, 3];
const newArray = update(initialArray, { $push: [4] }); // => [1, 2, 3, 4]

const newArray2 = update(initialArray, { $push: [4] }); // => [1, 2, 3, 4]

console.log(newArray)
