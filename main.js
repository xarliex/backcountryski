$(document).ready(() => {
    var obstacle = new Obstacle();
    var skier = new Skier();
    var obstacleDos = new Obstacle();
    var board = new Board();

function startGame(){
    board.draw();
    obstacle.update(board.ctx);
    obstacle.draw(board.ctx);
    skier.update();
    skier.draw(board.ctx);
}

setInterval(startGame,1);

})

