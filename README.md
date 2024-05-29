# @aliothor/lru-cache

<!-- automd:badges color=yellow -->

[![npm version](https://img.shields.io/npm/v/@aliothor/lru-cache?color=yellow)](https://npmjs.com/package/@aliothor/lru-cache)
[![npm downloads](https://img.shields.io/npm/dm/@aliothor/lru-cache?color=yellow)](https://npmjs.com/package/@aliothor/lru-cache)

<!-- /automd -->

Simple “Least Recently Used” (LRU) cache.

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @aliothor/lru-cache

# npm
npm install @aliothor/lru-cache

# yarn
yarn add @aliothor/lru-cache

# pnpm
pnpm install @aliothor/lru-cache

# bun
bun install @aliothor/lru-cache
```

<!-- /automd -->

Import:

<!-- automd:jsimport cjs cdn name="@aliothor/lru-cache" -->

**ESM** (Node.js, Bun)

```js
import { ArrayLRUCache, MapLRUCache } from "@aliothor/lru-cache";
```

**CommonJS** (Legacy Node.js)

```js
const { ArrayLRUCache, MapLRUCache } = require("@aliothor/lru-cache");
```

**CDN** (Deno, Bun and Browsers)

```js
import { ArrayLRUCache, MapLRUCache } from "https://esm.sh/@aliothor/lru-cache";
```

<!-- /automd -->

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/aliothor/lru-cache/blob/main/LICENSE) license.
Made by [community](https://github.com/aliothor/lru-cache/graphs/contributors) 💛
<br><br>
<a href="https://github.com/aliothor/lru-cache/graphs/contributors">
<img src="https://contrib.rocks/image?repo=aliothor/lru-cache" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
