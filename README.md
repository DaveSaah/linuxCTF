# linuxCTF

linuxCTF is a web application that makes learning linux concepts easier and more effective.

## Abstract

The increasing demand for skilled professionals in cloud computing, DevOps, and software engineering has amplified the need for Linux proficiency. However, beginners often face a steep learning curve due to Linux’s command-line dependency, conceptual complexity, and vast toolset. Traditional passive learning methods are often slow and ineffective in developing practical skills and problem-solving abilities.

This project introduces an innovative educational framework that integrates the Capture the Flag (CTF) model—widely used in cybersecurity—into Linux learning. By designing CTF challenges around fundamental Linux concepts such as command-line proficiency, networking, system administration, and scripting, this approach fosters an interactive and hands-on learning experience. The project leverages Project-Based Learning (PBL) and Kolb’s Experiential Learning Cycle (KELC), combining structured curricula, interactive environments, and a supportive community to create a gradual yet engaging learning process.

By mitigating the initial learning curve, this approach aims to cultivate deep Linux mastery, empowering learners to confidently pursue careers in cloud computing, DevOps, and software engineering.

**Keywords—** Linux, experiential learning, Capture the Flag (CTF), project-based learning, cloud computing, DevOps, software engineering, learning curve.

## Project Setup

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Install Dependencies

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm run build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
