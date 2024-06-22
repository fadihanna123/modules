FROM node:20.14.0-alpine3.20
WORKDIR /auth
COPY package.json .
RUN npm i --ignore-scripts -g ts-node-dev 
RUN yarn
COPY . .
EXPOSE ${DEV_PORT}
CMD yarn dev
