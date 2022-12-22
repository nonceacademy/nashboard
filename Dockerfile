FROM node:16-alpine AS build

ARG VITE_UPSTASH_ENDPOINT
ARG VITE_UPSTASH_BEARER

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM node:16-alpine AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build .
RUN yarn --prod
CMD ["node", "index.js"]