# bric
Makes a brick in one of several purple-friendly, yet earthy, earthy colors.

## Installation

```npm install bric```

You also need to install Cairo, as brick depends on it.
To install on OS X:

```brew install pkg-config cairo libpng jpeg giflib```

For other systems, see [Cairo's download page](http://cairographics.org/download/).

## Usage

Put the following into a separate .js file, such as "app.js".

```
var bric = require('bric')

var width = 200
var height = 50

bric(width, height)
```

In the same folder as app.js, make a folder called "bricks". This is where your bricks will go.

Then, on the command line, run:

```$ node app.js```

Check the "bricks" folder. You should have a bunch of bricks that are 200 pixels wide by 50 pixels tall.
