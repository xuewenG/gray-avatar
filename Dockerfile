FROM node:12.17.0-stretch

LABEL maintainer="xuewenG" \
        site="https://github.com/xuewenG/auto-deploy"

WORKDIR /root

COPY package.json .

RUN set -x \
    && mkdir -p log \
    && yarn

COPY src .

ENTRYPOINT ["node", "index.js"]
