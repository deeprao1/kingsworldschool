const fs = require('fs');

const templatePath = 'best_junior_kg_lkg_school.html';
const template = fs.readFileSync(templatePath, 'utf8');

const blogs = [
    {
        filename: 'top-5-benefits-of-play-based-nursery-curriculum-jaipur.html',
        metaTitle: 'Top 5 Benefits of a Play-Based Nursery Curriculum in Jaipur',
        metaDesc: 'Discover the top 5 benefits of a play-based nursery curriculum at Kings Court World School, the best nursery school in Mansarovar, Jaipur.',
        metaKeywords: 'play-based nursery Jaipur, nursery school in Mansarovar, playgroup admission Jaipur, experiential learning preschool',
        bannerH1: 'Top 5 Benefits of a Play-Based Nursery Curriculum',
        bannerP: 'Why experiential learning outshines traditional teaching methods for young children.',
        tag: 'Curriculum',
        date: 'May 1, 2026',
        author: 'Principal',
        readTime: '4 Min Read',
        imgAlt: 'Children playing with blocks',
        imgSrc: 'gallery/IMG_5363.jpg',
        bodyHtml: "<p>When looking for the <strong>best nursery school in Mansarovar</strong>, many parents encounter the term 'play-based learning'. But what does it actually mean, and why is it superior to rote memorization?</p>" +
            "<h2>1. Fosters Natural Curiosity</h2>" +
            "<p>Children are born scientists. A play-based curriculum allows them to ask questions and find answers through exploration. Instead of memorizing that 'water is wet', they learn it by playing at our sensory water tables.</p>" +
            "<h2>2. Builds Advanced Social Skills</h2>" +
            "<p>During free play, children must negotiate, share, and collaborate. These interactions are the building blocks of emotional intelligence and conflict resolution.</p>" +
            "<h2>3. Encourages Independent Thinking</h2>" +
            "<p>Rote learning teaches children *what* to think. Play-based learning teaches them *how* to think. By choosing their activities, children learn to make independent decisions.</p>" +
            "<h2>4. Develops Fine and Gross Motor Skills</h2>" +
            "<p>From stacking blocks to painting, play inherently develops the small muscles in the hands (fine motor) and large muscles (gross motor) necessary for future writing and physical sports.</p>" +
            "<h2>5. Makes Learning Joyful</h2>" +
            "<p>Most importantly, play-based learning associates school with joy. This positive association ensures a lifelong love for education. Enroll your child in the Agni program at KCWS to see this joy firsthand!</p>"
    },
    {
        filename: 'why-indoor-sports-are-crucial-for-kindergarteners.html',
        metaTitle: 'Why Indoor Sports Are Crucial for Kindergarteners | KCWS',
        metaDesc: 'Learn why structured indoor sports, like those offered at Kings Court World School, are essential for the gross motor development of kindergarteners.',
        metaKeywords: 'kindergarten sports Jaipur, preschool with indoor games Mansarovar, sports preschool Jaipur',
        bannerH1: 'Why Indoor Sports Are Crucial for Kindergarteners',
        bannerP: 'Physical development is a core pillar of early childhood education.',
        tag: 'Development',
        date: 'May 5, 2026',
        author: 'Sports Coach',
        readTime: '5 Min Read',
        imgAlt: 'Children playing indoor soccer',
        imgSrc: 'gallery/IMG_5066.jpg',
        bodyHtml: "<p>Physical activity is not just a break from learning; it *is* learning. At Kings Court World School, we are proud to be a <strong>kindergarten with sports facilities in Mansarovar</strong>.</p>" +
            "<h2>Developing Gross Motor Skills</h2>" +
            "<p>Running, jumping, and kicking a ball develop gross motor skills. These activities strengthen core muscles, which surprisingly, are necessary for a child to sit upright and focus at a desk later on.</p>" +
            "<h2>Safe Exploration</h2>" +
            "<p>Our indoor soccer and basketball arenas provide a climate-controlled, highly safe environment where children can push their physical boundaries without the risk of serious injury.</p>" +
            "<h2>Teamwork and Discipline</h2>" +
            "<p>Structured indoor sports teach children how to follow rules, wait for their turn, and cheer for their peers. These are invaluable social skills that translate directly into the classroom.</p>" +
            "<h2>Book a Tour</h2>" +
            "<p>Come visit our campus near Vandemataram Circle to see our expansive indoor sports arenas in action!</p>"
    },
    {
        filename: 'how-the-space-lab-at-kcws-inspires-young-astronomers.html',
        metaTitle: 'How the Space Lab at KCWS Inspires Young Astronomers',
        metaDesc: 'Kings Court World School features a unique Space Lab for kindergarteners. Discover how we introduce early science concepts to young minds in Jaipur.',
        metaKeywords: 'preschool space lab Jaipur, early science education Mansarovar, kindergarten science activities',
        bannerH1: 'How Our Space Lab Inspires Young Astronomers',
        bannerP: 'Reaching for the stars, right from Kindergarten.',
        tag: 'Infrastructure',
        date: 'May 10, 2026',
        author: 'Science Educator',
        readTime: '4 Min Read',
        imgAlt: 'Child looking at a globe or stars',
        imgSrc: 'gallery/IMG_3557.jpg',
        bodyHtml: "<p>Who says you have to be in high school to learn about the universe? At Kings Court World School, our state-of-the-art <strong>Space Lab</strong> proves that 4-year-olds are more than capable of grasping astronomical concepts.</p>" +
            "<h2>Igniting Wonder</h2>" +
            "<p>The Space Lab is designed to be a deeply immersive environment. With glowing planets, interactive constellations, and tactile models, children don't just look at pictures in a book—they experience the solar system.</p>" +
            "<h2>Building STEM Foundations</h2>" +
            "<p>By introducing basic concepts of gravity, orbits, and light, we lay a robust foundation for future STEM (Science, Technology, Engineering, and Math) education. They ask questions like 'Why does the moon change shape?' and we guide them to the answers.</p>" +
            "<h2>The Vayu & Akash Programs</h2>" +
            "<p>Our Junior KG (Vayu) and Senior KG (Akash) students spend dedicated time in the Space Lab, making Kings Court World School truly unique among preschools in Mansarovar.</p>"
    },
    {
        filename: 'the-role-of-early-phonics-in-developing-reading-skills.html',
        metaTitle: 'The Role of Early Phonics in Developing Reading Skills',
        metaDesc: 'Understanding the importance of phonics in early childhood education. Discover how Kings Court World School teaches reading to kindergarteners.',
        metaKeywords: 'phonics for kindergarten, learning to read preschool, best senior kg school Mansarovar, UKG admission Jaipur',
        bannerH1: 'The Role of Early Phonics in Reading Skills',
        bannerP: 'Breaking down the science of how young children learn to read.',
        tag: 'Academics',
        date: 'May 15, 2026',
        author: 'Language Expert',
        readTime: '6 Min Read',
        imgAlt: 'Child reading a picture book',
        imgSrc: 'gallery/IMG_0804.jpg',
        bodyHtml: "<p>Learning to read is arguably the most important academic milestone a child will reach. However, memorizing the alphabet song is not enough. This is where <strong>phonics</strong> comes in.</p>" +
            "<h2>What is Phonics?</h2>" +
            "<p>Phonics is a method of teaching reading by correlating sounds with letters or groups of letters. Instead of memorizing that 'C-A-T' spells cat, a child learns the sounds /k/, /a/, and /t/ and blends them together.</p>" +
            "<h2>Montessori Phonics at KCWS</h2>" +
            "<p>At Kings Court World School, we use Montessori sandpaper letters. Children trace the physical texture of the letter while saying its sound out loud. This engages visual, auditory, and tactile senses simultaneously, cementing the knowledge deep in their memory.</p>" +
            "<h2>Why It Matters for LKG and UKG</h2>" +
            "<p>By the time our students enter the <strong>Akash (Senior KG)</strong> program, they are not just guessing words based on pictures; they are actively decoding language. This sets them up for incredible success in primary school.</p>"
    },
    {
        filename: 'what-is-the-third-teacher-in-reggio-emilia-approach.html',
        metaTitle: 'What is the Third Teacher in the Reggio Emilia Approach?',
        metaDesc: 'Explore the Reggio Emilia concept of the environment as the third teacher and how Kings Court World School implements this in Mansarovar, Jaipur.',
        metaKeywords: 'environment as third teacher, Reggio Emilia Jaipur, best preschool infrastructure Mansarovar',
        bannerH1: 'What is the "Third Teacher" in Reggio Emilia?',
        bannerP: 'How your child\'s physical surroundings directly impact their cognitive development.',
        tag: 'Curriculum',
        date: 'May 20, 2026',
        author: 'Principal',
        readTime: '5 Min Read',
        imgAlt: 'Bright, airy Reggio Emilia classroom',
        imgSrc: 'gallery/IMG_5245.jpg',
        bodyHtml: "<p>If you have been researching the <strong>Reggio Emilia approach in Jaipur</strong>, you have likely come across the phrase 'the environment as the third teacher'. But what exactly does this mean?</p>" +
            "<h2>The Three Teachers</h2>" +
            "<p>In Reggio philosophy, the first teacher is the parent. The second teacher is the classroom educator. The <strong>third teacher</strong> is the environment itself.</p>" +
            "<h2>Designing for Discovery</h2>" +
            "<p>A traditional classroom expects children to sit passively. A Reggio-inspired classroom at KCWS is active. Our rooms feature low shelves, natural lighting, and open-ended materials (like clay, wood, and light tables) that invite a child to touch and explore.</p>" +
            "<h2>Why Kings Court Excels</h2>" +
            "<p>Our campus near Vandemataram Circle was built from the ground up to serve as a third teacher. From the Space Lab to the art corners, every inch of our school is designed to provoke curiosity and inspire creativity.</p>"
    },
    {
        filename: 'preparing-your-toddler-for-playgroup-a-parents-guide.html',
        metaTitle: 'Preparing Your Toddler for Playgroup: A Parents Guide',
        metaDesc: 'Actionable tips for parents to help their toddlers transition smoothly into playgroup at Kings Court World School in Mansarovar, Jaipur.',
        metaKeywords: 'playgroup admission Jaipur, preparing toddler for preschool, best playgroup in Mansarovar, separation anxiety tips',
        bannerH1: 'Preparing Your Toddler for Playgroup',
        bannerP: 'Tips to make the transition from home to school tear-free and joyful.',
        tag: 'Parenting Guide',
        date: 'May 25, 2026',
        author: 'Early Years Counselor',
        readTime: '4 Min Read',
        imgAlt: 'Happy toddler entering school',
        imgSrc: 'gallery/ec7b3026-e1f2-4bd7-96da-d4a673cdc418.jpg',
        bodyHtml: "<p>The transition from the safe cocoon of home to a <strong>playgroup in Mansarovar</strong> can be daunting for both toddlers and parents. Separation anxiety is completely normal, but there are ways to ease the process.</p>" +
            "<h2>1. Talk About School Positively</h2>" +
            "<p>Start talking about school weeks in advance. Drive past the KCWS campus and say, 'Look, that's your new school where you will make friends and play with toys!'</p>" +
            "<h2>2. Establish a Routine</h2>" +
            "<p>Toddlers thrive on predictability. Start waking them up at the 'school time' a week before classes begin. A consistent morning routine reduces stress.</p>" +
            "<h2>3. The Quick Goodbye</h2>" +
            "<p>When dropping off your child at our <strong>Jal (Playgroup)</strong> program, keep goodbyes short and sweet. Lingering only heightens anxiety. Trust our expert educators; children usually stop crying within minutes of you leaving!</p>" +
            "<h2>4. Validate Their Feelings</h2>" +
            "<p>If they cry, do not say 'Don't be sad'. Instead, say, 'I know you will miss me, and I will miss you too. But you are going to have so much fun, and I will pick you up after lunch.'</p>"
    },
    {
        filename: 'how-to-support-fine-motor-skills-at-home.html',
        metaTitle: 'How to Support Fine Motor Skills at Home | KCWS Guide',
        metaDesc: 'Discover simple, everyday activities you can do at home to help your preschooler develop crucial fine motor skills for writing.',
        metaKeywords: 'fine motor skills preschool, early childhood development, parenting tips, KCWS Mansarovar',
        bannerH1: 'How to Support Fine Motor Skills at Home',
        bannerP: 'Simple, everyday activities to prepare your child’s hands for writing.',
        tag: 'Parenting Guide',
        date: 'June 1, 2026',
        author: 'Occupational Therapist',
        readTime: '5 Min Read',
        imgAlt: 'Child threading beads',
        imgSrc: 'gallery/2eae975d-5cc4-4be2-b48f-1fa2e51a39f3.jpg',
        bodyHtml: "<p>Before a child can properly hold a pencil and write their name in Senior KG, they must develop the small muscles in their hands and fingers. These are called <strong>fine motor skills</strong>.</p>" +
            "<h2>Why It Matters</h2>" +
            "<p>Fine motor skills are essential for buttoning a shirt, using a fork, tying shoelaces, and eventually writing. While we heavily focus on this at KCWS through Montessori tools, parents can help at home!</p>" +
            "<h2>Easy Home Activities</h2>" +
            "<ul>" +
            "<li><strong>Playdough:</strong> Squeezing, rolling, and pinching playdough is the ultimate finger workout.</li>" +
            "<li><strong>Threading:</strong> Have your child thread large beads onto a shoelace.</li>" +
            "<li><strong>Tearing Paper:</strong> Let them tear old newspapers into tiny pieces to make a collage. This builds the 'pincer grasp'.</li>" +
            "<li><strong>Using Tongs:</strong> Ask them to transfer cotton balls from one bowl to another using kitchen tongs.</li>" +
            "</ul>" +
            "<p>Remember, building these muscles takes time. Patience and playful repetition are the keys to success.</p>"
    },
    {
        filename: 'the-impact-of-small-class-sizes-on-early-education.html',
        metaTitle: 'The Impact of Small Class Sizes on Early Education',
        metaDesc: 'Why student-teacher ratios matter. Learn how Kings Court World School ensures personalized attention for every preschooler in Jaipur.',
        metaKeywords: 'small class size preschool Jaipur, student teacher ratio kindergarten, personalized early education Mansarovar',
        bannerH1: 'The Impact of Small Class Sizes on Early Education',
        bannerP: 'Why individualized attention is the cornerstone of KCWS.',
        tag: 'Academics',
        date: 'June 8, 2026',
        author: 'Admissions Director',
        readTime: '4 Min Read',
        imgAlt: 'Teacher working closely with a small group of students',
        imgSrc: 'gallery/IMG_5215.jpg',
        bodyHtml: "<p>When evaluating the <strong>best kindergarten near Vandemataram Circle</strong>, parents often ask about infrastructure and fees. But one of the most critical metrics is the Student-Teacher Ratio.</p>" +
            "<h2>Personalized Attention</h2>" +
            "<p>In a classroom of 40 toddlers, it is impossible for a teacher to understand each child's unique emotional and academic needs. At Kings Court World School, we strictly maintain small class sizes.</p>" +
            "<h2>Safety and Security</h2>" +
            "<p>Fewer children per teacher means better supervision. In our Jal and Agni programs, robust ratios ensure your child is always safe, attended to, and emotionally supported.</p>" +
            "<h2>Tailored Learning Paths</h2>" +
            "<p>Because our teachers deeply know each student, they can adapt the Reggio Emilia projects to suit the specific interests of the group. If your child is fascinated by dinosaurs, our teachers have the bandwidth to pivot the lesson to include dinosaurs.</p>"
    },
    {
        filename: 'understanding-the-vayu-program-kcws-junior-kg-explained.html',
        metaTitle: 'Understanding the Vayu Program: KCWS Junior KG Explained',
        metaDesc: 'A deep dive into the Vayu (Junior KG) program at Kings Court World School. Discover why it is the best LKG curriculum in Mansarovar, Jaipur.',
        metaKeywords: 'Junior KG admission Jaipur, LKG syllabus, Vayu program KCWS, best LKG school near me',
        bannerH1: 'Understanding the Vayu Program: Junior KG Explained',
        bannerP: 'A deep dive into our specialized LKG curriculum.',
        tag: 'Programs',
        date: 'June 15, 2026',
        author: 'Academic Coordinator',
        readTime: '6 Min Read',
        imgAlt: 'Junior KG students collaborating',
        imgSrc: 'gallery/48da970f-0772-4d6c-91a2-cb8780f96d93.jpg',
        bodyHtml: "<p>The transition from Nursery to Junior KG is immense. At Kings Court World School, we call our Junior KG the <strong>Vayu Program</strong>—symbolizing the fluid, independent nature of wind.</p>" +
            "<h2>The Goal of Vayu</h2>" +
            "<p>If you are seeking <strong>LKG admission in Mansarovar</strong>, you want a program that balances play with structured readiness. Vayu achieves this perfectly.</p>" +
            "<h2>Key Academic Milestones</h2>" +
            "<ul>" +
            "<li><strong>Literacy:</strong> Moving from phonetic sounds to blending simple CVC (Consonant-Vowel-Consonant) words like 'cat', 'dog', and 'sun'.</li>" +
            "<li><strong>Numeracy:</strong> Understanding the true quantity behind numbers 1-20, basic addition using physical objects, and recognizing complex shapes.</li>" +
            "<li><strong>Social Skills:</strong> Transitioning from parallel play to cooperative play. Learning how to resolve conflicts independently.</li>" +
            "</ul>" +
            "<h2>Experiential Projects</h2>" +
            "<p>In Vayu, children undertake month-long projects. Whether they are building a mock grocery store to understand commerce or planting seeds to understand biology, the learning is entirely experiential.</p>"
    },
    {
        filename: 'why-outdoor-play-is-essential-for-preschoolers-in-jaipur.html',
        metaTitle: 'Why Outdoor Play is Essential for Preschoolers in Jaipur',
        metaDesc: 'Discover the cognitive, physical, and emotional benefits of outdoor play for kindergarteners at Kings Court World School.',
        metaKeywords: 'preschool outdoor play Jaipur, kindergarten sports Mansarovar, holistic development early years',
        bannerH1: 'Why Outdoor Play is Essential for Preschoolers',
        bannerP: 'Unplugging the screens and returning to nature.',
        tag: 'Development',
        date: 'June 22, 2026',
        author: 'Child Psychologist',
        readTime: '5 Min Read',
        imgAlt: 'Children playing outdoors',
        imgSrc: 'gallery/IMG_4005.jpg',
        bodyHtml: "<p>In an era dominated by iPads and television screens, the simple act of playing outside is more important than ever. At Kings Court World School, an <strong>affordable preschool in Mansarovar</strong>, we prioritize outdoor exploration.</p>" +
            "<h2>Physical Health Benefits</h2>" +
            "<p>Running, jumping, and climbing on our safe outdoor equipment develops gross motor skills, improves cardiovascular health, and helps children burn off excess energy so they can focus better in the classroom.</p>" +
            "<h2>Emotional Regulation</h2>" +
            "<p>Being in nature is inherently calming. Outdoor play reduces stress and anxiety in young children. It provides a sense of freedom that cannot be replicated indoors.</p>" +
            "<h2>Vitamin D and Immunity</h2>" +
            "<p>Safe exposure to morning sunlight is crucial for Vitamin D synthesis, which in turn builds strong bones and a robust immune system.</p>" +
            "<h2>Join Our Community</h2>" +
            "<p>When you tour our campus near Vandemataram Circle, make sure to explore our extensive outdoor and adventure sports areas designed specifically for preschoolers!</p>"
    }
];

// Generate HTML Files
blogs.forEach(blog => {
    let content = template;
    
    content = content.replace(/<title>.*?<\/title>/s, "<title>" + blog.metaTitle + "</title>");
    content = content.replace(/<meta name="description" content=".*?">/s, "<meta name=\"description\" content=\"" + blog.metaDesc + "\">");
    content = content.replace(/<meta name="keywords" content=".*?">/s, "<meta name=\"keywords\" content=\"" + blog.metaKeywords + "\">");
    content = content.replace(/<link rel="canonical" href=".*?" \/>/s, "<link rel=\"canonical\" href=\"https://www.kingscourtworldschool.com/" + blog.filename.replace('.html', '') + "\" />");
    
    content = content.replace(/<div class="inner-banner-content">\s*<h1>.*?<\/h1>\s*<p>.*?<\/p>\s*<\/div>/s, 
        "<div class=\"inner-banner-content\">\n" +
        "            <h1>" + blog.bannerH1 + "</h1>\n" +
        "            <p>" + blog.bannerP + "</p>\n" +
        "        </div>");

    content = content.replace(/<div class="post-meta-header">.*?<\/div>/s, 
        "<div class=\"post-meta-header\">\n" +
        "                    <span class=\"post-tag\">" + blog.tag + "</span>\n" +
        "                    <span><i class=\"far fa-calendar-alt\"></i> " + blog.date + "</span>\n" +
        "                    <span><i class=\"far fa-user\"></i> " + blog.author + "</span>\n" +
        "                    <span><i class=\"far fa-clock\"></i> " + blog.readTime + "</span>\n" +
        "                </div>");
    
    content = content.replace(/<div class="post-body">.*?<\/div>\s*<div class="post-share">/s, 
        "<div class=\"post-body\">\n" +
        "                    " + blog.bodyHtml + "\n" +
        "                </div>\n\n" +
        "                <div class=\"post-share\">");

    content = content.replace(/kingscourtworldschool\.com\/best_junior_kg_lkg_school\.html/g, "kingscourtworldschool.com/" + blog.filename);
    content = content.replace(/Finding%20the%20Best%20Junior%20KG%20School%20Near%20Vandemataram%20Circle/g, encodeURIComponent(blog.bannerH1));
    
    content = content.replace(/alt="Best Junior KG School near Vandemataram Circle Mansarovar Jaipur"/g, "alt=\"" + blog.imgAlt + "\"");
    content = content.replace(/src="https:\/\/kingscourtworldschool\.com\/gallery\/IMG_0804\.jpg"/g, "src=\"" + blog.imgSrc + "\"");

    fs.writeFileSync(blog.filename, content, 'utf8');
    console.log("Created " + blog.filename);
});

// Update blog.html
let blogHtmlContent = fs.readFileSync('blog.html', 'utf8');
let newCards = "";
blogs.forEach(blog => {
    newCards += `
            <div class="blog-card">
                <div class="blog-img-container">
                    <span class="blog-tag">${blog.tag}</span>
                    <img src="${blog.imgSrc}" alt="${blog.imgAlt}" loading="lazy">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-user"></i> ${blog.author}</span>
                    </div>
                    <h3>${blog.bannerH1}</h3>
                    <p>${blog.metaDesc.substring(0, 100)}...</p>
                    <a href="${blog.filename.replace('.html','')}" class="read-more">Read Full Post <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
`;
});
blogHtmlContent = blogHtmlContent.replace('<div class="blog-grid">', '<div class="blog-grid">' + newCards);
fs.writeFileSync('blog.html', blogHtmlContent);
console.log("Updated blog.html");

// Update sitemap.xml
let sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
let newUrls = "";
blogs.forEach(blog => {
    newUrls += `
<url>
  <loc>https://www.kingscourtworldschool.com/${blog.filename.replace('.html','')}</loc>
  <lastmod>2026-04-29T10:00:00+00:00</lastmod>
  <priority>0.90</priority>
</url>`;
});
sitemapContent = sitemapContent.replace('</urlset>', newUrls + '\n</urlset>');
fs.writeFileSync('sitemap.xml', sitemapContent);
console.log("Updated sitemap.xml");

