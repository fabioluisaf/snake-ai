class Food{
    constructor(position) {
        this.position = position;
    }

    show(size, color) {
        noStroke();
        fill(color);

        rect(this.position.x * size, this.position.y * size, size, size);
    }
}