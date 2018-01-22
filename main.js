$(document).ready(() => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var fps = 60;
  var board = new Board(canvas, ctx);
  var skier = new Skier(canvas, ctx);
  var obstacle = new Obstacle(canvas, ctx);
  //var obstacleDos = new Obstacle(canvas, ctx);

  function startGame() {
    //ctx.clearRect(0,0, canvas.width, canvas.height);
    board.draw();
    obstacle.update();
    obstacle.draw();
    move();
    skier.update();
    skier.draw();
    skier.hitObstacle(obstacle);
  }

  // document.onkeydown = function(e) {
  //   if (e.keyCode == 68) {
  //     skier.moveRight();
  //   } else if (e.keyCode == 65) {
  //     skier.moveLeft();
  //   }
  // };

  document.onkeydown = function(e) {
    console.log("DOWN");
    if (e.keyCode == 68) {
      skier.direction[0] = true;
    } else if (e.keyCode == 65) {
      skier.direction[1] = true;
    }
  };
  document.onkeyup = function(e) {
    console.log("UP");
    if (e.keyCode == 68) {
      skier.direction[0] = false;
    } else if (e.keyCode == 65) {
      skier.direction[1] = false;
    }
  };
  function move() {
    if (skier.direction[0] == true) {
      skier.moveRight();
    } else if (skier.direction[1] == true) {
      skier.moveLeft();
    }
    //setInterval(startGame, 300);
    //requestAnimationFrame(startGame)
    (function() {
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();
  }

function step() {
      startGame();
      requestAnimationFrame(step);
      console.log("hola");
    }

    requestAnimationFrame(step);
});
