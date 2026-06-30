const fs = require('fs');
let content = fs.readFileSync('site.js', 'utf8');

content = content.replace(/Shir/g, 'Luphonix');
content = content.replace(/123 Main street, Area name, Location name, Country - 123456/g, 'Ahmedabad, Gandhinagar, Gujarat - India');
content = content.replace(/0123456789/g, '+91-97254-87298');
content = content.replace(/c-kav\.com/g, 'luphonix.com');
content = content.replace(/Creativity meets innovation/g, 'Digital Innovation That Drives Results');
content = content.replace(/const lipsum = ".*?";/, 'const lipsum = "Transform your business with cutting-edge technology and expert development services tailored to your unique needs.";');
content = content.replace(/Website design and development/g, 'Web Development');
content = content.replace(/UX\/UI design and testing/g, 'UI/UX Design');
content = content.replace(/Mobile app design and development/g, 'Mobile App Development');
content = content.replace(/Brand identity and logo design/g, 'E-Commerce Solutions');
content = content.replace(/Graphic design and illustration/g, 'AI & ML Solutions');
content = content.replace(/Social media marketing/g, '3D & WebGL Development');
content = content.replace(/SEO and PPC services/g, 'Cloud Infrastructure');
content = content.replace(/Content creation and marketing/g, 'Blockchain Development');
content = content.replace(/Video and motion graphics/g, 'Custom Software');
content = content.replace(/Specialized in Web Design, UX \/ UI, Branding, and Front-End Development/g, 'Specialized in Web Development, Mobile Apps, AI/ML, and 3D Visualization');

// Blog titles
content = content.replace(/Qui lorem, imperdiet non turpis nec/g, 'Design That Thinks: How LUPHONIX Blends AI and UX');
content = content.replace(/Nunc faucibus eros eget sagittis porttitor/g, 'LUPHONIX and Blockchain: Building a Decentralized Future');
content = content.replace(/Nunc erat arcu, venenatis ac congue/g, 'Full-Stack Development Excellence: The LUPHONIX Approach');

// Page specific titles
content = content.replace(/Digital solutions for your business/g, 'Digital Solutions for Your Business');
content = content.replace(/How we deliver results/g, 'How We Deliver Results');

fs.writeFileSync('site.js', content);
console.log('site.js updated');
