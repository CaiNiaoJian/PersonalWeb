export const initBlogArticle = () => {
    // 分享按钮功能
    const shareButtons = document.querySelectorAll('.share-buttons button');
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.querySelector('i').classList.contains('fa-weixin') ? 'weixin' : 'weibo';
            shareArticle(platform);
        });
    });

    // 分享功能实现
    const shareArticle = (platform) => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        if (platform === 'weibo') {
            window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`);
        } else if (platform === 'weixin') {
            // 显示微信分享二维码
            alert('请使用微信扫描二维码分享');
        }
    };

    // 文章阅读进度条
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.clientHeight;
        const fullHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.scrollY / fullHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}; 