FROM node:10.16.1-alpine AS build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . .
RUN yarn build

FROM node:10.16.1-alpine AS release 
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY . .

ENV NODE_ENV=production 

CMD ["node", "-r", "esm", "/app/server/index.js"]
