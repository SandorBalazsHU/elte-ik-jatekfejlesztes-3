class Wall extends fw.Entity {
    draw(ctx) {
        ctx.drawImage(Wall.image, this.x, this.y);
    }
}

Wall.image = fw.image('images/wall.jpg');