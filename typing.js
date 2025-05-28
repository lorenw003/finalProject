class TypingMessage {
  constructor(messages) {
    this.messages = messages;
    this.charIndex = 0;
    this.lastTypedTime = 0;
    this.typingFinished = false;
    this.timeFinished = 0;
    this.nextMessageDelay = 10; // in milliseconds

    this.pickNewMessage();
  }

  pickNewMessage() {
    this.currentMessage = random(this.messages);
    this.textX = random(width);
    this.textY = random(height);
    this.textSize = random(10, 100);
    this.textColor = color(random(255), random(255), random(255));
    this.charIndex = 0;
    this.typingFinished = false;
  }

  display() {
    fill(this.textColor);
    textSize(this.textSize);
    this.typeText(this.currentMessage, 50, this.textX, this.textY); // speed = 50ms per char

    if (this.typingFinished && millis() - this.timeFinished > this.nextMessageDelay) {
      this.pickNewMessage();
    }
  }

  typeText(textToType, speed, x, y) {
    if (millis() - this.lastTypedTime > speed && this.charIndex <= textToType.length) {
      this.charIndex++;
      this.lastTypedTime = millis();
    }

    text(textToType.substring(0, this.charIndex), x, y);

    if (this.charIndex === textToType.length && !this.typingFinished) {
      this.typingFinished = true;
      this.timeFinished = millis();
    }
  }
}
