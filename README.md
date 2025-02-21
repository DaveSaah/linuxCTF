# linuxCTF

linuxCTF is a web application that makes learning linux concepts easier and more effective.

## Abstract

The rapid growth of cloud computing, DevOps and software engineering has fuelled the demand for skilled professionals proficient in Linux. However, mastering Linux, especially for beginners, presents a steep learning curve due to its dependence on the command-line interface, conceptual complexity, and the vast array of tools involved. Traditional passive methods are often protracted and laborious in equipping learners with the practical skills and problem-solving abilities required to be effective in these technical domains. This project proposes a novel educational approach that integrates the successful capture the flag (CTF) model from cybersecurity into a Linux learning framework.

By adapting CTF challenges to focus on fundamental Linux concepts such as command-line proficiency, networking, system administration, and scripting, this project aims to provide a hands-on, experiential learning environment. The project will leverage established experiential learning methods like Project-Based Learning (PBL) and the Klobs Experiential Learning Cycle (KELC), along with a structured curriculum, interactive learning environments, and a supportive learning community, to facilitate a gradual and engaging learning experience.

This approach strives to mitigate the initial steep learning curve and cultivate a deep understanding of Linux systems, empowering individuals to confidently pursue and excel in cloud computing, DevOps and software engineering careers.

**Keywords—** Linux, experiential learning, Capture the Flag (CTF), project-based learning, cloud computing, DevOps, software engineering, learning curve.

## Project Setup

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Install Dependencies

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
bun test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
bun test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
bun run build
bun test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
