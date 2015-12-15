# brick
Makes several bricks in various purple-friendly, yet earthy, earthy colors.

## Installation

```npm install bric```

You also need to install Cairo, as brick depends on it.
To install on OS X:

```brew install pkg-config cairo libpng jpeg giflib```

For other systems, see [Cairo's download page](http://cairographics.org/download/).

## Usage

Put the following into a separate .js file, such as "app.js".

```
var brick = require('./brick')

var width = 200
var height = 50

brick(width, height)
```

Then, on the command line, run:

```$ node app.js```

This will give you bricks that are 200 pixels wide by 50 pixels tall. They show up in the "bricks" folder.
