function Obstacle (canvas, ctx) {
    var randomPos = Math.random()*(canvas.width)
    this.x = randomPos;
    this.y = 812;
    this.vx = 0;
    this.vy = -5;
    this.radius = 30;
    this.color = "white";
    this.ctx = ctx;
} 

Obstacle.prototype.draw = function (){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
}

Obstacle.prototype.update = function (){
    this.y += this.vy;
    this.draw();
}

