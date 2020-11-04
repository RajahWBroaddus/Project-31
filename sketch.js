const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var particles = [];
var plinkos = [];
var divisions = [];



function setup() {
    createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();
    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisions(k, height - 150, 10, this.height));
    }
    for (var j = 75; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 175));
    }

    for (var j = 75; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 275));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 375));
    }
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    if (frameCount % 45 === 0) {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 10, 10))
    }
    for (var i = 0; i < particles.length; i++) {
        particles[i].display();
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

}