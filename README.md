# Arvostaja

Arvostaja is a web application that consists of investing related tools and features.

## Features

- Compound interest calculator with visual graph of growth
- Articles created and maintained with Markdown files

## Todo

- Simple DCF calculator

## Developing

Once you have cloned or forked the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version this applcation:

```bash
npm run build
```

## Environment Variables

There are some environment variables that you need to define in `.env`. You can find an example `.env.example` in the project root.

```bash
VITE_PUBLIC_CLOUDINARY_CLOUD_NAME=""
```
