FROM node:24.12-alpine
WORKDIR /auth
COPY yarn.lock package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
