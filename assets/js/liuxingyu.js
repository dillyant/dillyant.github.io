const canvas = document.getElementById('meteorCanvas');  
const ctx = canvas.getContext('2d');  

canvas.width = window.innerWidth; // 设置画布宽度  
canvas.height = window.innerHeight; // 设置画布高度  

// 流星类  
class Meteor {  
    constructor() {  
        this.x = Math.random() * canvas.width; // 随机x坐标  
        this.y = Math.random() * canvas.height; // 随机y坐标  
        this.length = Math.random() * 100 + 50; // 流星长度  
        this.opacity = Math.random() * 0.5 + 0.5; // 流星透明度  
        this.speed = Math.random() * 5 + 2; // 流星速度  
    }  

    // 更新流星位置  
    update() {  
        this.x += this.speed; // 向右移动  
        this.y += this.speed * 0.5; // 向下移动  
        // 重新生成流星位置  
        if (this.x > canvas.width || this.y > canvas.height) {  
            this.x = Math.random() * -200; // 从左侧重新出现  
            this.y = Math.random() * canvas.height;  
        }  
    }  

    // 绘制流星  
    draw() {  
        ctx.globalAlpha = this.opacity; // 设置透明度  
        ctx.beginPath();  
        ctx.moveTo(this.x, this.y);  
        ctx.lineTo(this.x - this.length, this.y - this.length);  
        ctx.strokeStyle = 'white'; // 流星颜色  
        ctx.lineWidth = 2;  
        ctx.stroke();  
        ctx.globalAlpha = 1; // 重置透明度  
    }  
}  

// 创建流星数组  
const meteors = [];  
for (let i = 0; i < 100; i++) { // 创建100个流星  
    meteors.push(new Meteor());  
}  

// 动画循环  
function animate() {  
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布  

    for (let meteor of meteors) {  
        meteor.update(); // 更新流星位置  
        meteor.draw(); // 绘制流星  
    }  

    requestAnimationFrame(animate); // 请求下一个动画帧  
}  

// 开始动画  
animate();