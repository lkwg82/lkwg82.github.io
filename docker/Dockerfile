FROM node:16.1-slim

RUN apt-get update && apt-get install -y python3 make gcc g++

RUN mkdir /src
WORKDIR /src

RUN npm install -g npm
RUN npm --version
