var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth / 3;
canvas.height = window.innerHeight / 2;

var score = 0;
var lives = 3;

function yourScore() {
  c.font = "16px Arial";
  c.fillStyle = "rgb(233, 89, 108)";
  c.fillText("Score: " + score, 8, 20);
}
function live() {
  c.font = "16px Arial";
  c.fillStyle = "rgb(233, 89, 108)";
  c.fillText("Lives: " + lives, canvas.width - 65, 20);
}
var brickRows = 5;
var brickColumns = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (let i = 0; i < brickColumns; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickRows; j++) {
    bricks[i][j] = { x: 0, y: 0, status: 1 };
  }
}

function drawBricks() {
  for (let i = 0; i < brickColumns; i++) {
    for (let j = 0; j < brickRows; j++) {
      if (bricks[i][j].status == 1) {
        var brickX = j * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = i * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[i][j].x = brickX;
        bricks[i][j].y = brickY;
        c.beginPath();
        c.rect(brickX, brickY, brickWidth, brickHeight);
        c.fillStyle = "rgb(233, 89, 108)";
        c.fill();
        c.closePath();
      }
    }
  }
}

var radius = 12;
var x = canvas.width / 2;
var y = canvas.height - 30;
function ball() {
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2);
  c.fillStyle = "rgb(233, 89, 108)";
  c.fill();
  c.closePath();
}
var baseHeight = 10;
var baseWidth = 100;
var baseX = (canvas.width - baseWidth) / 2;
function drawBase() {
  c.beginPath();
  c.rect(baseX, canvas.height - baseHeight, baseWidth, baseHeight);
  c.fillStyle = "rgb(233, 89, 108)";
  c.fill();
  c.closePath();
}
function mouseMove(event) {
  var X = event.clientX - canvas.offsetLeft;
  if (X > 0 && X < canvas.width) {
    baseX = X - baseWidth / 2;
  }
}
function keyDown(event) {
  if (event.key == "Right" || event.key == "ArrowRight") {
    right = true;
  } else if (event.key == "Left" || event.key == "ArrowLeft") {
    left = true;
  }
}

function keyUp(event) {
  if (event.key == "Right" || event.key == "ArrowRight") {
    right = false;
  } else if (event.key == "Left" || event.key == "ArrowLeft") {
    left = false;
  }
}
function collision() {
  for (var i = 0; i < brickColumns; i++) {
    for (var j = 0; j < brickRows; j++) {
      var bri = bricks[i][j];
      if (bri.status == 1) {
        if (
          x > bri.x &&
          x < bri.x + brickWidth &&
          y > bri.y &&
          y < bri.y + brickHeight
        ) {
          dy = -dy;
          bri.status == 0;

          score++;
          console.log("increment score");
          if (score == brickRows * brickColumns) {
            alert("Congratulatios!! YOU WON");
            document.location.reload();
          }
        }
      }
    }
  }
}

document.addEventListener("mousemove", mouseMove, false);
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

var dx = 2;
var dy = -2;
var right = false;
var left = false;
function game() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  yourScore();
  live();
  drawBricks();
  ball();
  drawBase();
  collision();

  if (x + dx > canvas.width - radius || x + dx < radius) {
    dx = -dx;
  }
  if (y + dy < radius) {
    dy = -dy;
  } else if (y + dy > canvas.height - radius) {
    if (x > baseX && x < baseX + baseWidth) {
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        baseX = (canvas.width - baseWidth) / 2;
      }
    }
  }

  if (right && baseX < canvas.width - baseWidth) {
    baseX += 7;
  } else if (left && baseX > 0) {
    baseX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(game);
}
game();
