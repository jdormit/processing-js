var debounce = false;
function setup() {
    var cvs = createCanvas(1024, 768);
    cvs.elt.id = "mainCanvas";
}
function draw() {
    if (mouseIsPressed && !debounce) {
        debounce = true;
        var numRays = random(3, 6);
        for (var i = 0; i < numRays; i++) {
            var angle = random(0, 360);
            var vec = p5.Vector.fromAngle(radians(angle));
            var slope = vec.y / vec.x;
            var numCircles = random(3, 8);
            for (var i_1 = 0; i_1 < numCircles; i_1++) {
                var size = random(5, 15);
                var y = mouseY + randomGaussian(0, 25);
                var x = slope * (y - mouseY) + mouseX;
                ellipse(x, y, size, size);
            }
        }
        setTimeout(function () { return debounce = false; }, 100);
    }
}
