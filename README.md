# Portfolio Website

A personal portfolio website to showcase skills, projects, and provide an easy way for recruiters to get in touch.

## Overview

This repository contains a static frontend and a small Express server used for handling the contact form and related backend tasks. The site is built with lightweight dependencies so it can be run locally or deployed in a container.

## Features

- Responsive single-page portfolio (frontend: `index.html`, `styles.css`).
- Contact form with a server-side handler ([server/server.js](server/server.js#L1)).
- Simple development and production start scripts via `npm`.

## Tech Stack

- HTML, CSS, JavaScript
- Node.js + Express (server)
- nodemailer, googleapis (optional contact/email integrations)
- EmailJS (client-side helper)

See `package.json` for the full dependency list: [package.json](package.json#L1).

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run in development (auto-restarts on changes):

```bash
npm run dev
```

3. Or run production-style locally:

```bash
npm start
```

The server entrypoint is [server/server.js](server/server.js#L1).

Environment and secrets:
- Create a `.env` file (never commit secrets). The server may expect keys for Google API credentials or email credentials — inspect [server/server.js](server/server.js#L1) for the exact variable names used.

The repository includes helper files for the contact form under `scripts/` and `resources/` (for example, [scripts/contact-form.js](scripts/contact-form.js#L1) and [resources/client_secret.json](resources/client_secret.json#L1)).

## Docker / Deployment

This project includes a `Dockerfile` and `compose.yaml` for containerized deployment.

Build and run with Docker:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Or with Docker Compose:

```bash
docker compose up --build
```

Adjust ports and environment values as needed for your hosting provider.

## Project Structure

- [index.html](index.html#L1) — main frontend
- styles.css — global styles
- [server/server.js](server/server.js#L1) — Express server and contact endpoint
- [package.json](package.json#L1) — scripts and dependencies
- [scripts/](scripts/) — client-side JS helpers (contact form, typewriter, icons)
- [resources/](resources/) — credentials and other resources (do not commit secrets)
- Dockerfile, compose.yaml — containerization files

## Contributing

Contributions are welcome. Open an issue or submit a PR with a clear description of changes.

## License

Add a `LICENSE` file to indicate the project license (e.g., MIT). If you want, I can add an MIT license for you.

## Contact

Use the contact form on the site (handled by [server/server.js](server/server.js#L1)).

---

If you'd like, I can update this README with a short bio, live demo link, or add a sample `.env.example` showing the expected environment variables.
