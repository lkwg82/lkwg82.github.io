FROM node:16.1-slim

RUN mkdir /src
WORKDIR /src

RUN npm install -g npm
RUN npm install || cat /root/.npm/_logs/*log
RUN npm --version