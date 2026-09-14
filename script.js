// ⚙️ 偵錯行：當網頁成功載入此檔案，會在瀏覽器控制台（Console）印出這行字
console.log("[Debug] script.js 已經與 index.html 成功連線！");

// 1. 抓取網頁中所有帶有 'nav-link' 類別的導航標籤
const navLinks = document.querySelectorAll('.nav-link');

// 2. 使用迴圈為每一個標籤加上「點擊（click）」監聽器
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        
        // ⚙️ 偵錯行：點擊時可以在控制台看到你點了哪一個項目
        console.log("[Debug] 用戶點擊了：", this.innerText);

        // A. 尋找目前帶有 'active' 藍色樣式的標籤，並把該樣式移除
        navLinks.forEach(item => item.classList.remove('active'));
        
        // B. 為當前被用戶點擊的這一個標籤，加上 'active' 樣式（使其變成藍色）
        this.classList.add('active');
    });
});
