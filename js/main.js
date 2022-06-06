document.addEventListener('DOMContentLoaded', function() {
  let maxRad = document.querySelector('#maxRad');
  let maxRadOutput = document.querySelector('#maxRadOutput');
  maxRadOutput.textContent = maxRad.value;

  maxRad.addEventListener('input', function() {
    maxRadOutput.textContent = maxRad.value;
    draw();
  });
});

function draw() {
  var canvas = document.getElementById('mainCanvas');
  if (canvas.getContext) {
    var rect = canvas.parentNode.getBoundingClientRect();
    let w = canvas.width;
    let h = canvas.height;
    console.log(rect);

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    var maxRad = document.querySelector('#maxRad').value;

    for (let y = 0; y < 30; y++) {
      for (let x = 0; x < 30; x++) {
        let linewidth = 2;
        ctx.lineWidth = linewidth;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0095DD';
        drawHexagon(ctx, x * maxRad * 2 * Math.sqrt(3) / 2, y * maxRad * 2, maxRad, 0);
        drawHexVertexes(ctx, x * maxRad * 2 * Math.sqrt(3) / 2, y * maxRad * 2, maxRad, 0)
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
