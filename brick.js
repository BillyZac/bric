module.exports = brick

var Canvas = require('canvas')
var fs = require('fs')

var palette = [
  'rgb(146, 143, 144)',
  'rgb( 39,  33,  58)',
  'rgb( 62,  52,  73)',
  'rgb( 67,  52,  73)',
  'rgb(100,  85,  95)',
  'rgb(137, 113, 144)',
  'rgb(146, 133, 132)',
  'rgb( 73,  59,  18)',
  'rgb( 81,  43,  32)',
  'rgb(111,  91,  38)'
]

function brick(width, height) {
  var canvas = new Canvas(width, height, 'png');
  var timeStamp = Date.now()

  ctx = canvas.getContext('2d');

  for (var i=0; i < palette.length; i++) {
    ctx.fillStyle = palette[i];
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fill();
    fs.writeFile('./bricks/out-' + timeStamp + '-' + palette[i] + '.png', canvas.toBuffer());
  }

}
