function setup() {
    const cvs = createCanvas(1024, 768);
    cvs.elt.id = "mainCanvas";
    noFill();
}

function draw() {
    if (mouseIsPressed) {
        const numCircles = Math.max(0, randomGaussian(3, 2));
        for (let i = 0; i < numCircles; i++) {
            const size = Math.max(0, randomGaussian(15, 5));
            const deltaX = randomGaussian(25, 25);
            const deltaY = randomGaussian(25, 25);
            ellipse(mouseX + deltaX, mouseY + deltaY, size, size);
        }
    }
}
