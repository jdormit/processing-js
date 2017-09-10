function setup() {
    var cvs = createCanvas(1024, 768);
    cvs.elt.id = "mainCanvas";
    noFill();
}
function draw() {
    if (mouseIsPressed) {
        var numCircles = Math.max(0, randomGaussian(3, 2));
        for (var i = 0; i < numCircles; i++) {
            var size = Math.max(0, randomGaussian(15, 5));
            var deltaX = randomGaussian(25, 25);
            var deltaY = randomGaussian(25, 25);
            ellipse(mouseX + deltaX, mouseY + deltaY, size, size);
        }
    }
}
