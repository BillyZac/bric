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
    // Draw dark background, which will appear as a 2 px border.
    ctx.fillStyle = palette[1]; // A dark purple
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fill();
    
    // Draw the interior, pulling colors from the palette specified above.
    ctx.fillStyle = palette[i];
    ctx.beginPath();
    // By making this one 2px smaller than the border color, the brick gets a border.
    ctx.rect(2, 2, width-4, height-4);
    ctx.fill();
    fs.writeFile('./bricks/brick-' + width + 'px-' + height + 'px-' + palette[i] + '.png', canvas.toBuffer());
  }
}
