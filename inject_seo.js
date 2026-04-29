const fs = require('fs');
const path = require('path');

const seoPayload = `
    <!-- SEO & Social Sharing Enhancements -->
    <meta property="og:title" content="Kings Court World School - Best Pre School in Mansarovar">
    <meta property="og:description" content="Welcome to Kings Court World School, Mansarovar–Jaipur’s only Kindergarten dedicated to a truly Inquiry-Based, World-Class Curriculum at affordable fees.">
    <meta property="og:image" content="https://www.kingscourtworldschool.com/kcwsbanner.jpg">
    <meta property="og:url" content="https://www.kingscourtworldschool.com/">
    <meta property="og:type" content="website">

    <!-- Local Business Schema for Google -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Kings Court World School",
      "description": "Best Kindergarten in Mansarovar Jaipur offering Reggio-inspired inquiry-based learning.",
      "url": "https://www.kingscourtworldschool.com/",
      "logo": "https://www.kingscourtworldschool.com/logoKCWS.png",
      "image": "https://www.kingscourtworldschool.com/kcwsbanner.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot no.- 5, Kings lane, Suraj Vatika, Golyawas, Vandemataram Circle",
        "addressLocality": "Mansarovar, Jaipur",
        "postalCode": "302020",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "telephone": "+91-7665083556",
      "email": "kingscourtworldschool@gmail.com",
      "sameAs": [
        "https://www.facebook.com/kingscourtworldschool/",
        "https://www.instagram.com/kingscourtworldschool/",
        "https://www.youtube.com/@KINGSCOURTWORLDSCHOOL"
      ]
    }
    </script>
</head>`;

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory() && file !== '.git' && file !== 'gallery') {
            processDirectory(fullPath);
        } else if (file.endsWith('.html') || file.endsWith('.php')) {
            if (file === 'googleffaff865656e63b1.html') continue;
            
            let content = fs.readFileSync(fullPath, 'utf8');
            if (!content.includes('og:title')) {
                content = content.replace('</head>', seoPayload);
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + file);
            }
        }
    }
}

processDirectory('.');
