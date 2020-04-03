FROM node:11.10.1 AS build
RUN yarn policies set-version v1 && yarn --version

ARG isProduction
ARG csssrSpaceOrigin
ARG processImages
ARG NPM_TOKEN

WORKDIR /app

ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin
ENV PROCESS_IMAGES=$processImages

COPY package.json yarn.lock /app/

RUN npm config set //npm.pkg.github.com/:_authToken "${NPM_TOKEN}" && \
    npm config set @csssr:registry https://npm.pkg.github.com && \
    yarn --frozen-lockfile --network-timeout 600000 && \
    npm config rm //npm.pkg.github.com/:_authToken
COPY . .
RUN yarn build


FROM node:11.10.1-alpine AS release
ARG isProduction
ARG csssrSpaceOrigin
ARG processImages
ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin
ENV PROCESS_IMAGES=$processImages
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY . .

CMD ["node", "-r", "esm", "/app/server/index.js"]
