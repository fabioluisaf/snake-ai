class Food {
  constructor(position) {
    this.position = position;
  }

  show(size, color) {
    noStroke();
    fill(color);

    square(this.position.x * size, this.position.y * size, size);
  }
}
