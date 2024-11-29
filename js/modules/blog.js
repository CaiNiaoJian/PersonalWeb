export const initBlog = () => {
    // 博客数据示例
    const blogPosts = [
        {
            title: '开始我的个人网站之旅',
            date: '2024-03-20',
            category: '技术',
            preview: '这是我的第一篇博客，记录了我建立个人网站的经历和思考...',
            link: '#'
        },
        // 可以添加更多博客数据
    ];

    const blogList = document.querySelector('.blog-list');
    if (!blogList) return;

    // 清空现有内容
    blogList.innerHTML = '';

    // 渲染博客卡片
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card fade-in';
        article.innerHTML = `
            <h3>${post.title}</h3>
            <div class="blog-meta">
                <span><i class="far fa-calendar"></i> ${post.date}</span>
                <span><i class="far fa-folder"></i> ${post.category}</span>
            </div>
            <div class="blog-preview">
                ${post.preview}
            </div>
            <a href="${post.link}" class="read-more">阅读更多 <i class="fas fa-arrow-right"></i></a>
        `;
        blogList.appendChild(article);
    });
}; 