FROM alpine:3.6

ENV EDGE_REPOSITORY=http://dl-cdn.alpinelinux.org/alpine/edge/main

RUN apk update --repository $EDGE_REPOSITORY \
	&& apk add py-pip ca-certificates \
	&& pip install --upgrade pip \
	&& apk add ffmpeg --repository $EDGE_REPOSITORY \
	&& rm -rf /var/cache/apk/*

RUN pip install youtube-dl \
	&& youtube-dl --version \
	&& mkdir /downloads \
	&& chmod a+rw /downloads 

WORKDIR /downloads

# CMD 'youtube-dl --version'

# ENTRYPOINT ["youtube-dl"]
