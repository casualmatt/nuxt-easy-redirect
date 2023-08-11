# nuxt-easy-redirect

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Configure simple Redirects within your Nuxt application ➡️

- [✨ &nbsp;Release Notes](https://github.com/casualmatt/nuxt-easy-redirect/releases)

## Setup

```sh
yarn add nuxt-easy-redirect # yarn
npm i nuxt-easy-redirect # npm
pnpm add nuxt-easy-redirect # pnpm
```

## Basic usage

Add `nuxt-easy-redirect` to your Nuxt config:

```typescript
// nuxt.config.ts

export default defineNuxtConfig({
  modules: ["nuxt-easy-redirect"],
});
```

## Configuration

You can configure `nuxt-easy-redirect` in your `nuxt.config.ts` file:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["nuxt-easy-redirect"],
  redirects: {
    verbose: true,
    rules: [
      {
        origin: "/about",
        destination: "/about-us",
        statusCode: 302,
      },
      {
        origin: "/about1",
        destination: "/about-us2",
        statusCode: 301,
      },
    ],
  },
  devtools: { enabled: true },
});
```

## Development

1. Clone this repository
2. Install dependencies using `pnpm install` or `npm install`
3. Run `pnpm dev:prepare` or `npm run dev:prepare`
4. Start development server using `pnpm dev` or `npm run dev`

## License

Copyright (c) 2023 casualmatt
[Apache License 2.0](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-easy-redirect/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-easy-redirect
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-easy-redirect.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-easy-redirect
[license-src]: https://img.shields.io/npm/l/nuxt-easy-redirect.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-easy-redirect
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
