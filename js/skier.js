
function Skier (canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = this.canvas.width/2 - 0.5;
    this.y = 25;
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
    console.log(this.x)
}

Skier.prototype.moveRight = function (){
    this.x += this.vx;
    console.log(this.x)
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

Skier.prototype.hitObstacle = function (obstacle){
//     //console.log(obstacle)
//     var ax = this.x - this.radius;
//     var bx = this.x + this.radius;
//     var cx = obstacle.x - obstacle.radius;
//     var dx = obstacle.x + obstacle.radius;
//     var ay = this.y + this.radius;
//     var by = this.x - this.radius;
//     var cy = obstacle.x - obstacle.radius;
//     var dy = obstacle.x + obstacle.radius;
//     if (((cx =< ax) && (ax <= dx))||((bx >= cx) && (bx <= dx))){
//         if(((ay <= cy)&& (ay >= dy))|| ((by <= cy) && (by >= dy))){
            
//         }
//     } 
}