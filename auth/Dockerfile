FROM node:20.17.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /auth
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g ts-node-dev 
RUN yarn --silent
COPY . .
USER fadi
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
