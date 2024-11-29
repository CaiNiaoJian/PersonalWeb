// 监听滚动事件，添加动画
const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85 && !section.classList.contains('visible')) {
            section.classList.add('visible');
            
            // 触发卡片动画
            const cards = section.querySelectorAll('.card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                card.style.animationPlayState = 'running';
            });
        }
    });
};

// 初始化动画
document.addEventListener('DOMContentLoaded', () => {
    // 设置初始状态
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.animationPlayState = 'paused';
    });
    
    handleScroll(); // 首次加载检查
    window.addEventListener('scroll', handleScroll);
}); 