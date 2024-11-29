export const initBlog = () => {
    const blogPosts = [
        {
            id: 1,
            title: '开始我的个人网站之旅',
            date: '2024-03-20',
            author: 'CaiNiaoJian',
            category: '技术',
            tags: ['Web开发', '个人网站', '前端'],
            preview: '在这篇文章中，我将分享我是如何从零开始构建这个个人网站的。从技术选型到具体实现，从设计理念到用户体验，让我们一起探讨现代化的Web开发实践。',
            readTime: '10分钟',
            link: '../blogpages/my-website-journey.html'
        },
        {
            id: 2,
            title: '现代前端开发趋势探讨',
            date: '2024-03-18',
            author: 'CaiNiaoJian',
            category: '前端',
            tags: ['JavaScript', 'Web开发', '技术趋势'],
            preview: '前端开发领域日新月异，本文将探讨2024年最新的前端开发趋势，包括框架选择、性能优化、开发工具等多个方面。',
            readTime: '8分钟',
            link: '#'
        },
        {
            id: 3,
            title: 'AI在Web开发中的应用',
            date: '2024-03-15',
            author: 'CaiNiaoJian',
            category: 'AI',
            tags: ['人工智能', 'Web开发', '技术创新'],
            preview: '人工智能正在改变Web开发的方式。从智能代码补全到自动化测试，AI工具正在提升开发效率和代码质量。',
            readTime: '12分钟',
            link: '#'
        }
    ];

    const blogList = document.querySelector('.blog-list');
    if (!blogList) return;

    // 渲染博客列表
    const renderBlogPosts = (posts) => {
        blogList.innerHTML = posts.map(post => `
            <article class="blog-card fade-in">
                <h3>${post.title}</h3>
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                    <span><i class="far fa-folder"></i> ${post.category}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <div class="blog-tags">
                    ${post.tags.map(tag => `
                        <span class="blog-tag">${tag}</span>
                    `).join('')}
                </div>
                <div class="blog-preview">
                    ${post.preview}
                </div>
                <a href="${post.link}" class="read-more" target="_blank">
                    阅读更多 <i class="fas fa-arrow-right"></i>
                </a>
            </article>
        `).join('');
    };

    // 初始化渲染
    renderBlogPosts(blogPosts);

    // 添加分类筛选功能
    const categories = [...new Set(blogPosts.map(post => post.category))];
    const filters = document.querySelector('.blog-filters');
    
    if (filters) {
        filters.innerHTML = `
            <button class="filter-button active" data-category="all">全部</button>
            ${categories.map(category => `
                <button class="filter-button" data-category="${category}">${category}</button>
            `).join('')}
        `;

        filters.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-button')) {
                const category = e.target.dataset.category;
                
                // 更新按钮状态
                filters.querySelectorAll('.filter-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');

                // 筛选文章
                const filteredPosts = category === 'all' 
                    ? blogPosts 
                    : blogPosts.filter(post => post.category === category);
                
                renderBlogPosts(filteredPosts);
            }
        });
    }
}; 