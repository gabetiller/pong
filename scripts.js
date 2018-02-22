
window.onload = function() {

  var canvas = document.getElementById('table')
  var ctx = canvas.getContext('2d');

  function table() {
    ctx.fillRect(0, 0, 700, 500);
    document.body.appendChild(canvas);
  };
  table();

  function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  Paddle.prototype.render = function() {
    ctx.fillStyle = "#ffa500";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  function Ball(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  Ball.prototype.render = function() {
    ctx.fillStyle = "#ffa500";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  var computer = new Paddle(30, 205, 20, 90);
  var player = new Paddle(650, 205, 20, 90);
  var ball = new Ball(320, 240, 20, 20);

  function render() {
    computer.render();
    player.render();
    ball.render();
  }
  render();

};
