let debounce = false;

function setup() {
    const cvs = createCanvas(1024, 768);
    cvs.elt.id = "mainCanvas";
    noFill();
}

function draw() {
    if (mouseIsPressed && !debounce) {
        debounce = true;
        const numRays = Math.max(3, randomGaussian(7, 2));
        for (let i = 0; i < numRays; i++) {
            const angle = random(0, 360);
            const vec = p5.Vector.fromAngle(radians(angle));
            const numCircles = Math.max(1, randomGaussian(5, 2));
            for (let i = 0; i < numCircles; i++) {
                const size = random(5, 30);
                const x = mouseX + (vec.x * Math.abs(randomGaussian(0, 50)));
                const y = mouseY + (vec.y * Math.abs(randomGaussian(0, 50)));
                ellipse(x, y, size, size);
            }
        }
        setTimeout(() => debounce = false, 100);
    }
}
