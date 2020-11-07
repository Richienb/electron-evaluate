# electron-evaluate [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/electron-evaluate/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/electron-evaluate)

Evaluate some code in an Electron context.

[![NPM Badge](https://nodei.co/npm/electron-evaluate.png)](https://npmjs.com/package/electron-evaluate)

## Install

```sh
npm install electron-evaluate
```

## Usage

```js
const electronEvaluate = require("electron-evaluate")

const result = await electronEvaluate(async () => {
	// You can use Electron APIs here
})
```

## API

### electronEvaluate(function_, arguments_, options)

Returns a cancelable promise which resolves with the return value of `function_`. To cancel it, use `.cancel()` on the return value.

#### function_

Type: `(...arguments_) => any | Promise<any>`

The function to evaluate in the Electron context.

#### arguments_

Type: `any[]`

An array of arguments to include as arguments when calling `function_`.

#### options

Type: `object`

Options to pass to [`new BrowserWindow()`](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions).
