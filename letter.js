class Letter {
  constructor(x, y) {
    this.alphabets = ["Task 1", "Reminders", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"];
    this.letter = random(this.alphabets);
    this.size = random(10,30);

    this.x = x;
    this.y = y;
    this.dx=random(-5,5);
    this.dy=random(-5,5);
    
    this.angle = random(360);
    this.angleV = random(1);
  }
  
  update () {
    this.x += this.dx;
    this.y += this.dy;
    
    this.angle += this.angleV;
  }
  
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    textFont(font);
    textSize(50);
    text(this.letter, 0, 0);
    pop();
  }
  
  offScreen () {
    let margin = this.size * 2;
    if (this.x > width + margin || this.x < 0 - margin || this.y > height + margin || this.y < 0 - margin) {
      return true;
    } else {
      return false;
    }
  }
} 
