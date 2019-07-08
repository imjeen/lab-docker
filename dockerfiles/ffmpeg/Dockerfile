
FROM node:9.3.0-alpine

RUN apk update && \ 
	apk upgrade && \ 
	apk add --no-cache ffmpeg && \ 
	ffmpeg -version

WORKDIR /data

# ENTRYPOINT ["ffmpeg"]

# CMD ["--help"]

## #!/bin/bash 
## sh

## docker build -t ffmpeg:v1 .
## docker run -it --rm -v $PWD:/data ffmpeg:v1 sh
