# Playwright Demo

Dit is een minimalistisch Next.js project met Playwright-testen.
Het laat zien hoe je een eenvoudige Next.js App Router structuur kunt testen met Playwright.

## Project structuur

```
src/
  app/
    page.tsx         → Home (/)
    about/page.tsx   → About (/about)
    contact/page.tsx → Contact (/contact)
tests/
  app.spec.ts        → Playwright navigatie- en contenttests
playwright.config.ts → Playwright configuratie
```

## Vereisten

* Node.js 18+
* NPM

## Installatie

1. Clone deze repository:

```bash
git clone https://github.com/MOCEVN/playwright-demo.git
cd playwright-demo
```

2. Installeer dependencies:

```bash
npm install
```

3. Installeer Playwright browsers:

```bash
npx playwright install
```

## Project draaien

Start de Next
