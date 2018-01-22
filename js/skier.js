
function Skier () {
    this.x = 187.5;
    this.y = canvas.height - 25;
    this.vx = 1;
    this.vy = 0;
    this.radius = 20;
    this.color = "#00FFFF";
} 

Skier.prototype.draw = function (ctx){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
}

Skier.prototype.moveLeft = function (){
    this.x -= this.vx;
}

Skier.prototype.moveRight = function  (){
    this.x += this.vx;
}

Skier.prototype.update = function (){
    hitBorderRight();
    hitBorderLeft();
    hitObstacle();
    ctx.clearRect(0,0, canvas.width, canvas.height);    
    this.draw();
}

Skier.prototype.hitBorderRight = function (){
    var borderRight = canvas.width - this.radius;
    if (this.x >= borderRight){
        this.x = borderRight
    }
}

Skier.prototype.hitBorderLeft = function (){
    var borderLeft = this.radius;
    if (this.x >= borderLeft){
        this.x = borderLeft
    }
}

Skier.prototype.hitObstacle = function (obstacle){
    if (this.x === Obstacle.x && this.y === Obstacle.y){
        clearInterval(intervalID); //IMPIDO LA ACTUALIZACION DEL JUEGO
        alert("CRASHED!!!");
    }
}

