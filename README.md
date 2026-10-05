# Article Generator

Static React + TypeScript + Vite web app for drafting Markdown articles from a topic, keywords, tone, language, length, and optional outline.

## Features
- Indonesian and English
- Four tones and three length presets
- Optional custom outline
- Editable Markdown result
- Copy to clipboard and download `.md`
- Two generation modes: Template works without any API key; AI · BYOK uses the user's own OpenAI API key
- In AI · BYOK mode, the OpenAI API key is stored only in the user's browser localStorage and can be removed from the app

## Local development
```bash
npm install
npm run dev
```

## Verification
```bash
npm run check
```

Changes go through a pull request: once `test-build` passes, the owner's pull requests are merged automatically and GitHub Actions deploys `main` to GitHub Pages.

## Tanpa API: ChatGPT Project
Folder [`chatgpt-project/`](chatgpt-project/) berisi instruksi dan enam file sumber untuk membuat Project "ARTICLE GENERATOR" di ChatGPT. Artikel ditulis oleh ChatGPT sendiri di dalam Project itu, tanpa API key. Cara pasang ada di [`chatgpt-project/README.md`](chatgpt-project/README.md).
