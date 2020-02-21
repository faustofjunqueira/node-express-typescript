FROM node:12.16.0

COPY ./dist /app/src
COPY ./config /app/config
COPY ./package.json /app
COPY ./package-lock.json /app

WORKDIR /app

ENV SERVER_PORT=8080

EXPOSE $SERVER_PORT
RUN npm install --production

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl --fail http://localhost:$SERVER_PORT/health || exit 1

ENTRYPOINT [ "node", "./src/main.js" ]
