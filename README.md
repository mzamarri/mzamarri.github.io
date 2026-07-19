# Portfolio Website

A personal portfolio website to showcase skills, projects, and provide an easy way for recruiters to get in touch.

## Overview

This repository contains a static, client-side portfolio. The contact form is handled in the browser using EmailJS (`@emailjs/browser`), so no server-side Express app is required.

## Features

- Responsive single-page portfolio (`index.html`, `styles.css`).
- Contact form handled client-side with EmailJS ([scripts/contact-form.js](scripts/contact-form.js#L1)).
- Lightweight dependencies suitable for static hosting (GitHub Pages, Netlify, Vercel).

## Tech Stack

- HTML, CSS, JavaScript
- EmailJS for client-side email sending (`@emailjs/browser`)
- `lucide` and `tech-stack-icons` for icons

See `package.json` for the dependency list: [package.json](package.json#L1).

## Local Development

1. Install dependencies (optional, used for package management):

```bash
npm install
```

2. Open `index.html` in your browser, or serve the project folder with a static server. Examples:

Using Python 3:

```bash
python -m http.server 3000
# then open http://localhost:3000
```

Using Node's `http-server` (if installed globally):

```bash
npx http-server -p 3000
# then open http://localhost:3000
```

The contact form integration is implemented in [scripts/contact-form.js](scripts/contact-form.js#L1). Review that file to confirm your EmailJS `service`, `template`, and `user` IDs.

## Docker / Deployment

This project includes a `Dockerfile` and `compose.yaml` for optional containerized hosting, but they are not required for static deployments.

Build and run with Docker (optional):

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Or with Docker Compose:

```bash
docker compose up --build
```

## Project Structure

- [index.html](index.html#L1) — main frontend
- styles.css — global styles
- [scripts/contact-form.js](scripts/contact-form.js#L1) — client-side contact form integration
- [scripts/](scripts/) — client-side JS helpers (typewriter, icons, form handling)
- [resources/](resources/) — optional resources or credentials (remove any secrets)
- [package.json](package.json#L1) — dependencies and scripts
- Dockerfile, compose.yaml — optional containerization files

## Contributing

Contributions are welcome. Open an issue or submit a PR with a clear description of changes.

## License

This project is licensed under the MIT License — see the `LICENSE` file.

## Contact

Use the contact form on the site to reach out. The form is handled client-side using EmailJS — the integration lives in [scripts/contact-form.js](scripts/contact-form.js#L1).
