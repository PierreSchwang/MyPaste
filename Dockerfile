FROM node:10-alpine

RUN mkdir -p /app/node_modules
WORKDIR /app
COPY . /app
RUN rm -rf /app/mode_modules/* && chown -R node:node /app
USER node
RUN npm install
RUN npm run build
EXPOSE 1337
ENTRYPOINT ["node", "dist/index.js"]
