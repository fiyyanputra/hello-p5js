function setup() {
  createCanvas(640, 480);
}

function draw() {
  if(mouseIsPressed){
    noStroke();
    fill(255);
  }
  else{
    var value = random(0, 255);
    fill(value);
  }
  
  ellipse(mouseX, mouseY, 100, 100);
}