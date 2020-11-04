class Particle {
    constructor(x, y) {
        var options = {
            'restitiution': 1.5,
            'friction': 0,
            'density': 25,
            'frictionAir': 0
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);

        // this.height = height;
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill(this.color);
        noStroke();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius * 2)
        pop();
    }
}