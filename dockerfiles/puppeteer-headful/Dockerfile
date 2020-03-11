FROM node:12.10.0

# LABEL "com.github.actions.name"="Puppeteer Headful"
# LABEL "com.github.actions.description"="Docker image for Puppeteer, the Headful Chrome Node API"
# LABEL "com.github.actions.icon"="layout"
# LABEL "com.github.actions.color"="blue"

# LABEL "repository"=""
# LABEL "homepage"=""
# LABEL "maintainer"=""

# aliyun
RUN sed -i 's|deb.debian.org|mirrors.aliyun.com|g' /etc/apt/sources.list
RUN sed -i 's|security.debian.org/debian-security|mirrors.aliyun.com/debian-security|g' /etc/apt/sources.list

# RUN  apt-get update 

RUN  apt-get update \
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


ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
# NOT GOOD: 
RUN npm install puppeteer

COPY README.md /

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# CMD /usr/bin/x11vnc -display :1.0 -usepw -forever & node ./index.js
