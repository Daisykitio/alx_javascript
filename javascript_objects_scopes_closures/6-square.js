const ParentSquare = require('./5-square');

class Square extends ParentSquare {
  constructor(size) {
    super(size); // Call the constructor of the ParentSquare class with the size argument
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // If c is undefined, use 'X' as the default character
    }

    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;

