var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

fw.load([Hero.image, Wall.image], function() {
    setInterval(update, 16);
});

const entities = [
    new Hero(100, 100),
    new Wall(0, 100),
    new Wall(0, 200),
    new Wall(0, 300),
];

function update() {
   for (const entity of entities) {
       entity.update();
   }

   ctx.clearRect(0, 0, canvas.width, canvas.height);

   for (const entity of entities) {
      entity.draw(ctx);
   }
}