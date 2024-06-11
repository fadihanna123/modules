FROM node:20.14.0-alpine3.20
WORKDIR /user
COPY package.json .
RUN npm i --ignore-scripts -g prisma ts-node-dev 
RUN yarn
COPY . .
EXPOSE ${PROD_PORT}
CMD yarn dev
