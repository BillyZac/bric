module.exports = brick

var Canvas = require('canvas')
var fs = require('fs')

var palette = [
  'rgb(146, 143, 144)', // hsla(340, 2, 57, 1)
  'rgb( 39,  33,  58)', // hsla(254, 43, 23, 1)
  'rgb( 62,  52,  73)', // hsla(269, 29, 29, 1)
  'rgb( 67,  52,  73)', // hsla(283, 29, 29, 1)
  'rgb(100,  85,  95)', // hsla(320, 15, 39, 1)
  'rgb(137, 113, 144)', // hsla(286, 22, 56, 1)
  'rgb(146, 133, 132)', // hsla(4, 10, 57, 1)
  'rgb( 73,  59,  18)', // hsla(45, 75, 29, 1)
  'rgb( 81,  43,  32)', // hsla(13, 60, 32, 1)
  'rgb(111,  91,  38)'  // hsla(44, 66, 44, 1)
]

var paletteHSLA = [
  'hsla(340, 2%, 57%, 1)',
  'hsla(254, 43%, 23%, 1)',
  'hsla(269, 29%, 29%, 1)',
  'hsla(283, 29%, 29%, 1)',
  'hsla(320, 15%, 39%, 1)',
  'hsla(286, 22%, 56%, 1)',
  'hsla(4,  10%, 57%, 1)',
  'hsla(45, 75%, 29%, 1)',
  'hsla(13, 60%, 32%, 1)',
  'hsla(44, 66%, 44%, 1)'
]

function brick(width, height) {
  var canvas = new Canvas(width, height, 'png');
  var timeStamp = Date.now()

  ctx = canvas.getContext('2d');

  for (var i=0; i < paletteHSLA.length; i++) {
    // Draw dark background, which will appear as a 2 px border.
    ctx.fillStyle = paletteHSLA[1]; // A dark purple
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fill();

    // Draw the interior, pulling colors from the palette specified above.
    ctx.fillStyle = paletteHSLA[i];
    ctx.beginPath();
    // By making this one 2px smaller than the border color, the brick gets a border.
    ctx.rect(2, 2, width-4, height-4);
    ctx.fill();
    fs.writeFile('./bricks/brick-' + width + 'px-' + height + 'px-' + paletteHSLA[i] + '.png', canvas.toBuffer());
  }
}
