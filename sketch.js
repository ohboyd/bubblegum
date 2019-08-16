let bubbles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  };
}

function mousePressed(){
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].clicked(mouseX, mouseY);
  };
}

function draw() {
  background(194, 151, 184);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  };
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 7;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if(d < this.r) {
      this.brightness = [254, 91, 172];
      console.log('clicked on bubble!');
    }
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(253, 207, 243);
    strokeWeight(4);
    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}
