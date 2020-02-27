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

    if (this.mvtIsHorizontal) {
      if (this.mvtIsPositive) {
        newHead = createVector(head.x + 1, head.y);
      } else {
        newHead = createVector(head.x - 1, head.y);
      }
    } else {
      if (this.mvtIsPositive) {
        newHead = createVector(head.x, head.y - 1);
      } else {
        newHead = createVector(head.x, head.y + 1);
      }
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
      rect(bodyPart.x * size, bodyPart.y * size, size, size);
    }
  }
}
