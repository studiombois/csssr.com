FROM node:11.7.0 AS build
RUN yarn policies set-version v1 && yarn --version

ARG isProduction
ARG csssrSpaceOrigin
ARG NPM_TOKEN

WORKDIR /app

ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin

COPY package.json yarn.lock /app/

RUN npm set //nexus.csssr.space/repository/csssr/:_auth "${NPM_TOKEN}" && \
    npm config set @dreamteam:registry https://nexus.csssr.space/repository/csssr/ && \
    yarn --frozen-lockfile && \
    npm config rm //nexus.csssr.space/repository/csssr/:_authToken
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
