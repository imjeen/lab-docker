/**
 * @name Youtube search
 *
 * @desc  Looks for Fleetwood Mac's "Dreams" video on youtube.com and clicks on the third video.
 * Waits for 5 seconds for the video to load.
 */
const path = require("path");
const puppeteer = require("puppeteer");
const screenshot = path.resolve(__dirname,   './.data/', "youtube_fm_dreams_video.png");
try {
    (async () => {
        console.log("__dirname => ",  path.resolve("./", __dirname));
        const browser = await puppeteer.launch({
            // headless: false, // opent chrome
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("http://youtube.com");
        await page.type("#search", "Fleetwood Mac Dreams");
        await page.click("button#search-icon-legacy");
        await page.waitForSelector("ytd-thumbnail.ytd-video-renderer");
        await page.screenshot({ 
            path: path.resolve(__dirname, './.data/', "youtube_fm_dreams_list.png"),
        });
        const videos = await page.$$("ytd-thumbnail.ytd-video-renderer");
        await videos[2].click();
        await page.waitForSelector(".html5-video-container");
        await page.waitFor(5000);
        await page.screenshot({ path: screenshot });
        await browser.close();
        console.log("See screenshot: " + screenshot);
    })();
} catch (err) {
    console.error(err);
}
