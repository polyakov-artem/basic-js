const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  items: [],

  getLength() {
    return this.items.length;
  },

  addLink(value = " ") {
    let str = String(value);

    if (typeof value === "function") {
      str = str.replace("{}", "{ }");
    }

    this.items.push(`( ${str} )`);
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      this.getLength() === 0 ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.items = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.items.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.items.reverse();
    return this;
  },

  finishChain() {
    const result = this.items.join("~~");
    this.items = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
