function Board(canvas, ctx){
    this.canvas = canvas
    this.ctx = ctx
}

Board.prototype.draw =function(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
}

