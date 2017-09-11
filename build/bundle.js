var debounce = false;
function setup() {
    var cvs = createCanvas(1024, 768);
    cvs.elt.id = "mainCanvas";
    noFill();
}
function draw() {
    if (mouseIsPressed && !debounce) {
        debounce = true;
        var numRays = Math.max(3, randomGaussian(7, 2));
        for (var i = 0; i < numRays; i++) {
            var angle = random(0, 360);
            var vec = p5.Vector.fromAngle(radians(angle));
            var numCircles = Math.max(1, randomGaussian(5, 2));
            for (var i_1 = 0; i_1 < numCircles; i_1++) {
                var size = random(5, 30);
                var x = mouseX + (vec.x * Math.abs(randomGaussian(0, 50)));
                var y = mouseY + (vec.y * Math.abs(randomGaussian(0, 50)));
                ellipse(x, y, size, size);
            }
        }
        setTimeout(function () { return debounce = false; }, 100);
    }
}
function circleLine(x1, y1, x2, y2) {
    var numCircles = Math.max(0, randomGaussian(5, 2));
    for (var i = 0; i < numCircles; i++) {
        var size = random(5, 30);
        var slope = (y2 - y1) / (x2 - x1);
        var length_1 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        var x = x1 + ((length_1 / (i + 1)) * slope);
        var y = y1 + ((length_1 / (i + 1)) * slope);
        ellipse(x, y, size, size);
    }
}
