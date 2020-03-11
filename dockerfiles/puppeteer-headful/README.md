# Puppeteer Headful


```javascript
browser = await puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXEC_PATH, // set by docker container
  headless: false,
  ...
});
```

## 镜像加速

```yml

# aliyun
RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
RUN sed -i 's|security.debian.org/debian-security|mirrors.ustc.edu.cn/debian-security|g' /etc/apt/sources.list

# or qinghua
RUN sed -i 's|deb.debian.org|mirrors.aliyun.com|g' /etc/apt/sources.list
RUN sed -i 's|security.debian.org/debian-security|mirrors.aliyun.com/debian-security|g' /etc/apt/sources.list

RUN apt-get update
```

## TODO

debian 上安装 chrome： `wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - `。

- [ ] 替换安装地址
