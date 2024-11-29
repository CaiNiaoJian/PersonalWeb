export const initKnowledge = () => {
    const categories = [
        {
            title: '前端开发',
            icon: 'fas fa-code',
            articles: [
                { title: 'HTML5新特性详解', link: '#' },
                { title: 'CSS3动画实践', link: '#' },
                { title: 'JavaScript高级技巧', link: '#' }
            ]
        },
        {
            title: '后端开发',
            icon: 'fas fa-server',
            articles: [
                { title: 'Node.js实战指南', link: '#' },
                { title: 'Python Web开发', link: '#' }
            ]
        },
        {
            title: '人工智能',
            icon: 'fas fa-brain',
            articles: [
                { title: '机器学习入门', link: '#' },
                { title: '深度学习基础', link: '#' }
            ]
        }
    ];

    const grid = document.querySelector('.knowledge-grid');
    if (!grid) return;

    grid.innerHTML = categories.map(category => `
        <div class="category-card fade-in">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.title}</h3>
            <div class="article-list">
                ${category.articles.map(article => `
                    <div class="article-item">
                        <a href="${article.link}">${article.title}</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}; 