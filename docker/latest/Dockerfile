FROM node:10.16.3-alpine AS build

WORKDIR /workspace/app

COPY assets assets
COPY config config
COPY scripts scripts
COPY src src
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

RUN npm run bu

FROM node:10.16.3-alpine
