# Figma Webtask Bridge

This little [Webtask](https://webtask.io/) allows to download, as SVG, a Figma document.
This way you can use and manipulate a Figma file outside Figma.

## Usage

You need to create an `.env` file with your Figma TOKEN, such as:

```text
FIGMA_TOKEN=YOUR-TOKEN-CODE
```

## Local test

```js
const task = require('./index.js')

var wtquery = { query: { key: 'IHKVkya3fjZVGHxSnm2ioRXl' } }

task(wtquery, (a, b) => {
  console.log(b)
})
```

## Remote usage

Once the task has been deployed (using `wt create index.js` with their CLI) , you can fetch the Figma file in the browser with something like:

```js
let docId = 'IHKVkya3fjZVGHxSnm2ioRXl'
let wtUrl = 'https://wt-yourwebtaskurl.run.webtask.io/figma-webtask-bridge?key=' + docId

fetch(wtUrl)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err = console.log(err))
```

That's it. Have fun!