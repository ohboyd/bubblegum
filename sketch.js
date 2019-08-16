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
  // since I'm deleting values here, iterating backwards ensures I don't  miss any values
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if(bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  };
}

function draw() {
  background(194, 151, 184);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    if(bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor([254, 91, 172]);
    } else {
      bubbles[i].changeColor(7);
    }
  };
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 7;
  }

  changeColor(arr) {
    this.brightness = arr;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if(d < this.r) {
      // this.brightness = [254, 91, 172];
      return true;
    } else {
      return false;
      // this.brightness = 7;
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
