const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const prevRow = matrix[i - 1];

    result += row.reduce((total, cur, i) => {
      const valueAbove = prevRow?.[i];

      if (valueAbove === 0) {
        return total;
      }

      return total + cur;
    }, 0);
  }

  return result;
}

module.exports = {
  getMatrixElementsSum,
};
