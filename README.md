## Usage

First install

```sh
npm i --save thumb-video
```

and in your file:

```js
var thumb = require('thumb-video');
```

Then, thumb receive 2 arguments, options and callback (optional);

The first argument options, have theses keys:

file - path to movie you want generate thumbs
output - path to output thumbs
duration - time of frame
<!-- frames - amount of frames you want -->

### Tests
I use mocha for tests, first install mocha as global

```sh
npm i -g mocha
```

Then run tests with:

```sh
npm test
```

Enjoy!