FROM debian:10.3

# aliyun
RUN sed -i 's|deb.debian.org|mirrors.aliyun.com|g' /etc/apt/sources.list
RUN sed -i 's|security.debian.org/debian-security|mirrors.aliyun.com/debian-security|g' /etc/apt/sources.list

RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.utf8

RUN apt-get update \
    && apt-get install -y ca-certificates gnupg2  gpg \
    # See https://crbug.com/795759
    && apt-get install -yq libgconf-2-4 \
    # Install latest chrome dev package, which installs the necessary libs to
    # make the bundled version of Chromium that Puppeteer installs work.
    && apt-get install -y wget xvfb --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# brew
RUN apt-get update && apt-get -y install build-essential curl file git
RUN git clone https://github.com/Homebrew/brew ~/.linuxbrew/Homebrew \
    && mkdir ~/.linuxbrew/bin \
    && ln -s ../Homebrew/bin/brew ~/.linuxbrew/bin \
    && eval $(~/.linuxbrew/bin/brew shellenv) \
    && brew --version
    
ENV PATH=~/.linuxbrew/bin:~/.linuxbrew/sbin:$PATH

# nvm 
# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# nvm environment variables
RUN mkdir -p  /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 12.16.1
# install nvm
# https://github.com/creationix/nvm#install-script
RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN npm install puppeteer

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

