FROM node:11.7.0 AS build

ARG csssrSpaceOrigin
ARG githubToken

# Для установки npm-пакетов с приватных github-репозиториев (начало)
RUN apk add --no-cache git
RUN git config --global url."https://${githubToken}:x-oauth-basic@github.com/".insteadOf "git@github.com:"
# Для установки npm-пакетов с приватных github-репозиториев (конец)

ENV NODE_ENV=production
ENV IS_PRODUCTION=TRUE
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . .
RUN yarn build

RUN git config --global --remove-section url."https://${githubToken}:x-oauth-basic@github.com/"


FROM node:11.7.0-alpine AS release
ENV NODE_ENV=production
ENV IS_PRODUCTION=TRUE
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY . .

CMD ["node", "-r", "esm", "/app/server/index.js"]
