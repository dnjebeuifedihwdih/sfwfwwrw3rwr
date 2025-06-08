const tg = window.Telegram.WebApp;
tg.expand(); // بزرگ کردن پنجره مینی اپ

document.addEventListener('DOMContentLoaded', () => {
    tg.ready();
    tg.setHeaderColor('#007bff');
    tg.backgroundColor = '#f4f4f9';
    
    const startBtn = document.getElementById('start-btn');
    
    startBtn.addEventListener('click', () => {
        const url = document.getElementById('url').value.trim();
        const requests = document.getElementById('requests').value;
        const threads = document.getElementById('threads').value;
        const delay = document.getElementById('delay').value;
        
        // اعتبارسنجی داده‌ها
        if (!url || !requests || !threads || !delay) {
            tg.showAlert('لطفاً تمام فیلدها را پر کنید!');
            return;
        }
        
        if (!url.startsWith('http')) {
            tg.showAlert('آدرس سایت باید با http یا https شروع شود');
            return;
        }
        
        const data = {
            action: 'start_test',
            url: url,
            requests: parseInt(requests),
            threads: parseInt(threads),
            delay: parseFloat(delay)
        };
        
        // نمایش تایید نهایی
        tg.showConfirm(
            آیا مطمئنید می‌خواهید تست را شروع کنید؟
            
آدرس: ${url}
تعداد درخواست: ${requests}
تعداد ترد: ${threads}
تأخیر: ${delay} ثانیه,
            (confirmed) => {
                if (confirmed) {
                    tg.sendData(JSON.stringify(data));
                    tg.close();
                }
            }
        );
    });
});
