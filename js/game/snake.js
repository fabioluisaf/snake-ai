class Snake {
  constructor(position) {
    this.body = [];
    this.mvtIsHorizontal = true;
    this.mvtIsPositive = true;
    this.hasEaten = false;

    this.body.push(position);
    this.body.push(createVector(position.x - 1, position.y));
  }

  setMoveDirection(isHorizontal, isPositive) {
    if (isHorizontal !== this.mvtIsHorizontal) {
      this.mvtIsHorizontal = !this.mvtIsHorizontal;
      this.mvtIsPositive = isPositive;
    }
  }

  move() {
    let newHead;
    let head = this.body[0];

    let moveDir = this.mvtIsPositive ? 1 : -1;

    if (this.mvtIsHorizontal) {
      newHead = createVector(head.x + moveDir, head.y);
    } else {
      newHead = createVector(head.x, head.y - moveDir);
    }

    this.body.unshift(newHead);

    if (this.hasEaten) {
      this.hasEaten = false;
    } else {
      this.body.pop();
    }
  }

  eat() {
    this.hasEaten = true;
  }

  show(size, color) {
    noStroke();
    fill(color);

    for (let bodyPart of this.body) {
      square(bodyPart.x * size, bodyPart.y * size, size);
    }
  }
}
