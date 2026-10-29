# Origin Starter Template

A minimal, editable ONEORIGIN website for the existing static deployment pipeline. Node.js 22+, no runtime dependencies, no API keys required.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Edit `index.html` to change content and styling.

```sh
npm run build
```

The build writes `.output/public/index.html`. `npm run generate` is the equivalent command used by AWS CodeBuild. `NUXT_APP_BASE_URL` accepts an absolute directory path and supports isolated preview and production prefixes.

The ONEORIGIN Get started button opens `/hosting?template=origin-starter`, with this repository and `main` preselected and read-only. Creating a project, starting a build, and publishing production are explicit actions in the existing workspace.

This repository contains a static starter website, not the ONEORIGIN platform backend. Deployment access is controlled by the platform's existing operator authentication.
