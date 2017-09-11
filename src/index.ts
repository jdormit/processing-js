let debounce = false;

function setup() {
    const cvs = createCanvas(1024, 768);
    cvs.elt.id = "mainCanvas";
}

function draw() {
    if (mouseIsPressed && !debounce) {
        debounce = true;
        const numRays = random(3, 6);
        for (let i = 0; i < numRays; i++) {
            const angle = random(0, 360);
            const vec = p5.Vector.fromAngle(radians(angle));
            const slope = vec.y / vec.x;
            const numCircles = random(3, 8);
            for (let i = 0; i < numCircles; i++) {
                const size = random(5, 15);
                const y = mouseY + randomGaussian(0, 25);
                const x = slope * (y - mouseY) + mouseX;
                ellipse(x, y, size, size);
            }
        }
        setTimeout(() => debounce = false, 200);
    }
}
