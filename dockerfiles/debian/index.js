const puppeteer = require('puppeteer');

(async () => {
    console.log('\nTry to launch the chrome...');
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "/usr/bin/google-chrome-stable", // process.env.PUPPETEER_EXEC_PATH 
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
        ]
    });
    console.log('It turns out OK.');
    const page = await browser.newPage();
    await page.goto('https://google.com', { waitUntil: 'networkidle2' });

    console.log('hold it for a while...(new page in chrome)');
    await page.waitFor(10000);
    console.log('Done!\n');

    await browser.close();

})();
