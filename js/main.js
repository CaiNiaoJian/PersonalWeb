// 导入需要的模块
import { initWallImages } from './wallimages.js';
import { initAuthorInfo } from './authorinfo.js';

// 导航菜单切换
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// 页面滚动时导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各个模块
    initWallImages();
    initAuthorInfo();
}); 