FROM node:10.16.3-alpine

COPY ./app /workspace/app

WORKDIR /workspace/app

RUN \
  npm install    && \
  npm run lint   && \
  npm run test

EXPOSE 8000

CMD npm run server
