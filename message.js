class TypingText {
  constructor(x, y, size = 80, typingSpeed = 5, blinkRate = 20) {
    this.messages = ["I CANT THINK", "I NEED QUIET", "It's too loud", "AHHHHH", "HELP ME"];
    this.x = x;
    this.y = y;
    this.textSize = size;
    this.typingSpeed = typingSpeed;
    this.cursorBlinkRate = blinkRate;

    this.setNewMessage();
    this.textToShow = '';
    this.index = 0;
    this.frameCountdown = 0;
  }

  setNewMessage() {
    this.message = random(this.messages);
    this.textToShow = '';
    this.index = 0;
    this.frameCountdown = 0;
  }

  type() {
    textSize(this.textSize);
    fill(random(0, 255), random(0, 255), random(0, 255));
    
    let cursor = (frameCount % this.cursorBlinkRate < this.cursorBlinkRate / 2) ? '|' : '';
    text(this.textToShow + cursor, this.x, this.y);

    if (this.frameCountdown <= 0) {
      if (this.index < this.message.length) {
        this.textToShow += this.message[this.index];
        this.index++;
        this.frameCountdown = this.typingSpeed;
      }
    } else {
      this.frameCountdown--;
    }
  }
}
