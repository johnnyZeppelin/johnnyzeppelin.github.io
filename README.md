# Sifan Li

This repository contains the source for [johnnyzeppelin.github.io](https://johnnyzeppelin.github.io/), the personal academic website of Sifan Li.

The site is built with Jekyll and the al-folio theme, and is deployed through GitHub Pages.

## Main Content

- `/_pages/about.md`: homepage profile and research interests
- `/_bibliography/papers.bib`: publication data rendered by Jekyll Scholar
- `/assets/json/resume.json`: structured CV data used by the CV page
- `/_projects/`: research project cards
- `/_news/`: homepage news items
- `/assets/pdf/CurriculumVitaeSifanLi.pdf`: downloadable CV

## Local Build

Install Ruby/Bundler dependencies, then run:

```bash
bundle exec jekyll serve
```

GitHub Actions builds the production site on pushes to `main`.
