class ClaresMoves {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  //Methods
  position() {
    let positionMessage = "X = " + this.x + " " + " Y = " + this.y;
    return positionMessage;
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }

  reset() {
    this.x = 0;
    this.y = 0;
  }

  distance() {
    let distance = this.x * this.x + this.y * this.y;
    return distance;
  }
}

const Clare1 = new ClaresMoves();
Clare1.moveBy(4, 3);
// Clare1.moveBy(3, 1);
console.log(Clare1.position());
// Clare1.reset();
// console.log(Clare1.position());
console.log(Clare1.distance());
