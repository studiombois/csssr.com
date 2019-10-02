FROM node:11.7.0 AS build
ENV NODE_ENV=production
ENV IS_PRODUCTION=TRUE
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . .
RUN yarn build

FROM node:11.7.0-alpine AS release
ENV NODE_ENV=production
ENV IS_PRODUCTION=TRUE
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY . .

CMD ["node", "-r", "esm", "/app/server/index.js"]
