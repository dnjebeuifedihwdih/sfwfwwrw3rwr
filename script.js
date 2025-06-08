const tg = window.Telegram.WebApp;
tg.ready();

const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
    const url = document.getElementById('url').value;
    const requests = document.getElementById('requests').value;
    const threads = document.getElementById('threads').value;
    const delay = document.getElementById('delay').value;

    if (!url || !requests || !threads) {
        tg.showAlert('لطفاً تمام فیلدها را پر کنید.');
        return;
    }

    const data = {
        url: url,
        requests: parseInt(requests),
        threads: parseInt(threads),
        delay: parseFloat(delay)
    };

    tg.sendData(JSON.stringify(data));
    tg.close();
});
