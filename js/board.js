function Board(){
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
}

Board.prototype.draw=function(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
}

