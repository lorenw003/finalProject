class BezierLine {
  constructor() {
    this.setRandomPoints();
  }

  setRandomPoints() {
    this.oldX = random(10, width - 10);
    this.oldY = random(10, height - 10);
    this.nextX = random(10, width - 10);
    this.nextY = random(10, height - 10);
    this.x3 = random(0, width);
    this.y3 = random(0, height);
    this.x4 = random(0, width);
    this.y4 = random(0, height);
  }

  newPoints() {
    this.oldX = this.nextX;
    this.oldY = this.nextY;
    this.x3 = random(0, width);
    this.y3 = random(0, height);
    this.x4 = random(0, width);
    this.y4 = random(0, height);
    this.nextX = random(0, width);
    this.nextY = random(0, height);
  }

  display() {
    noFill();
    stroke(0);
    strokeWeight(1);
    bezier(this.nextX, this.nextY, this.x3, this.y3, this.x4, this.y4, this.oldX, this.oldY);
  }
}
