export const initBooks = () => {
    const books = [
        {
            title: 'JavaScript高级程序设计',
            author: '尼古拉斯·泽卡斯',
            cover: '../assets/images/books/js.jpg',
            readLink: '#',
            downloadLink: '#'
        },
        {
            title: 'Python编程：从入门到实践',
            author: 'Eric Matthes',
            cover: '../assets/images/books/python.jpg',
            readLink: '#',
            downloadLink: '#'
        }
        // 可以添加更多书籍
    ];

    const grid = document.querySelector('.books-grid');
    if (!grid) return;

    grid.innerHTML = books.map(book => `
        <div class="book-card fade-in">
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <div class="book-author">${book.author}</div>
                <div class="book-actions">
                    <a href="${book.readLink}">在线阅读</a>
                    <a href="${book.downloadLink}">下载</a>
                </div>
            </div>
        </div>
    `).join('');
}; 