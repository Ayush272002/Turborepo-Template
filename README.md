# Turborepo Template

This is a Turborepo template.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `storybook`: [React.js](https://react.dev/) app with storybbok initialised, it can be used as a react app but more specifically wanted it to test components independently using storybook
- `backend`: [Express.js](https://expressjs.com/) app and [esbuild](https://esbuild.github.io/) as the bundler
- `@repo/db and @repo/db_serverless`: both are initialised with [prisma](https://www.prisma.io/) the serverless can be used with hono or any other serverless function, and both of them exposes the prisma client.
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications which includes [shadcn](https://ui.shadcn.com/) and [MUI - material ui](https://mui.com/material-ui/getting-started/) and [tsup](https://tsup.egoist.dev/) as the bundler
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: `tailwind.config.js`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Shadcn](https://ui.shadcn.com/) for ui design and components
- [MUI - material ui](https://mui.com/material-ui/getting-started/) for ui design and components
- [Husky](https://typicode.github.io/husky/) for pre-commit hook
- [Lint-Staged](https://www.npmjs.com/package/lint-staged) to run linters against staged git files

### Clone

To clone the repo run 

```shell
git clone https://github.com/Ayush272002/Turborepo-Template.git
cd template
npm i
```

### Build

To build all apps and packages, run the following command:

```shell
cd template
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```shell
cd template
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```shell
cd template
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```shell
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
