FROM node:22.17.1-slim
WORKDIR /auth
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g ts-node-dev 
RUN yarn --silent
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
