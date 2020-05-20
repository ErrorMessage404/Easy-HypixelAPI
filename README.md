# Easy-HypixelAPI
An easy way to utilize the HypixelAPI in node.js

[![NPM Badge](https://nodei.co/npm/hypixie.png)](https://npmjs.com/package/hypixie)

## Install

```sh
npm install hypixie
```

## Usage

```js
const hypixie = require("hypixie");

(async () => {
	const { displayname } = await hypixie("player", {
		uuid: "56da43a4-088d-4a76-82b6-dd431535015e",
		key: "some api key"
	});

	console.log(displayname);
	//=> "Richienb"
})();
```