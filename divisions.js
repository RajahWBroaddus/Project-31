class Divisions {
    constructor(x, y) {
        var options = {
            isStatic: true
        }

        this.height = 300;
        this.body = Bodies.rectangle(x, y, 10, this.height, options);
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill("darkgreen");
        stroke("green")
        rect(pos.x, pos.y, 20, this.height);
        pop();
    }
}