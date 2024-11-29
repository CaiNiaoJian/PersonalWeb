import { preloadImages } from './modules/preload.js';

export const initWallImages = async () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;
    
    const slides = Array.from(track.children);
    const dots = Array.from(document.querySelectorAll('.dot'));
    let currentIndex = 0;
    let isMoving = false;
    let autoplayInterval;

    // 添加加载状态指示
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">加载图片中...</div>
    `;
    track.parentElement.appendChild(loadingIndicator);

    // 图片加载处理函数
    const handleImageLoad = (slide) => {
        const img = slide.querySelector('img');
        if (img.complete) {
            slide.classList.add('loaded');
        } else {
            img.onload = () => slide.classList.add('loaded');
            img.onerror = () => {
                // 如果加载失败，使用备用图片
                img.src = 'https://via.placeholder.com/800x600?text=Loading+Error';
            };
        }
    };

    try {
        // 预加载所有图片
        await Promise.all(slides.map(slide => {
            return new Promise((resolve) => {
                const img = slide.querySelector('img');
                handleImageLoad(slide);
                img.onload = resolve;
                img.onerror = resolve; // 即使加载失败也继续
            });
        }));

        // 移除加载指示器
        loadingIndicator.remove();
        
        // 显示轮播图
        track.style.opacity = '1';
        
        // 更新轮播状态
        const updateCarousel = () => {
            if (isMoving) return;
            
            slides.forEach((slide, index) => {
                slide.className = 'carousel-slide loaded'; // 添加 loaded 类
                slide.style.transform = 'translateX(100%)';
                slide.style.opacity = '0';
                slide.style.zIndex = '1';
                
                if (index === currentIndex) {
                    slide.classList.add('active');
                    slide.style.transform = 'translateX(-50%)';
                    slide.style.opacity = '1';
                    slide.style.zIndex = '5';
                } else if (index === (currentIndex + 1) % slides.length) {
                    slide.classList.add('next');
                    slide.style.transform = 'translateX(20%)';
                    slide.style.opacity = '0.7';
                    slide.style.zIndex = '4';
                } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                    slide.style.transform = 'translateX(-120%)';
                    slide.style.opacity = '0.7';
                    slide.style.zIndex = '4';
                }
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        // 自动播放
        const startAutoplay = () => {
            return setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
            }, 12000);
        };

        // 事件监听
        document.querySelector('.next-button')?.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
            setTimeout(() => { isMoving = false; }, 750);
        });

        document.querySelector('.prev-button')?.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
            setTimeout(() => { isMoving = false; }, 750);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (isMoving || currentIndex === index) return;
                isMoving = true;
                currentIndex = index;
                updateCarousel();
                setTimeout(() => { isMoving = false; }, 750);
            });
        });

        // 初始化
        updateCarousel();
        autoplayInterval = startAutoplay();

        // 鼠标悬停控制
        track.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });

        track.addEventListener('mouseleave', () => {
            autoplayInterval = startAutoplay();
        });

    } catch (error) {
        console.error('图片加载失败:', error);
        loadingIndicator.innerHTML = '图片加载失败，请刷新页面重试';
    }
}; 