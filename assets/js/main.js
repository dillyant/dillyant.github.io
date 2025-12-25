const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("img").addEventListener("click", function () {
    alert("别戳我，我怕疼！");
});

let currentIndex = 0; // 使用let声明变量，确保其作用域在块级

const myImage = document.querySelector("img");
if (myImage) { // 添加错误处理，防止未找到img元素
    myImage.onclick = () => {
        try {
            const image = `assets/images/pkq${currentIndex}.jfif`; // 使用模板字符串简化代码
            myImage.setAttribute("src", image);
            currentIndex = (currentIndex + 1) % 3; // 更新索引
        } catch (error) {
            console.error("图片切换出错:", error); // 错误处理
        }
    }
} else {
    console.error("未找到图片元素！"); // 错误处理
}