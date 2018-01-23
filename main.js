$(document).ready(() => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var fps = 60;
  var board = new Board(canvas, ctx);
  var skier = new Skier(canvas, ctx);
  var ejercito = [];
  var obstacle = new Obstacle(canvas, ctx);
  //var obstacleDos = new Obstacle(canvas, ctx);


  function createObstacle(a){
    while(a.length < 15){
        a.push(new Obstacle(canvas, ctx))
    }
  }


  function update_game() {
    board.draw();
    skier.update();
    skier.draw();
    createObstacle(ejercito);
    ejercito.forEach(function (e,i) {
      e.draw();
      e.update();
      e.collisionTop();
      skier.hitObstacle(e);
      stopGame(skier,e)
      if(e.isAlive == false){
        ejercito.splice(i,1)
      }
    })
    //console.log(ejercito)
    //obstacle.draw();
    //obstacle.update();
    // obstacleDos.draw();
    // obstacleDos.update();
    move();
    
    //obstacle.collisionTop();
  }

  document.onkeydown = function(e) {
    //console.log("DOWN");
    if (e.keyCode == 68) {
      skier.direction[0] = true;
    } else if (e.keyCode == 65) {
      skier.direction[1] = true;
    } else if (e.keyCode == 32){
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

  function startgame(){
    requestAnimationFrame(animate);
  }

});

function stopGame(s,e) {
  var cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
    if (s.hitObstacle(e) == true) {
      cancelAnimationFrame(animate);
    }
}
