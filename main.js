$(document).ready(() => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  var fps = 60;
  var board = new Board(canvas, ctx);
  var skier = new Skier(canvas, ctx);
  var ejercito = [];
  var redbull = [];
  //var obstacle = new Obstacle(canvas, ctx);
  //var obstacleDos = new Obstacle(canvas, ctx);

  function createObstacle(a) {
    while (a.length < 15) {
      a.push(new Obstacle(canvas, ctx));
    }
  }

  function createProtection(a){
    while (a.length < 2){
      a.push(new Power(canvas,ctx));
    }
  }


  function update_game() {
    board.draw();
    skier.update();
    skier.draw();
    skier.drawScore();
    skier.drawHealthBar();
    move();
    createObstacle(ejercito);
    ejercito.forEach(function(e, i) {
      e.draw();
      e.update();
      e.collisionTop();
      skier.hitObstacle(e);
      stopGame(skier, e);
      if (e.isAlive == false) {
        skier.score += 1;
        ejercito.splice(i, 1);
      }
    });
    createProtection(redbull);
    redbull.forEach(function(e,i){
      e.draw();
      e.update();
      e.collisionTop();
      skier.hitPower(e);
      if (e.isAlive == false){
        redbull.splice(i,1);
      }
    });
  }

  document.onkeydown = function(e) {
    //console.log("DOWN");
    if (e.keyCode == 68) {
      skier.direction[0] = true;
    } else if (e.keyCode == 65) {
      skier.direction[1] = true;
    } else if (e.keyCode == 32) {
      startgame();
    }
  };

  document.onkeyup = function(e) {
    //console.log("UP");
    if (e.keyCode == 68) {
      skier.direction[0] = false;
    } else if (e.keyCode == 65) {
      skier.direction[1] = false;
    }
  };

  function move() {
    if (skier.direction[0] == true) {
      //console.log("RIGHT")
      skier.moveRight();
    } else if (skier.direction[1] == true) {
      //console.log("LEFT")
      skier.moveLeft();
    }

    (function() {
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();
  }

  function animate() {
    update_game();
    requestAnimationFrame(animate);
  }

  function startgame() {
    requestAnimationFrame(animate);
   }

});

function stopGame(s, e) {
  var cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  if (s.life <= -1) {
    if (s.hitObstacle(e) == true) {
      s.life = 0;
      cancelAnimationFrame(animate);
    }
  }
}
