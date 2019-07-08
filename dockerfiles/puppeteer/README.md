- [Github - puppeteer](https://github.com/GoogleChrome/puppeteer)

#### dockerfile

`docker build --no-cache .`

```
docker run -i --rm --cap-add=SYS_ADMIN \
    --name puppeteer-chrome puppeteer-chrome-linux \
    node -e "`cat youtube.js`"
```
`docker exec -it puppeteer-chrome sh`

#### compose

`docker-compose run --rm puppeteer-chrome`
