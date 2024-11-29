// 图片预加载模块
export const preloadImages = () => {
    // 使用七牛云测试域名
    const imageUrls = [
        'http://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302',
        'http://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302',
        'http://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302',
        'http://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302',
        'http://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302'
    ];

    // 创建一个加载所有图片的Promise数组
    const preloadPromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => reject(url);
        });
    });

    // 返回Promise，在所有图片加载完成后解析
    return Promise.all(preloadPromises);
}; 