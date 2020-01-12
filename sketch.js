let bubbles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

textSize(200);
textAlign(CENTER, CENTER);
fill(0);
text('Join', 30, height/2, width)
textSize(20);
text('click the screen', 30, height/2+100, width)
  for (let i = 0; i < bubbles.length; i++) {
    for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function mousePressed() {
   let x = mouseX;
    let y = mouseY;
    let r = 100;
    let b = new Bubble(x, y, r);
    bubbles.push(b)
    bubbles[ bubbles.length-1].move();
    bubbles[ bubbles.length-1].show();
  if(bubbles.length > 40){
    bubbles.pop();
    bubbles.pop();
     bubbles.pop();
    bubbles.pop();
  }
}



class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = 100;
	this.r = random(0,255);
	this.g = random(0,255);
	this.b = random(0,255);
	this.z = 20;
    this.brightness = 0;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
    }
  }

  move() {
    this.x = this.x +  random(random(-this.z, this.z),random(-this.z, this.z));
    this.y = this.y + random(random(-this.z, this.z),random(-this.z, this.z));
  }

  show() {
    stroke(255);
    strokeWeight(0);
    fill(this.brightness, 125);
	fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, this.r );
  }
}