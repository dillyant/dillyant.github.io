const canvas = document.getElementById('heartCanvas');  
const ctx = canvas.getContext('2d');  

canvas.width = window.innerWidth; // 设置画布宽度  
canvas.height = window.innerHeight; // 设置画布高度  

function drawHeart(x, y, size) {  
    ctx.beginPath();  
    ctx.moveTo(x, y);  
    ctx.bezierCurveTo(x, y - size * 0.5, x - size, y - size * 0.5, x - size, y);  
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 0.5, x, y + size);  
    ctx.bezierCurveTo(x, y + size * 0.5, x + size, y + size, x + size, y);  
    ctx.bezierCurveTo(x + size, y - size * 0.5, x, y - size * 0.5, x, y);  
    ctx.fillStyle = 'red'; // 爱心颜色  
    ctx.fill();  
    ctx.closePath();  
}  

// 动画效果  
let scale = 1; // 初始缩放  
let growing = true; // 是否正在增长  

function animate() {  
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布  
    const centerX = canvas.width / 2;  
    const centerY = canvas.height / 2;  

    // 绘制缩放的爱心  
    ctx.save(); // 保存当前状态  
    ctx.translate(centerX, centerY); // 移动到中心点  
    ctx.scale(scale, scale); // 应用缩放  
    drawHeart(0, 0, 100); // 绘制爱心  
    ctx.restore(); // 恢复状态  

    // 修改缩放比例  
    if (growing) {  
        scale += 0.01; // 增加缩放  
        if (scale >= 1.2) {  
            growing = false; // 到达最大值，开始缩小  
        }  
    } else {  
        scale -= 0.01; // 减少缩放  
        if (scale <= 1) {  
            growing = true; // 到达最小值，开始增长  
        }  
    }  

    requestAnimationFrame(animate); // 请求下一个动画帧  
}  

// 开始动画  
animate();