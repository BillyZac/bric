module.exports = brick

var Canvas = require('canvas')
var fs = require('fs')

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

  // Each noise grain is 10px by 10px
  var grainDimension = 10

  ctx = canvas.getContext('2d');

  // Draw dark background, which will appear as a 2 px border.
  ctx.fillStyle = paletteHSLA[1]; // A dark purple
  ctx.beginPath();
  ctx.rect(0, 0, width, height);
  ctx.fill();

  // Draw the interior
  // Pick a random color from the palette specified above.
  var brickColor = randomColor(paletteHSLA)
  ctx.fillStyle = brickColor
  ctx.beginPath();
  // By making this one 2px smaller than the border color, the brick gets a border.
  ctx.rect(
    grainDimension,
    grainDimension,
    width - grainDimension * 2,
    height - grainDimension * 2);
  ctx.fill();

  addNoise(width, height, grainDimension)

  fs.writeFile('./bricks/brick-' + width + 'px-' + height + 'px-' + brickColor + '.png', canvas.toBuffer());
}

function addNoise(width, height, grainDimension) {
  for (var i=0; i<50; i++) {
    // Find a random spot on the canvas.
    // Make sure it's on a 10px grid, i.e. x = 60, not x = 62
    var x = Math.floor(Math.random() * width / grainDimension) * grainDimension
    var y = Math.floor(Math.random() * height / grainDimension) * grainDimension
    // Choose a color at random from our palette
    // var paletteIndex = Math.floor(Math.random() * paletteHSLA.length)
    ctx.fillStyle = randomColor(paletteHSLA)
    // Tone down the opacity of the grain
    ctx.globalAlpha = 0.15
    ctx.beginPath()
    ctx.rect(x, y, grainDimension, grainDimension)
    ctx.fill()
  }
  // Reset the opacity.
  // This isn't necessary as long as the palette specifies in hsla, but just to be on the safe side.
  ctx.globalAlpha = 0.15
}

// Given an array of colors,
// return one at random (returns an hsla string)
function randomColor(palette) {
  var index = Math.floor(Math.random() * palette.length)
  return palette[index]
}
