
FROM node:18-alpine

RUN apk update && \ 
	apk upgrade && \ 
	apk add --no-cache ffmpeg && \ 
	ffmpeg -version

WORKDIR /data

# ENTRYPOINT ["ffmpeg"]

# CMD ["--help"]
