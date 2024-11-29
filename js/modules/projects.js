export const initProjects = () => {
    const projects = [
        {
            name: '个人网站项目',
            description: '基于HTML、CSS和JavaScript的响应式个人网站',
            icon: 'fas fa-globe',
            stars: 45,
            forks: 12,
            language: 'JavaScript',
            githubLink: '#',
            demoLink: '#'
        },
        {
            name: 'AI聊天机器人',
            description: '基于深度学习的智能对话系统',
            icon: 'fas fa-robot',
            stars: 128,
            forks: 34,
            language: 'Python',
            githubLink: '#',
            demoLink: '#'
        }
        // 可以添加更多项目
    ];

    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-card fade-in">
            <div class="project-header">
                <div class="project-icon">
                    <i class="${project.icon}"></i>
                </div>
                <h3>${project.name}</h3>
            </div>
            <p>${project.description}</p>
            <div class="project-stats">
                <div class="project-stat">
                    <i class="fas fa-star"></i>
                    <span>${project.stars}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-code-branch"></i>
                    <span>${project.forks}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-code"></i>
                    <span>${project.language}</span>
                </div>
            </div>
            <div class="project-links">
                <a href="${project.githubLink}">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.demoLink}">
                    <i class="fas fa-external-link-alt"></i> 演示
                </a>
            </div>
        </div>
    `).join('');
}; 