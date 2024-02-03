let stars = [];

function setup(){
    createCanvas(400, 400);
    for (let i = 0; 50; i++) {
        stars[i] = createVector(
            random(-width,width),
            random(-height,height),
            random(10, width)
        );
    }
}

function draw(){
    background(0);
    fill(255);
    translate( width / 2, height / 2);

    for (let star of stars) {
        let x = star.x / star.z;
        let y = star.y / star.z;
        let d = 16;
        circle(x, y, d);
    }
}
