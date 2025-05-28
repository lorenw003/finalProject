class ExplodingText {
  constructor(messages) {
    this.messages = messages;
    this.size = 0;
    this.maxSize = 100;
    this.baseSize = 20;
    this.pickNew();
  }

  pickNew() {
    this.currentMessage = random(this.messages);
    this.x = random(width - 100);
    this.y = random(height - 100);
    this.textColor = color(random(255), random(255), random(255));
    this.size = this.baseSize;
  }

  display() {
    background(random(220), random(220), random(220));

    if (this.size < this.maxSize) {
      this.size += 3;
    } else {
      this.pickNew();
    }

    fill(this.textColor);
    textSize(this.size);
    text(this.currentMessage, this.x, this.y);
  }
}
