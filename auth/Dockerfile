FROM node:22.21.0-alpine
WORKDIR /auth
COPY yarn.lock package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
