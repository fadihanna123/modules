FROM node:20.17.0-alpine3.20
WORKDIR /content
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g prisma ts-node-dev
RUN yarn --silent
COPY . .
EXPOSE 5004
CMD ["yarn", "dev"]
