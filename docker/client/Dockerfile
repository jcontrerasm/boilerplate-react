FROM node:10.16.3-alpine

WORKDIR /workspace/app

RUN \
  npm install -g yarn \
  yarn install

EXPOSE 3000

CMD yarn client:start
