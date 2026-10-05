# Article Generator

Static React + TypeScript + Vite web app for drafting Markdown articles from a topic, keywords, tone, language, length, and optional outline.

## Features
- Indonesian and English
- Four tones and three length presets
- Optional custom outline
- Editable Markdown result
- Copy to clipboard and download `.md`
- No backend, account, API key, or secret required

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
