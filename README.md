# js-boilerplate

A template to get started with a Javascript/Typescript project for backend and frontend.

* [Typescript] - Static type checking
* [Rollup] - Bundle several Javascript (ES6) modules into a single bundle.js file.
* [npm] - Package manager
* [Mithril] - Client-side MVC framework
* [Express] - Server-side framework

## Install dependencies

```
cd js-boilerplate
npm install
```

## Run

```
cd js-boilerplate
npm run-script run
# Point browser to localhost:3000
```

## Code

The server-side code is in ```src/backend.js```. The client-side code which
runs within the browser is ```src/frontend.ts```. It gets compiled to
Javascript and placed as ```public/bundle.js```.  All static HTML and CSS3
files are also within ```public```.

[Typescript]: https://www.typescriptlang.org/
[Rollup]: http://rollupjs.org/
[npm]: https://www.npmjs.com/
[Mithril]: http://mithril.js.org/
[Express]: http://expressjs.com/
