let cam, obj, startingPX, rotateAngle, speed;

function setup() {
    createCanvas(800, 600);
    rectMode(CENTER);
    angleMode(DEGREES);
    speed = 2;
    cam = createVector(50, 500);
    obj = createVector(width / 2, height / 4);
};

function draw() {
    background(0);

    rotateAngle = atan2(obj.y - cam.y, obj.x - cam.x);

    push();
    stroke(255);
    strokeWeight(10);
    line(50, 500, 750, 500);
    pop();

    push();
    stroke(255, 110, 199);
    strokeWeight(3);
    line(obj.x, obj.y, cam.x, cam.y);
    translate(cam.x, cam.y);
    rotate(rotateAngle + 90);
    fill(100);
    noStroke();
    rect(0, 0 - 10, 20, 60);
    rect(0, 0, 50, 50);
    pop();

    push();
    fill(255);
    ellipse(obj.x, obj.y, 30, 30);
    pop();
    
    push();
    textSize(16);
    fill(255);
    text(`Angle: ${floor(rotateAngle + 90)}`, 25, 25);
    pop();

    if (cam.x < 50 || cam.x > 750) {
        speed = -speed;
    }
    cam.x = cam.x + speed
};
