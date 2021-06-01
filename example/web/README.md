# web

一个 web 的例子：包含 `nginx`



```bash

# 当前目录

# step#1: 查看 docker-compose.yml 声明的容器
docker-compose ps --service

# step#2: 创建 或 启动容器（在后台）
docker-compose up -d

#  step#3: 运行 docker-compose 构建的容器
docker-compose run --rm app sh
# 或者 step#3: 通过镜像（eg_lab/app:v1）进入临时容器
# docker run --rm -it -v $PWD:/usr/www eg_lab/app:v1 sh

# 依赖包安装（或在构建镜像时安装依赖）
npm i

# 监听
npm run watch
# 编译
# npm run build

# 宿主 chrome 访问web地址
http://localhost:9090/


```
