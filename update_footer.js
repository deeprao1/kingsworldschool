const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory() && file !== '.git' && file !== 'gallery') {
            processDirectory(fullPath);
        } else if (file.endsWith('.html') || file.endsWith('.php')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Fix Footer Hover Color
            const oldHover = '.footer-col a:hover { color: var(--google-blue); }';
            const newHover = '.footer-col a:hover { color: var(--google-yellow); padding-left: 5px; }';
            
            if (content.includes(oldHover)) {
                content = content.replace(oldHover, newHover);
                modified = true;
            }

            // Fix Copyright Text
            const oldCopyright = '<p>Copyright © 2026 Kings Court World School</p>';
            const newCopyright = '<p>Copyright © 2026 Kings Court World School<br>All Rights Reserved. Designed by <a href="https://amazingit.in/" target="_blank" style="color: var(--google-yellow); text-decoration: none;">Amazing IT</a>.</p>';
            
            if (content.includes(oldCopyright)) {
                content = content.replace(oldCopyright, newCopyright);
                modified = true;
            }

            // Another variant of hover color
            const oldHover2 = '.footer-col a:hover { color: #4285F4; }';
            const newHover2 = '.footer-col a:hover { color: #FBBC05; padding-left: 5px; }';
            if (content.includes(oldHover2)) {
                content = content.replace(oldHover2, newHover2);
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + file);
            }
        }
    }
}

processDirectory('.');
