FROM node:11.7.0 AS build

ARG isProduction
ARG csssrSpaceOrigin
ARG githubToken

# Для установки npm-пакетов с приватных github-репозиториев (начало)
RUN git config --global url."https://${githubToken}:x-oauth-basic@github.com/".insteadOf "git@github.com:"
# Для установки npm-пакетов с приватных github-репозиториев (конец)

ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

RUN git config --global --remove-section url."https://${githubToken}:x-oauth-basic@github.com/"


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
