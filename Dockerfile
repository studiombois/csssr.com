FROM node:11.10.1 AS build

ARG isProduction
ARG csssrSpaceOrigin
ARG NPM_TOKEN

WORKDIR /app

ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin

COPY .npmrc package.json yarn.lock /app/
RUN echo "//nexus.csssr.space/repository/csssr/:_authToken=${NPM_TOKEN}" >> .npmrc
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

RUN sed '/\/\/nexus.csssr.space\/repository\/csssr\/:_authToken=/d' .npmrc

FROM node:11.10.1-alpine AS release
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