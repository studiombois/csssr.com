FROM node:11.10.1 AS build
ARG csssrSpaceOrigin
ENV NODE_ENV=production
ENV IS_PRODUCTION=TRUE
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . .
RUN yarn build

FROM node:11.10.1-alpine AS release
ENV NODE_ENV=production
ENV IS_PRODUCTION=TRUE
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY . .

CMD ["node", "-r", "esm", "/app/server/index.js"]
