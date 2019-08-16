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
  for (let b of bubbles) {
    b.move();
    b.show();
    let overlapping = false;
    for (let other of bubbles) {
      if (b.intersects(other) && b !== other) {
        overlapping = true;
      };

      if (overlapping) {
        b.changeColor([254, 91, 172]);
      } else {
        b.changeColor(0);
      }
    }
  };
}

class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 7;
  }

  changeColor(arr) {
    this.brightness = arr;
  }

  // check if bubble has another bubble inside of it
  intersects(otherBubble) {
    let d = dist(this.x, this.y, otherBubble.x, otherBubble.y)
    return (d < (this.r + otherBubble.r))
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

// This is example code to test how two bubbles could intersect one another and change the background if so
// let bubble1;
// let bubble2;
//
// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);
//   bubble1 = new Bubble(200, 300);
//   bubble2 = new Bubble(300, 300);
// }
//
// function draw() {
//   background(0);
//
//   if(bubble1.intersects(bubble2)) {
//     background(125, 150, 175);
//   };
//
//   bubble1.move();
//   bubble1.show();
//   bubble2.move();
//   bubble2.show();
// }
