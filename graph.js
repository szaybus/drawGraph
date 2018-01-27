canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');


function initGraph() {
  graphWidth = canvas.width;
  graphHeight = canvas.height;
  console.log("Wykryto rozmiar płótna: "+graphWidth+", "+graphHeight);
  // Rysuj osie wykresu
  ctx.moveTo(0, graphHeight/2);
  ctx.lineTo(graphWidth, graphHeight/2);
  ctx.stroke();
  ctx.moveTo(graphWidth/2, 0);
  ctx.lineTo(graphWidth/2, graphHeight);
  ctx.stroke();
  // Rysuj podziałkę na osiach
  for (var i = 0; i <= graphWidth; i = i + graphWidth/16) {
    ctx.moveTo(i, graphHeight/2 - 10);
    ctx.lineTo(i, graphHeight/2 + 10);
    ctx.stroke();
    ctx.fillText(i/100 - 4, i + 3, graphHeight/2 - 3);
  }
  for (var i = 0; i <= graphHeight; i = i + graphHeight/8) {
    ctx.moveTo(graphWidth/2 - 10, i);
    ctx.lineTo(graphWidth/2 + 10, i);
    ctx.stroke();
    ctx.fillText(2-i/100, graphWidth/2 + 3, i-3)
  }
}
function resetCanvas() {
  ctx.clearRect(0,0, graphWidth, graphHeight);
  initGraph();
}

function drawLinear() {
  a = parseInt(document.getElementById('linear_a').value);
  b = parseInt(document.getElementById('linear_b').value);
  console.log("Rysuje funkcję liniową...");
  for(var x = -4; x <= 4; x += 0.01) {
    drawPoint(x, a*x+b);
  }
}

function drawQuad() {
  a = parseInt(document.getElementById('quad_a').value);
  b = parseInt(document.getElementById('quad_b').value);
  c = parseInt(document.getElementById('quad_c').value);
  console.log("Rysuje funkcję kwadratową...");
  for(var x = -4; x <= 4; x += 0.01) {
    drawPoint(x, a*x*x+b*x+c);
  }
}

function drawPoint(x, y) {
  // translacja (<-4,4> do <-400, 400>) + przesunięcie (pół szer. w prawo)
  x = x * 100 + graphWidth/2;
  // y wymaga odwrócenia
  y = graphHeight/2 - y * 100;
  ctx.fillRect(x, y, 1, 1);
}
