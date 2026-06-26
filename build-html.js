const fs = require("fs");
const path = require("path");

const siteJsCode = fs.readFileSync("site.js", "utf-8");

// We extract everything except the render() call and initAnimations()
const codeToEval = siteJsCode
  .replace(/function initAnimations\(\) \{[\s\S]*?function render\(\) \{/m, 'function render() {')
  .replace(/function render\(\) \{[\s\S]*?render\(\);/m, '');

// We will evaluate the code to get access to pages, header, footer, etc.
const script = `
  ${codeToEval}
  
  function getStaticHtml(pageKey) {
    const page = pages[pageKey] || pages.index;
    const main = page.kind === "special"
      ? page.sections.map(renderSection).join("")
      : \`\${page.kind?.startsWith("home") ? hero(page) : pageTitle(page)}\${page.sections.map(renderSection).join("")}\`;
    
    return \`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>\${page.title} - Shir</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body data-page="\${pageKey}">
  \${header()}
  <main>\${main}</main>
  \${footer()}
  <script>
    // Minimal script to handle hover/dropdown and simple interactions if needed
    // The CSS already handles the hover menus.
    // Let's add intersection observer for animations
    document.addEventListener("DOMContentLoaded", () => {
      const els = document.querySelectorAll('h1, h2, h3, p:not(.eyebrow), .btn, article, .teal-note, img, .client-title, .logos > img, .number-band > div, details, .project-grid a');
      
      let delayCounter = 0;
      let resetTimeout = null;

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.transitionDelay = \\\`\\\${delayCounter * 100}ms\\\`;
            el.classList.add('is-visible');
            delayCounter++;
            obs.unobserve(el);
          }
        });
        
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          delayCounter = 0;
        }, 100);
      }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

      els.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
      });
    });
  </script>
</body>
</html>\`;
  }
  
  module.exports = { getStaticHtml };
`;

fs.writeFileSync("temp-eval.js", script);
const { getStaticHtml } = require("./temp-eval.js");

const pagesToBuild = [
  { key: "index", file: "index.html" },
  { key: "about", file: "about.html" },
  { key: "services", file: "services.html" },
  { key: "blog", file: "blog.html" },
  { key: "contact", file: "contact.html" }
];

for (const p of pagesToBuild) {
  const html = getStaticHtml(p.key);
  fs.writeFileSync(p.file, html);
  console.log(`Generated ${p.file}`);
}

fs.unlinkSync("temp-eval.js");
