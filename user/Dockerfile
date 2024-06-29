FROM node:20.15.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /user
COPY yarn.lock package.json .
RUN npm i --silent --ignore-scripts -g prisma ts-node-dev 
RUN yarn --silent
COPY . .
USER fadi
EXPOSE ${DEV_PORT}
CMD yarn dev
