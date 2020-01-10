FROM node:11.7.0 AS build

ARG isProduction
ARG csssrSpaceOrigin
ARG NPM_TOKEN

WORKDIR /app

RUN echo "@dreamteam:registry=https://nexus.csssr.space/repository/csssr/\n\
//nexus.csssr.space/repository/csssr/:_authToken=${NPM_TOKEN}" > .npmrc

ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin

COPY package.json yarn.lock /app/
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

RUN rm .npmrc

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
