FROM node:alpine

WORKDIR /webapp/

ADD /package.json /package.json ./

RUN \
    apk update && \
    apk upgrade && \
#    apk add g++ gcc python && \
    ls -ls && \
    npm install -d

COPY . .

CMD npm run build


