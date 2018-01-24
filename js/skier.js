function Skier(canvas, ctx) {
  this.ctx = ctx;
  this.canvas = canvas;
  this.x = this.canvas.width / 2 - 0.5;
  this.y = 100;
  this.vx = 5;
  this.vy = 0;
  this.direction = [false, false];
  this.radius = 20;
  this.color = "#70e4ff";
  this.colorLife = "white";
  this.life = 100;
  this.score = 0;
}

Skier.prototype.draw = function(ctx) {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
};

Skier.prototype.drawScore = function(ctx) {
  this.ctx.font = "50px Comic Sans MS";
  this.ctx.fillStyle = "white";
  this.ctx.textAlign = "center";
  this.ctx.fillText(this.score, canvas.width / 2, canvas.height / 2);
};

Skier.prototype.drawHealthBar = function(ctx) {
  this.ctx.beginPath();
  this.ctx.rect(20, canvas.height - 20,(canvas.width * (this.life / 100)) - 45, 10);
  if (this.life > 63) {
    this.ctx.fillStyle = "green";
  } else if (this.life > 37) {
    this.ctx.fillStyle = "gold";
  } else if (this.life > 13) {
    this.ctx.fillStyle = "orange";
  } else {
    this.ctx.fillStyle = "red";
  }
  this.ctx.closePath();
  this.ctx.fill();
};

Skier.prototype.moveLeft = function() {
  this.x -= this.vx;
};

Skier.prototype.moveRight = function() {
  this.x += this.vx;
};

Skier.prototype.update = function() {
  this.hitBorderRight();
  this.hitBorderLeft();
  this.draw();
  this.drawScore();
  this.drawHealthBar();
};

Skier.prototype.hitBorderRight = function() {
  var borderRight = this.canvas.width - this.radius;
  if (this.x >= borderRight) {
    this.x = borderRight;
  }
};

Skier.prototype.hitBorderLeft = function() {
  var borderLeft = this.radius;
  if (this.x <= borderLeft) {
    this.x = borderLeft;
  }
};

Skier.prototype.hitObstacle = function(obs) {
  if (Math.abs(obs.x - this.x) < this.radius + obs.radius - 5) {
    if (Math.abs(obs.y - this.y) < this.radius + obs.radius - 5) {
      this.life = this.life - 1;
      console.log(this.life);
      console.log("Chocamos");
      return true;
    }
  }
};

Skier.prototype.hitPower = function(pwr) {
  if (Math.abs(pwr.x - this.x) < this.radius + pwr.radius - 5) {
    if (Math.abs(pwr.y - this.y) < this.radius + pwr.radius - 5) {
      if (this.life >= 95) {
        this.life += 100 - this.life;
      } else {
        this.life += 5;
      }
      pwr.isAlive = false;
      console.log(this.life);
      console.log("FUCK YEAHHHHHHHH!!!!");
      return true;
    }
  }
};
