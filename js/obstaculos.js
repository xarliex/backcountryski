function Obstacle (canvas, ctx) {
    var randomPosX = Math.random()*(canvas.width)
    var randomPosY = Math.ceil(Math.random()*((canvas.height*2)-canvas.height)+canvas.height)
    this.x = randomPosX;
    this.y = randomPosY;
    this.vx = 0;
    this.vy = -7;
    this.radius = 15;
    this.color = "#78d168";
    this.ctx = ctx;
    this.isAlive = true;
} 

Obstacle.prototype.draw = function (){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    //console.log(this.y)
}

Obstacle.prototype.update = function (){
    this.y += this.vy;
    this.draw();
}

Obstacle.prototype.collisionTop = function (){
    if(this.y <= -60){
        this.isAlive = false;
    }
}



