### Building:

```sh
pnpm -r build
```

### Starting:

```sh
node packages/api/build/index.js
```

### Browser extension:

UserScript header:

```js
// ==UserScript==
// @name        Discord Rich Presence
// @namespace   Violentmonkey Scripts
// @match       *://vk.com/*
// @grant       none
// @version     1.0
// @author      _
// @description Yes
// ==/UserScript==
```
