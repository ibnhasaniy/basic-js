const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  // result is count of  cats
  let result = 0;
  for (let i = 0; i < backyard; i++) {
    for (let j = 0; j < backyard[i]; j++) {
      if (backyard[i][j] == "^^") {
        cats++
      }
    }
  }
  console.log(result)
  return result
}

module.exports = {
  countCats
};