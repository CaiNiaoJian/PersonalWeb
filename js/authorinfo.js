export const initAuthorInfo = () => {
    const authorSection = document.querySelector('.author-section');
    const authorCard = document.querySelector('.author-card');
    
    if (!authorSection || !authorCard) return;

    // 添加鼠标进入效果
    authorCard.addEventListener('mouseenter', () => {
        authorCard.classList.add('expanded');
    });

    // 添加鼠标离开效果
    authorCard.addEventListener('mouseleave', () => {
        authorCard.classList.remove('expanded');
    });

    // 添加点击效果（移动端）
    authorCard.addEventListener('click', (e) => {
        if (window.innerWidth <= 1200) {
            authorCard.classList.toggle('expanded');
        }
    });

    // 防止详情项点击事件冒泡
    const detailItems = authorCard.querySelectorAll('.author-detail-item');
    detailItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}; 