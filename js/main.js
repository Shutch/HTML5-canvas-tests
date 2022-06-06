window.addEventListener("resize", function() {
  draw();
});

function draw() {
  var canvas = document.getElementById('main-canvas');
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.clearRect(0, 0, w, h);

    let maxRad = 20;
    let minRad = maxRad * Math.sqrt(3) / 2;
    let columns = Math.floor(w / (minRad * 2)) + 2;
    let rows = Math.floor(h / (maxRad * 2)) + 2;
    console.log([columns, rows]);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        let linewidth = 2;
        ctx.lineWidth = linewidth;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0095DD';
        drawHexagon(ctx, x * 2 * minRad, y * maxRad * 2, maxRad, 0);
        drawHexVertexes(ctx, x * 2 * minRad, y * maxRad * 2, maxRad, 0)
      }
    }
  }
}

function drawHexagon(ctx, xMid, yMid, maxRad, angle) {
  let minRad = maxRad * Math.sqrt(3) / 2;

  ctx.save();

  ctx.translate(xMid, yMid);
  ctx.rotate((Math.PI / 180) * angle);

  // starts top center, works clockwise
  ctx.beginPath();
  ctx.moveTo(0, -maxRad);
  ctx.lineTo(minRad, -maxRad / 2);
  ctx.lineTo(minRad, maxRad / 2);
  ctx.lineTo(0, maxRad);
  ctx.lineTo(-minRad, maxRad / 2);
  ctx.lineTo(-minRad, -maxRad / 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

function drawHexVertexes(ctx, xMid, yMid, maxRad, angle) {
  let minRad = maxRad * Math.sqrt(3) / 2;

  ctx.save();

  ctx.translate(xMid, yMid);
  ctx.rotate((Math.PI / 180) * angle);

  endPoints = [
    [minRad, -maxRad / 2], // top right
    [-minRad, -maxRad / 2], // top left
    [0, maxRad] // bottom
  ];

  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(endPoints[i][0], endPoints[i][1]);
    ctx.closePath();
    ctx.stroke();
  }

  ctx.restore();
}
