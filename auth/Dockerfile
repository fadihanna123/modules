FROM node:22.19.0-slim
WORKDIR /auth
COPY yarn.lock package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
