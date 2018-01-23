
function Skier (canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = this.canvas.width/2 - 0.5;
    this.y = 50;
    this.vx = 8;
    this.vy = 0;
    this.direction =[false,false];
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

Skier.prototype.moveRight = function (){
    this.x += this.vx;
}

Skier.prototype.update = function (){
    this.hitBorderRight();
    this.hitBorderLeft();
    this.draw();
}

Skier.prototype.hitBorderRight = function (){
    var borderRight = this.canvas.width - this.radius;
    if (this.x >= borderRight){
        this.x = borderRight
    }
}

Skier.prototype.hitBorderLeft = function (){
    var borderLeft = this.radius;
    if (this.x <= borderLeft){
        this.x = borderLeft
    }
}


Skier.prototype.hitObstacle = function (obs){
    if (Math.abs(obs.x - this.x) < (this.radius + obs.radius)-5 ){
        if(Math.abs(obs.y - this.y) < (this.radius + obs.radius)-5 ){
            console.log("Chocamos")
            //alert ("CRASH")
        }
    }
}
