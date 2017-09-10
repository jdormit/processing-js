function setup() {
    var cvs = createCanvas(640, 480);
    cvs.elt.id = "mainCanvas";
}
function draw() {
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 80, 80);
    }
}
