FROM node:16.13-buster

ARG JOB_LAUNCHER_SERVER_URL

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./public ./public
COPY ./src ./src

RUN REACT_APP_JOB_LAUNCHER_SERVER_URL=$JOB_LAUNCHER_SERVER_URL \
    yarn build