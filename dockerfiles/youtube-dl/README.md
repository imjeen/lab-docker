## Usage

```
# step 1: 编译镜像、启动容器（后台执行）
$ docker-compose up

# step 2: 开启 youtube-dl 容器（服务） 并进入容器: <container_name>
$ docker-compose run lab_youtube-dl sh

# step 3: 下载最好的资源 <url>
$ youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' <url>

```

结果文件都在目录 `lab-docker/downloads/`里

## youtube-dl

[youtube-dl document](https://github.com/rg3/youtube-dl)

- `youtube-dl [OPTIONS] URL [URL...]`
- 查看有效的格式： `youtube-dl -F <URL>`
- 下载最好的format： `youtube-dl -f <format_code> <URL>`


```bash
# Download best mp4 format available or any other best if no mp4 available
$ youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' <URL>

```

