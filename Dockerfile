FROM node:11.7.0 AS build
ARG isProduction
ARG csssrSpaceOrigin
ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . .
RUN yarn build

FROM node:11.7.0-alpine AS release
ARG isProduction
ARG csssrSpaceOrigin
ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY . .

CMD ["node", "-r", "esm", "/app/server/index.js"]
