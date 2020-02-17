FROM node:11.10.1 AS build

ARG isProduction
ARG csssrSpaceOrigin
ARG processImages
ARG NPM_TOKEN

WORKDIR /app

ENV NODE_ENV=production
ENV IS_PRODUCTION=$isProduction
ENV CSSSR_SPACE_ORIGIN=$csssrSpaceOrigin
ENV PROCESS_IMAGES=$processImages

COPY .npmrc package.json yarn.lock /app/
RUN echo "\n//nexus.csssr.space/repository/csssr/:_authToken=${NPM_TOKEN}" >> .npmrc && \
    yarn --frozen-lockfile && \
    sed '/\/\/nexus.csssr.space\/repository\/csssr\/:_authToken=/d' .npmrc
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
