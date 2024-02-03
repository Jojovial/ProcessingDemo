let star;

function setup(){
    createCanvas(400, 400);
    star = createVector(200, 200, 0);
}

function draw(){
    background(0);
    fill(255);
    translate( width / 2, height / 2);

    let x = star.x / star.z;
    let y = star.y / star.z;

    let d = map(star.z, 0, 400, 1, 10);
    circle(x, y, d);

    star.z += 10;
}
