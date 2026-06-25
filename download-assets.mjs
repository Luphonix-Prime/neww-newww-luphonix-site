import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const base = "https://templatekits.c-kav.com/demo4/shir/wp-content/uploads/sites/8";

const files = [
  "2023/03/logo.png",
  "2023/03/logo-footer.png",
  "2023/05/bg-img-01.jpg",
  "2023/05/bg-img-02.jpg",
  "2023/05/bg-img-03.jpg",
  "2023/05/content-img-01.jpg",
  "2023/05/content-img-02.jpg",
  "2023/05/content-img-09.jpg",
  "2023/05/content-img-10.jpg",
  "2023/05/portfolio-img-03-h.jpg",
  "2023/05/portfolio-img-24-1920x1080-1.jpg",
  "2023/05/portfolio-img-1920x1080-03.jpg",
  "2023/05/portfolio-img-1920x1080-05.jpg",
  "2023/05/testimonial-img-01.jpg",
  "2023/05/testimonial-img-01-300x300.jpg",
  "2023/05/portfolio-img-22.jpg",
  "2023/05/portfolio-img-20.jpg",
  "2023/05/portfolio-img-03.jpg",
  "2023/05/portfolio-img-04.jpg",
  "2023/05/portfolio-img-05.jpg",
  "2023/05/portfolio-img-06.jpg",
  "2023/05/portfolio-img-15.jpg",
  "2023/05/portfolio-img-10.jpg",
  "2023/05/portfolio-img-11.jpg",
  "2023/05/portfolio-img-12.jpg",
  "2023/05/portfolio-img-13.jpg",
  "2023/05/portfolio-img-19.jpg",
  "2023/03/logo-01.png",
  "2023/03/logo-02.png",
  "2023/03/logo-03.png",
  "2023/03/logo-04.png",
  "2023/03/logo-05.png",
  "2023/03/logo-06.png",
  "2019/08/blog-06.jpg",
  "2019/08/blog-05.jpg",
  "2019/08/blog-04.jpg",
  "2019/08/blog-03.jpg",
  "2019/08/blog-02.jpg",
  "2019/08/blog-01.jpg"
];

let bytes = 0;
for (const file of files) {
  const out = path.join(root, "assets", "shir", file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  const response = await fetch(`${base}/${file}`);
  if (!response.ok) {
    throw new Error(`Failed ${response.status}: ${file}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(out, buffer);
  bytes += buffer.length;
}

console.log(`Downloaded ${files.length} files (${bytes} bytes).`);
