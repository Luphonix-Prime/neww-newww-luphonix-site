const A = "assets/shir";

const assets = {
  logo: `${A}/2023/03/logo.png`,
  logoFooter: `${A}/2023/03/logo-footer.png`,
  bg1: `${A}/2023/05/bg-img-01.jpg`,
  bg2: `${A}/2023/05/bg-img-02.jpg`,
  bg3: `${A}/2023/05/bg-img-03.jpg`,
  content1: `${A}/2023/05/content-img-01.jpg`,
  content2: `${A}/2023/05/content-img-02.jpg`,
  content9: `${A}/2023/05/content-img-09.jpg`,
  content10: `${A}/2023/05/content-img-10.jpg`,
  hero1: `${A}/2023/05/portfolio-img-03-h.jpg`,
  hero2: `${A}/2023/05/portfolio-img-24-1920x1080-1.jpg`,
  hero3: `${A}/2023/05/portfolio-img-1920x1080-03.jpg`,
  detail: `${A}/2023/05/portfolio-img-1920x1080-05.jpg`,
  avatar: `${A}/2023/05/testimonial-img-01.jpg`,
  avatarSmall: `${A}/2023/05/testimonial-img-01-300x300.jpg`,
  portfolio: [
    "portfolio-img-22.jpg", "portfolio-img-20.jpg", "portfolio-img-03.jpg",
    "portfolio-img-04.jpg", "portfolio-img-05.jpg", "portfolio-img-06.jpg",
    "portfolio-img-15.jpg", "portfolio-img-10.jpg", "portfolio-img-11.jpg",
    "portfolio-img-12.jpg", "portfolio-img-13.jpg", "portfolio-img-19.jpg"
  ].map(name => `${A}/2023/05/${name}`),
  blogs: ["blog-06.jpg", "blog-05.jpg", "blog-04.jpg", "blog-03.jpg", "blog-02.jpg", "blog-01.jpg"].map(name => `${A}/2019/08/${name}`),
  logos: ["logo-01.png", "logo-02.png", "logo-03.png", "logo-04.png", "logo-05.png", "logo-06.png"].map(name => `${A}/2023/03/${name}`)
};

const pages = {
  "index": {
    title: "Digital Innovation That Drives Results",
    kicker: "Creative agency",
    kind: "home",
    image: assets.hero1,
    sections: ["services", "portfolio", "testimonials", "story", "clients", "final"]
  },
  "home-2": {
    title: "Bold ideas. Exceptional results.",
    kicker: "Digital studio",
    kind: "home-alt",
    image: assets.hero2,
    sections: ["featured", "portfolio-wide", "pricing", "faq", "final"]
  },
  "home-3": {
    title: "Innovative Design Solutions for Your Business",
    kicker: "Strategy and design",
    kind: "home-alt",
    image: assets.hero3,
    sections: ["process", "quote", "case-study", "services", "portfolio", "cta"]
  },
  "home-4": {
    title: "Innovative Design Solutions for Your Business",
    kicker: "Creative process",
    kind: "home-alt",
    image: assets.content1,
    sections: ["process", "quote", "portfolio-wide", "case-study", "team", "testimonials"]
  },
  "home-5": {
    title: "Innovative design solutions for your business",
    kicker: "Brand experience",
    kind: "home-collage",
    image: assets.bg1,
    sections: ["clients", "portfolio", "process", "quote", "testimonials", "story"]
  },
  "home-6": {
    title: "Creative Solutions for the Modern Business",
    kicker: "Modern business",
    kind: "home-alt",
    image: assets.portfolio[8],
    sections: ["services", "process", "quote", "case-study", "clients", "special"]
  },
  "home-7": {
    title: "Build better digital products with Luphonix",
    kicker: "Product design",
    kind: "home-collage",
    image: assets.bg2,
    sections: ["featured", "services", "portfolio-wide", "team", "faq", "final"]
  },
  "home-8": {
    title: "Digital craft for ambitious brands",
    kicker: "Creative portfolio",
    kind: "home-alt",
    image: assets.portfolio[11],
    sections: ["portfolio-wide", "services", "quote", "clients", "testimonials", "cta"]
  },
  "about": {
    title: "About us",
    kind: "inner",
    sections: ["about", "numbers", "process-banner", "team", "testimonials", "cta"]
  },
  "services": {
    title: "Services",
    kind: "inner",
    sections: ["service-hero", "service-matrix", "story-dark", "awards", "approach", "contact-strip"]
  },
  "portfolio": {
    title: "Portfolio",
    kind: "inner",
    sections: ["portfolio-feature", "portfolio-wide", "awards", "contact-strip"]
  },
  "project-details": {
    title: "Project details",
    kind: "inner",
    sections: ["project-detail", "case-study", "testimonials", "contact-strip"]
  },
  "our-team": {
    title: "Our team",
    kind: "inner",
    sections: ["team-hero", "team", "quote", "awards", "approach", "contact-strip"]
  },
  "career": {
    title: "Career",
    kind: "inner",
    sections: ["culture", "hiring", "openings"]
  },
  "coming-soon": {
    title: "Something exciting is on the way",
    kicker: "Coming soon",
    kind: "special",
    sections: ["coming-soon"]
  },
  "404": {
    title: "404",
    kicker: "Error page",
    kind: "special",
    sections: ["not-found"]
  },
  "blog": {
    title: "Blog",
    kind: "inner",
    sections: ["blog", "portfolio-mini", "final"]
  },
  "contact": {
    title: "Contact us",
    kind: "inner",
    sections: ["contact", "member", "openings"]
  }
};

const homeLinks = [
  ["index.html", "Home 1"], ["home-2.html", "Home 2"], ["home-3.html", "Home 3"], ["home-4.html", "Home 4"],
  ["home-5.html", "Home 5"], ["home-6.html", "Home 6"], ["home-7.html", "Home 7"], ["home-8.html", "Home 8"]
];

const pageLinks = [
  ["portfolio.html", "Portfolio"], ["project-details.html", "Project details"], ["our-team.html", "Our team"],
  ["career.html", "Career"], ["coming-soon.html", "Coming soon"], ["404.html", "404 Error page"]
];

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="index.html"><span class="brand-mark"><i></i><i></i><i></i></span><strong>Luphonix</strong></a>
      <nav class="main-nav" aria-label="Main navigation">
        <div class="nav-group"><a href="index.html">Home</a><div class="submenu">${homeLinks.map(link).join("")}</div></div>
        <a href="about.html">About us</a>
        <a href="services.html">Services</a>
        <div class="nav-group"><a href="portfolio.html">Pages</a><div class="submenu">${pageLinks.map(link).join("")}</div></div>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact us</a>
      </nav>
      <div class="social-nav"><a href="#">f</a><a href="#">t</a><a href="#">in</a><a href="#">ig</a></div>
      <button class="search-btn" aria-label="Search">⌕</button>
    </header>`;
}

function link([href, text]) {
  return `<a href="${href}">${text}</a>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <a class="brand" href="index.html"><span class="brand-mark white"><i></i><i></i><i></i></span><strong>Luphonix</strong></a>
        <div class="footer-grid">
          <div><p>Ahmedabad, Gandhinagar, Gujarat - India</p><p class="phone">Call us on<br><strong>+91-97254-87298</strong></p></div>
          <nav><a href="index.html">Home</a><a href="about.html">About us</a><a href="services.html">Services</a><a href="portfolio.html">Portfolio</a><a href="contact.html">Contact us</a><a href="blog.html">Blog</a></nav>
          <form><h2>Subscribe to our newsletter</h2><p>Subscribe for our monthly newsletter to stay updated</p><label><span>Email</span><input type="email" placeholder="Enter your email"></label><button aria-label="Submit">›</button></form>
        </div>
        <small>© Copyright luphonix.com</small>
      </div>
    </footer>`;
}

const lipsum = "Transform your business with cutting-edge technology and expert development services tailored to your unique needs.";

function hero(page) {
  const collage = page.kind === "home-collage" ? " hero-collage" : "";
  return `
    <section class="clone-hero${collage}">
      <div class="hero-copy">
        <p class="eyebrow">${page.kicker || "Creative"}</p>
        <h1>${page.title}</h1>
        <p>${lipsum}</p>
        <a class="btn" href="contact.html">Get started now</a>
      </div>
      <div class="clone-art">
        <img src="${page.image}" alt="">
        <div class="teal-note">Specialized in Web Development, Mobile Apps, AI/ML, and 3D Visualization</div>
      </div>
    </section>`;
}

function pageTitle(page) {
  return `<section class="page-title"><h1>${page.title}</h1><p>Home / ${page.title}</p></section>`;
}

const serviceNames = ["Web Development", "UI/UX Design", "Mobile App Development", "E-Commerce Solutions", "AI & ML Solutions", "3D & WebGL Development", "Cloud Infrastructure", "Blockchain Development", "Custom Software"];

function services() {
  return `<section class="section split-intro"><div><p class="eyebrow">Our services</p><h2>Digital Solutions for Your Business</h2><p>${lipsum}</p></div><div class="service-cards">${serviceNames.slice(0,4).map((s,i)=>`<article class="service-card ${["teal","yellow","coral","teal"][i]}"><span>${["⌘","▤","△","▣"][i]}</span><h3>${s}</h3><p>${lipsum}</p></article>`).join("")}</div></section>`;
}

function serviceHero() {
  return `<section class="section service-hero"><img src="${assets.bg3}" alt=""><div class="three-cols">${["Creative", "Digital", "Analytics"].map(x=>`<article><p class="eyebrow">${x}</p><h3>AI & ML Solutions</h3><p>${lipsum}</p></article>`).join("")}</div></section>`;
}

function serviceMatrix() {
  return `<section class="section service-matrix">${serviceNames.map((name,i)=>`<article class="${i % 2 ? "teal" : ""}"><span>${["▤","▦","▣","⌖","⌘","◎","◈","▰","▻"][i]}</span><h3>${name}</h3><p>${lipsum}</p></article>`).join("")}</section>`;
}

function portfolioGrid(wide = false) {
  return `<section class="section clone-portfolio ${wide ? "wide" : ""}"><p class="eyebrow center">Our work</p><h2>${wide ? "A showcase of our digital design and development Projects" : "Portfolio of our recent projects"}</h2><p>${lipsum}</p><div class="project-grid">${assets.portfolio.slice(0, wide ? 12 : 6).map((src,i)=>`<a href="project-details.html"><img src="${src}" alt="Project ${i + 1}"></a>`).join("")}</div></section>`;
}

function testimonials() {
  return `<section class="section testimonials"><h2>People shared experiences with us</h2>${[1,2].map(()=>`<article class="quote-card"><p>${lipsum}</p><img class="avatar" src="${assets.avatarSmall}" alt=""><strong>John Doe</strong><span>Designer</span></article>`).join("")}</section>`;
}

function story(dark = false) {
  return `<section class="${dark ? "dark-experience" : "section experience-row"}"><div><h2><span>10+</span>Years experience to build powerful business</h2><p>${lipsum}</p><a class="btn" href="contact.html">Contact us now</a></div><img src="${assets.bg1}" alt=""></section>`;
}

function clients() {
  return `<section class="section client-strip"><div class="client-title">Our clients are companies, brands, and startups</div><div class="logos">${assets.logos.map(src=>`<img src="${src}" alt="">`).join("")}</div></section>`;
}

function finalSplit() {
  return `<section class="section final-split"><div><h2>Transform Your Brand with Our Design and Digital Expertise</h2><a class="btn" href="contact.html">Contact us today</a></div><img src="${assets.content2}" alt=""></section>`;
}

function about() {
  return `<section class="section about-grid"><div class="about-copy"><p class="eyebrow">Our story</p><h2>Digital Solutions for Your Business</h2><p class="lead">${lipsum}</p><img src="${assets.content2}" alt=""><p>${lipsum}</p><a class="btn" href="contact.html">Get free quote</a></div><div class="about-feature"><img class="feature-img" src="${assets.portfolio[0]}" alt=""><div class="mini-grid">${serviceNames.slice(0,4).map((s,i)=>`<div class="${i===0||i===3?"teal":""}"><span>▣</span><strong>${s}</strong></div>`).join("")}</div></div><img class="vr-wide" src="${assets.bg1}" alt=""><div class="about-statement"><h2>Innovative design solutions for your business</h2><p class="lead">${lipsum}</p></div></section>`;
}

function numbers() {
  return `<section class="section number-band"><div><strong>15K+</strong><span>Projects completed</span></div><div><strong>5K+</strong><span>Satisfied customers</span></div><div><strong>20+</strong><span>Years of experience</span></div></section>`;
}

function processBanner() {
  return `<section class="result-banner"><img src="${assets.bg2}" alt=""><div class="result-cards"><h2>How We Deliver Results</h2>${["Discovery and research","Design and development","Testing and feedback","Launch and optimization"].map(x=>`<article><strong>${x}</strong><p>${lipsum}</p></article>`).join("")}</div></section>`;
}

function team() {
  const people = ["John Doe", "Toby Robbins", "Francisco Andrews", "Marshall Stanley", "Lucille Salazar", "Scott Russo"];
  return `<section class="section team-section"><div><p class="eyebrow">Meet our team</p><h2>Meet the creative professionals you'll work with</h2><p class="lead">${lipsum}</p></div><div class="team-grid">${people.map((p,i)=>`<article><img src="${i % 2 ? assets.content10 : assets.avatar}" alt=""><strong>${p}</strong><span>Team Manager</span></article>`).join("")}</div></section>`;
}

function cta() {
  return `<section class="cta-band"><div><h2>Ready to get started?</h2><p>${lipsum}</p></div><div><span>Call us on</span><strong>+91-97254-87298</strong><a class="btn" href="contact.html">Contact us now</a></div></section>`;
}

function quote() {
  return `<section class="section clone-quote"><p class="eyebrow">Request a quote</p><h2>Get pricing information for our services</h2><p>${lipsum}</p><a class="btn" href="contact.html">Request a quote</a></section>`;
}

function caseStudy() {
  return `<section class="section case-study"><img src="${assets.hero3}" alt=""><div><p class="eyebrow">Case study</p><h2>Nostrud exercitation ullamco</h2><p>${lipsum}</p><a class="btn" href="project-details.html">View project</a></div></section>`;
}

function pricing() {
  return `<section class="section pricing"><p class="eyebrow center">Simple price plans</p><h2>Affordable digital solutions for all business</h2><div>${["Basic","Advanced","Premium"].map((n,i)=>`<article><h3>${n}</h3><strong>$${[39,79,129][i]}</strong><p>${lipsum}</p><a class="btn" href="contact.html">Choose plan</a></article>`).join("")}</div></section>`;
}

function faq() {
  return `<section class="section faq"><p class="eyebrow">Questions</p><h2>Frequently asked questions</h2>${["Duis in laoreet tellus, ac cursus neque", "Nulla malesuada, magna non tempor euismod", "Quam ullamcorper mi, convallis pulvinar mauris"].map(q=>`<details open><summary>${q}</summary><p>${lipsum}</p></details>`).join("")}</section>`;
}

function awards() {
  return `<section class="awards-list">${[1,2,3].map(()=>`<div class="award-row"><div><p class="eyebrow">Award and recognition</p><h2>Highlighting the agency's expertise and quality</h2></div><article><strong>2017</strong><span>Best design award</span></article><article><strong>2019</strong><span>Best content creation</span></article><article><strong>2020</strong><span>Best UX/UI award</span></article></div>`).join("")}</section>`;
}

function approach() {
  return `<section class="section split-intro"><div><p class="eyebrow">Our approach</p><h2>Digital Solutions for Your Business</h2><p>${lipsum}</p></div><div class="service-cards">${["Research","Design","Develop","Optimize"].map((x,i)=>`<article class="service-card ${i%2?"yellow":"teal"}"><span>↗</span><h3>${x}</h3><p>${lipsum}</p></article>`).join("")}</div></section>`;
}

function contactStrip() {
  return `<section class="section final-split"><div><p class="eyebrow">Let's Contact</p><h2>Explore our best project works</h2><a class="btn" href="contact.html">Contact us today</a></div><img src="${assets.content2}" alt=""></section>`;
}

function portfolioFeature() {
  return `<section class="section service-hero"><img src="${assets.hero3}" alt=""><div class="three-cols">${[1,2,3].map(()=>`<article><h3>${lipsum}</h3><p>${lipsum}</p></article>`).join("")}</div></section>`;
}

function projectDetail() {
  return `<section class="section project-detail"><img src="${assets.detail}" alt=""><div><p class="eyebrow">Project details</p><h2>Blockchain Development</h2><h3>Transforming your marketing strategy for the digital age</h3><p>${lipsum}</p></div><img src="${assets.portfolio[8]}" alt=""><img src="${assets.portfolio[9]}" alt=""></section>`;
}

function teamHero() {
  return `<section class="section case-study"><img src="${assets.bg2}" alt=""><div><p class="eyebrow">Our team</p><h2>We are helping to boost our clients success</h2><p>${lipsum}</p></div></section>`;
}

function culture() {
  return `<section class="section split-intro"><div><p class="eyebrow">Our culture</p><h2>Benefits of being part of our creative agency</h2><p>${lipsum}</p></div><div class="service-cards">${["Creative freedom","Remote friendly","Growth budget","Team rituals"].map((x,i)=>`<article class="service-card ${i%2?"yellow":"teal"}"><h3>${x}</h3><p>${lipsum}</p></article>`).join("")}</div></section>`;
}

function hiring() {
  return `<section class="section faq"><p class="eyebrow">Our Hiring Process</p><h2>Step-by-step guide to joining our team</h2>${["Portfolio review","Creative interview","Offer and onboarding"].map(q=>`<details open><summary>${q}</summary><p>${lipsum}</p></details>`).join("")}</section>`;
}

function openings() {
  return `<section class="section openings"><h2>Career Paths</h2>${["Product Designer","Front-End Developer","Content Strategist","Project Manager"].map(x=>`<article><h3>${x}</h3><p>${lipsum}</p><a href="contact.html">Apply now</a></article>`).join("")}</section>`;
}

function comingSoon() {
  return `<section class="special-page"><p class="eyebrow">Coming soon</p><h1>Something exciting is on the way</h1><h3>Stay tuned for our big announcement</h3><form><input placeholder="Enter your email"><button class="btn">Notify me</button></form></section>`;
}

function notFound() {
  return `<section class="special-page"><h1>404</h1><h3>Error page</h3><p>${lipsum}</p><a class="btn" href="index.html">Back to home</a></section>`;
}

function blog() {
  const titles = ["Design That Thinks: How LUPHONIX Blends AI and UX", "LUPHONIX and Blockchain: Building a Decentralized Future", "Full-Stack Development Excellence: The LUPHONIX Approach", "Donec at nibh sit amet magna tempor tincidunt", "Interdum vitae nunc ac, pharetra ullamcorper sem", "Aliquam dictum nec libero sed gravida"];
  return `<section class="section blog-grid">${titles.map((t,i)=>`<article><img src="${assets.blogs[i]}" alt=""><p class="eyebrow">Design</p><h2>${t}</h2><p>${lipsum}</p><a href="#">Read more</a></article>`).join("")}</section>`;
}

function contact() {
  return `<section class="section contact-grid"><div><p class="eyebrow">Contact us</p><h2>Let's work together, It's easy to reach us just fill the form below</h2><form class="contact-form"><input placeholder="Name"><input placeholder="Email"><textarea placeholder="Message"></textarea><button class="btn">Submit</button></form></div><img src="${assets.content9}" alt=""></section><section class="section three-cols"><article><h2>Your Details</h2><p>${lipsum}</p></article><article><h2>Our address</h2><h3>123 Main street, Your area, Country 123456</h3></article><article><h2>Working hours</h2><h3>Mon - Fri : 9 am to 6 pm</h3></article></section>`;
}

function member() {
  return `<section class="section case-study"><img src="${assets.avatar}" alt=""><div><p class="eyebrow">Words from our team member</p><h2>Creative work begins with clear communication</h2><p>${lipsum}</p></div></section>`;
}

function renderSection(name) {
  return {
    services, "service-hero": serviceHero, "service-matrix": serviceMatrix, portfolio: () => portfolioGrid(false),
    "portfolio-wide": () => portfolioGrid(true), testimonials, story: () => story(false), "story-dark": () => story(true),
    clients, final: finalSplit, about, numbers, "process-banner": processBanner, team, cta, quote,
    "case-study": caseStudy, pricing, faq, awards, approach, "contact-strip": contactStrip,
    "portfolio-feature": portfolioFeature, "project-detail": projectDetail, "team-hero": teamHero,
    culture, hiring, openings, "coming-soon": comingSoon, "not-found": notFound, blog, contact, member,
    featured: services, process: processBanner, special: contactStrip, "portfolio-mini": () => portfolioGrid(false)
  }[name]();
}

function initAnimations() {
  const els = document.querySelectorAll('h1, h2, h3, p:not(.eyebrow), .btn, article, .teal-note, img, .client-title, .logos > img, .number-band > div, details, .project-grid a');
  
  let delayCounter = 0;
  let resetTimeout = null;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.transitionDelay = `${delayCounter * 100}ms`;
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
}

function render() {
  const key = document.body.dataset.page || "index";
  const page = pages[key] || pages.index;
  document.title = `${page.title} - Luphonix`;
  const main = page.kind === "special"
    ? page.sections.map(renderSection).join("")
    : `${page.kind?.startsWith("home") ? hero(page) : pageTitle(page)}${page.sections.map(renderSection).join("")}`;
  document.body.innerHTML = `${header()}<main>${main}</main>${footer()}`;
  
  // Initialize scroll animations immediately to prevent flashing
  initAnimations();
}

render();

