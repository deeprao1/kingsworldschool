const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory() && file !== '.git' && file !== 'gallery') {
            processDirectory(fullPath);
        } else if (file.endsWith('.html') || file.endsWith('.php')) {
            if (file === 'googleffaff865656e63b1.html') continue;
            
            let content = fs.readFileSync(fullPath, 'utf8');

            // 1. Remove the generic block we injected earlier
            const injectedBlockStart = '<!-- SEO & Social Sharing Enhancements -->';
            const injectedBlockEnd = '</head>';
            if (content.includes(injectedBlockStart)) {
                let startIndex = content.indexOf(injectedBlockStart);
                let endIndex = content.indexOf(injectedBlockEnd, startIndex);
                if (endIndex !== -1) {
                    content = content.substring(0, startIndex) + '\n</head>' + content.substring(endIndex + 7);
                }
            }

            // 2. Extract specific <title> and <meta name="description">
            let titleMatch = content.match(/<title>(.*?)<\/title>/is);
            let descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/is);
            
            let pageTitle = titleMatch ? titleMatch[1].trim() : "Kings Court World School";
            let pageDesc = descMatch ? descMatch[1].trim() : "Kings Court World School - Best Pre School in Mansarovar";
            let pageUrl = `https://www.kingscourtworldschool.com/${file === 'index.html' ? '' : file.replace('.html', '')}`;

            // Check if it already has og: tags. If so, remove them so we can standardize.
            // Be careful not to remove all meta tags, just og:
            content = content.replace(/<meta property=["']og:.*?["'].*?>\n?/g, '');
            // Remove old schemas to avoid duplicates
            content = content.replace(/<script type=["']application\/ld\+json["']>[\s\S]*?<\/script>\n?/g, '');

            // 3. Determine page type (Blog vs General)
            let isBlog = content.includes('blog-single-container') || content.includes('blog-card-style') || file.startsWith('Best-') || file.startsWith('best-') || file.startsWith('top-') || file.startsWith('Top-') || file === 'importance_of_early_education.html';
            // Wait, about.html, contact.html are not blogs.
            if (file === 'best_junior_kg_lkg_school.html') isBlog = true;

            let ogType = isBlog ? 'article' : 'website';
            
            // 4. Generate dynamic Open Graph block
            let ogBlock = `
    <!-- Dynamic Open Graph Tags -->
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${pageDesc}">
    <meta property="og:image" content="https://www.kingscourtworldschool.com/kcwsbanner.jpg">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:type" content="${ogType}">
`;

            // 5. Generate Schema
            let schemaBlock = '';
            if (isBlog) {
                schemaBlock = `
    <!-- BlogPosting Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${pageUrl}"
      },
      "headline": "${pageTitle}",
      "description": "${pageDesc}",
      "image": "https://www.kingscourtworldschool.com/kcwsbanner.jpg",
      "author": {
        "@type": "Organization",
        "name": "Kings Court World School"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kings Court World School",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.kingscourtworldschool.com/logoKCWS.png"
        }
      },
      "datePublished": "2026-03-01",
      "dateModified": "2026-03-01"
    }
    </script>`;
            } else {
                schemaBlock = `
    <!-- Local Business Schema -->
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
      "email": "kingscourtworldschool@gmail.com"
    }
    </script>`;
            }

            // 6. Fix double h1 issues
            if (content.includes('<div class="inner-banner-content">\r\n            <h1>KCWS Insights</h1>')) {
                content = content.replace('<h1>KCWS Insights</h1>', '<h2>KCWS Insights</h2>');
                content = content.replace('.inner-banner h1 {', '.inner-banner h1, .inner-banner h2 {');
            }

            // 7. Inject everything back before </head>
            content = content.replace('</head>', ogBlock + schemaBlock + '\n</head>');
            
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Fixed SEO for: ' + file);
        }
    }
}

processDirectory('.');
