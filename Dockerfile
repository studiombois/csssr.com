FROM node:10.16.1-alpine AS build
WORKDIR /deps
COPY package.json yarn.lock ./
RUN yarn install

FROM node:10.16.1-alpine AS release 
WORKDIR /app
COPY . .
COPY --from=build /deps/node_modules ./
ENV NODE_ENV=production
RUN ./node_modules/.bin/next build


CMD ["./node_modules/.bin/cross-env", "NODE_ENV=production", "node", "-r", "esm", "./server/index.js"]