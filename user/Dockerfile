FROM node:22.14.0-alpine3.20
WORKDIR /user
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g prisma ts-node-dev 
RUN yarn --silent
COPY . .
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
