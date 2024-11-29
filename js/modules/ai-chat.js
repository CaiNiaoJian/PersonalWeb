export const initAiChat = () => {
    const messagesContainer = document.querySelector('.chat-messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // 初始欢迎消息
    addMessage('AI', '你好！我是AI助手，有什么可以帮你的吗？');

    // 发送消息事件处理
    const sendMessage = () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage('User', message);
            messageInput.value = '';
            
            // 模拟AI响应
            setTimeout(() => {
                addMessage('AI', `收到你的消息：${message}`);
            }, 1000);
        }
    };

    // 添加消息到聊天界面
    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender.toLowerCase()} fade-in`;
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="${sender === 'AI' ? 'fas fa-robot' : 'fas fa-user'}"></i>
            </div>
            <div class="message-content">
                ${text}
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // 事件监听
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}; 