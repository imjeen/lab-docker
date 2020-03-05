# docker-chrome

Running Puppeteer in Docker

## develop

```

docker-compose run chrome bash

```

## example

- [Running Puppeteer in Docker](https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker)
- [Karma and Protractor with Chromium in a docker container](https://github.com/sylvaindumont/docker-node-karma-protractor-chrome)


```yml
FROM node:alpine

RUN apk add --no-cache \
    udev \
    ttf-freefont \
    chromium

ENV CHROME_BIN /usr/bin/chromium-browser

```

```js
puppeteer.launch({
  executablePath: '/usr/bin/chromium-browser', // process.env.CHROME_BIN
  args: ['--no-sandbox', '--headless', '--disable-gpu']
});
```
