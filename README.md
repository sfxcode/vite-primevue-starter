# Vite Typescript + PrimeVue Starter

[![CI](https://github.com/sfxcode/vite-primevue-starter/actions/workflows/main.yml/badge.svg)](https://github.com/sfxcode/vite-primevue-starter/actions/workflows/main.yml)

## Features

 
- PrimeVue fully supported as Module
- Vue 3.2 (with script setup)
- Routing VitePages / ViteLayout
- Markdown Support
- TypeScript 4.3
- PostCSS 8 w/ `postcss-nesting` plugin
- Tailwind support with tw- prefix because pf primeflex
- Eslint
- Prettier
- Testing with cypress and Jest

## IDE

to use primeflex scss from you need to point to corresponding path (here: node_modules) in App.scss:

```scss
$gutter: 1rem;

@import "primeflex/primeflex.scss";

@import "sass/layout";
@import "sass/theme";

```

## Project setup and usage

Install pnpm:



Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Open Cypress test runner:

```
pnpm test:e2e
```

Jest test runner:

```
pnpm test:unit
```

Run Cypress tests in headless mode:

```
pnpm test:ci
```

Build and preview built site locally:

```
pnpm preview
```

Build:

```
pnpm build
```
