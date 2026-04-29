const fs = require('fs');
let html = fs.readFileSync('blog.html', 'utf8');
const insert = `
            <div class="blog-card">
                <div class="blog-img-container">
                    <span class="blog-tag">Parenting Guide</span>
                    <img src="gallery/IMG_0636.jpg" alt="Parents choosing preschool" loading="lazy">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-user"></i> Educational Expert</span>
                    </div>
                    <h3>5 Tips to Choose the Best Preschool in Mansarovar Jaipur</h3>
                    <p>Discover the top factors to consider when choosing the best preschool in Mansarovar Jaipur for your child's early education.</p>
                    <a href="how-to-choose-the-right-preschool-in-mansarovar-jaipur" class="read-more">Read Full Post <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-img-container">
                    <span class="blog-tag">Curriculum</span>
                    <img src="gallery/cc61167c-eae3-4a89-af51-1f90926d8d07.jpg" alt="Children learning through Reggio Emilia" loading="lazy">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-user"></i> Principal</span>
                    </div>
                    <h3>Why a Reggio Emilia & Montessori Integrated Curriculum is Best</h3>
                    <p>Unlocking the power of combined educational philosophies for early childhood development at KCWS.</p>
                    <a href="benefits-of-reggio-emilia-and-montessori-integrated-curriculum" class="read-more">Read Full Post <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
`;
html = html.replace('<div class="blog-grid">', '<div class="blog-grid">' + insert);
fs.writeFileSync('blog.html', html);
console.log('Updated blog.html');
