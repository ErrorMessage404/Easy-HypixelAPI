# Easy-HypixelAPI
An easy way to utilize the HypixelAPI in node.js

[![NPM Badge](https://nodei.co/npm/easy-hypixelapi.png)](https://npmjs.com/package/easy-hypixelapi)

## Install

```sh
npm install easy-hypixelapi
```

## Usage

```js
const HypixelAPI = require("easy-hypixelapi");

const Hypixel = new HypixelAPI(/* YOUR HYPIXEL API KEY */)

let check = await Hypixel.key().then(res => { return res })

console.log(check)

```