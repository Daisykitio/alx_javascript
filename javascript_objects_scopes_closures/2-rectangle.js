class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      // If w or h is not a positive integer or equal to 0, create an empty object.
      return {};
    } else {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;

