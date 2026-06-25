import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const urls = [
  "https://templatekits.c-kav.com/demo4/shir/wp-includes/js/jquery/jquery.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-includes/js/jquery/jquery-migrate.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/template-kit-export/assets/public/template-kit-export-public.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/uploads/sites/8/premium-addons-elementor/pa-frontend-89f752c30.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/elementor/assets/js/frontend-modules.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-includes/js/jquery/ui/core.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/elementor/assets/js/frontend.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/qi-addons-for-elementor/assets/plugins/swiper/8.4.5/swiper.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-includes/js/imagesloaded.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/premium-addons-for-elementor/assets/frontend/min-js/isotope.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/qi-addons-for-elementor/assets/js/main.min.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/themes/hello-elementor/assets/js/hello-frontend.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/header-footer-elementor/inc/js/frontend.js",
  "https://templatekits.c-kav.com/demo4/shir/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js"
];

let bytes = 0;
for (const url of urls) {
  const fileName = path.basename(new URL(url).pathname);
  const out = path.join(root, "assets", "shir", "js", fileName);
  await fs.mkdir(path.dirname(out), { recursive: true });
  
  console.log(`Downloading ${fileName}...`);
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed ${response.status}: ${url}`);
    continue;
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(out, buffer);
  bytes += buffer.length;
}

console.log(`Downloaded ${urls.length} files (${bytes} bytes).`);
