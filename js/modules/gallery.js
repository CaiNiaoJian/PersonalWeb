export const initGallery = () => {
    const images = [
        {
            src: '../assets/images/gallery/image1.jpg',
            title: '风景摄影',
            description: '大自然的美丽瞬间'
        },
        {
            src: '../assets/images/gallery/image2.jpg',
            title: '城市掠影',
            description: '现代都市的魅力'
        }
        // 可以添加更多图片
    ];

    const grid = document.querySelector('.gallery-grid');
    const imageViewer = document.querySelector('.image-viewer');
    const viewerImage = imageViewer.querySelector('img');
    const closeButton = imageViewer.querySelector('.close-button');

    if (!grid) return;

    // 渲染图片网格
    grid.innerHTML = images.map(image => `
        <div class="gallery-item fade-in">
            <img src="${image.src}" alt="${image.title}">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        </div>
    `).join('');

    // 图片查看器功能
    grid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const img = item.querySelector('img');
            viewerImage.src = img.src;
            imageViewer.classList.add('active');
        }
    });

    closeButton.addEventListener('click', () => {
        imageViewer.classList.remove('active');
    });

    imageViewer.addEventListener('click', (e) => {
        if (e.target === imageViewer) {
            imageViewer.classList.remove('active');
        }
    });
}; 