
function Obstacle () {
    var randomPos = Math.random()*(canvas.width)
    this.x = randomPos;
    this.y = 0;
    this.vx = 0;
    this.vy = 2;
    this.radius = 30;
    this.color = "#DC143C";
} 

Obstacle.prototype.draw = function (ctx){
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
