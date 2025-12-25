const canvas = document.getElementById('starCanvas');  
const ctx = canvas.getContext('2d');  

canvas.width = window.innerWidth; // 设置画布宽度  
canvas.height = window.innerHeight; // 设置画布高度  

// 星星类  
class Star {  
    constructor() {  
        this.x = Math.random() * canvas.width; // 随机x坐标  
        this.y = Math.random() * canvas.height; // 随机y坐标  
        this.size = Math.random() * 2 + 1; // 星星大小  
        this.opacity = Math.random(); // 随机透明度  
        this.color = this.getRandomColor(); // 随机颜色  
    }  

    // 获取随机颜色  
    getRandomColor() {  
        const letters = '0123456789ABCDEF';  
        let color = '#';  
        for (let i = 0; i < 6; i++) {  
            color += letters[Math.floor(Math.random() * 16)];  
        }  
        return color;  
    }  

    // 更新星星透明度，使其闪烁  
    update() {  
        this.opacity += (Math.random() - 0.5) * 0.1; // 随机改变透明度  
        if (this.opacity < 0) this.opacity = 0;  
        if (this.opacity > 1) this.opacity = 1;  
    }  

    // 绘制星星  
    draw() {  
        ctx.globalAlpha = this.opacity; // 设置透明度  
        ctx.fillStyle = this.color; // 设置颜色  
        ctx.beginPath();  
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // 画星星  
        ctx.fill();  
        ctx.globalAlpha = 1; // 重置透明度  
    }  
}  

// 创建星星数组  
const stars = [];  
for (let i = 0; i < 200; i++) { // 创建200颗星星  
    stars.push(new Star());  
}  

// 动画循环  
function animate() {  
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布  

    for (let star of stars) {  
        star.update(); // 更新星星状态  
        star.draw(); // 绘制星星  
    }  

    requestAnimationFrame(animate); // 请求下一个动画帧  
}  

// 开始动画  
animate();