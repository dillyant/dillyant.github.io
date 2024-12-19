document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');

    // 创建随机星星
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 5 + 3; // 星星大小
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
});