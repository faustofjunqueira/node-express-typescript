FROM node:12.16.0

COPY ./dist /app/src
COPY ./config /app/config
COPY ./package.json /app
COPY ./package-lock.json /app

WORKDIR /app

RUN npm install --production


ENTRYPOINT [ "node", "./src/main.js" ]
