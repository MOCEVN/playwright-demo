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

#playwright

NEXT.js guide with playwright:
https://nextjs.org/docs/pages/guides/testing/playwright 

GitHub next.js testing setups examples:
https://github.com/vercel/next.js/tree/canary/examples 

Playwright guide:
https://www.checklyhq.com/learn/playwright/what-is-playwright/#playwright-features 

Playwright wright tests: 
https://playwright.dev/docs/writing-tests#first-test 
## What is it?

Enables end-to-end testing for modern web apps
### Use:
**Cross-browser**; Chromium, WebKit, FireFox
**Cross-platform;** Windows, Linux, macOS, locally or on CI, headless or headed
**Cross-language**; Playwright APi usable in TypeScript, JavaScript, Pyhton, .NET and Java
**Test Mobile Web**; Google Chrome for Android and Mobile Safari. The same rendering works on the desktop and in the cloud.

Playwrigth was created by the same engineers who created Puppeteer (A JavaScript library who provides high level API control)

This architecture makes it possible that in a team organization with larger teams split into smaller pods. Each team is responible for a specific product requirement. The automated end-to-end tests must simulate real-world test scenarios and verify that an application's moving parts work together. 

End-to-end tests provide disparate product teams to determine if a web application works or not.

End-to-end tests have the reputation of being flaky and slow, while also requiring a lot of maintenance. 

Playwright overcomes flaky and slow tests by communicating with rendering engines via the WebSocket protocol, instead of through multiple HTTP requests. 

Playwright communicates all requests through a single web socket connection that remains active until all tests have been completed. This reduce points of test failure during test execution, providing a stable and fast solution. 

Most testtools only work with Chromium/Chrome and Playwright goes further. 

**1. Multiple browsers, one API**
- Playwright supports Chromium (Chrome/Edge), Firefox and WebKit (Safari)
- You wright one test and you can run it on all your browsers
- Users use Safari and Firefox for example, and can catch cross-browser bugs easily. 

**2. Browser engines, not only the browsers**
- Playwright works directly with the rendering engines (Chromium, Gecko and WebKit), closer to how the browsers really work
- This allows it to simulate more reliably and consistently behavior than tools that work on top of browser APIs.

**3. First-class support for WebKit (Safari)**
- A lot of testtools don't support Safari
- With Playwright you can actually test your Next.js app as it runs in Safari -> that used to be a big gap in test automation

**4. Fast parallel runs**
- You can run in the same suite all three engines, what helps with CI/CD

**Playwright loginflow:**
`npx playwright test --browser=chromium
`npx playwright test --browser=firefox
`npx playwright test --browser=webkit

Or all at the same time with a config

Playwright talk directly to these engines: Chronium, WebKit and Gecko. That's how you can run the same test in all three engines -> and then you're sure that your app works in Chrome, Safari and Firefox

Playwright is unique because it supports the three biggest engines, while other tools are only focussing on Chromium 


**Playwright-test example:**

```typescript
import { test, expect } from @playwright/test';

test('homepage has title and links to about page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check dat de titel klopt
  await expect(page).toHaveTitle(/Next.js/);

  // Check dat de link naar About pagina bestaat
 const aboutLink = page.locator('text=About');
  await expect(aboutLink).toHaveAttribute('href', '/about');

  // Klik op de link en check de URL
  await aboutLink.click();
  await expect(page).toHaveURL(/\/about/);
});
```

**Code explanation:**
`page.goto('http://localhost:3000')` -> opens the homepage
`expect(page).toHaveTitle(...)` -> checks if the title is correct
`page.locator('text=About')` -> search an element with the text "About"
`expect(...).toHaveAttribute(...)` -> checks if the link correctly directs to `/about`
`expect(page).toHaveURL(...)` -> checks if you're on the about page

**Terminal test:  

```bash
# Run all browsers
npx playwright test

# Run Safari/WebKit
npx playwright test --project=webkit

# Run Chrome
npx playwright test --project=chromium

# Run Firefox
npx playwright test --project=firefox
```

