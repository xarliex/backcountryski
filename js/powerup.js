function Power(canvas, ctx) {
  var randomPosX = Math.random() * canvas.width;
  var randomPosY = Math.ceil(
    Math.random() * (canvas.height * 20 - canvas.height) + canvas.height
  );
  this.x = randomPosX;
  this.y = randomPosY;
  this.vx = 1;
  this.vy = -7;
  this.radius = 15;
  this.color = "red";
  this.ctx = ctx;
  this.isAlive = true;
  this.counter = 0;
}

Power.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
};

Power.prototype.update = function() {
  this.counter++;
  if (this.counter % 100 == 0) {
    this.vx = this.vx * -1;
  }
  this.y += this.vy;
  this.x += this.vx;
  this.draw();
};

Power.prototype.collisionTop = function() {
  if (this.y <= -60) {
    this.isAlive = false;
    //   } else if (Skier.hitpower() = true){
    //       this.isAlive = false;
  }
};
