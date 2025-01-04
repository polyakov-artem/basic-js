const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    debugger;
    let maxDepth = 1;

    const getItemDepth = (item) => {
      let depth = 0;

      if (Array.isArray(item)) {
        depth = 1;
        depth += this.calculateDepth(item);
      }

      return depth;
    };

    arr.forEach((item) => {
      const depth = getItemDepth(item);
      maxDepth = Math.max(maxDepth, depth);
    });

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
