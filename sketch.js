function setup() {
    createCanvas(windowWidth, windowHeight );
    frameRate(10);
    background(255);
}

function draw() {
    let W = windowWidth/2
    let H = windowHeight/2
    let x = mouseX;
    let y = mouseY;


    noStroke();
    s0 = x * 0.9 + 100;
    fill(random(150,255),random(150,255),random(150,255),10);
    ellipse(width / 2, height / 2, s0);
    
    fill(255);
    stroke(255);
    line(W, H, x, y);
    ellipse(W, H , 100 );
    ellipse(x, y, 7, 7);

}