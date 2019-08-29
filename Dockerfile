FROM node:10.16.1-alpine AS build
WORKDIR /app
COPY . /app
RUN yarn && yarn build 

FROM node:10.16.1-alpine AS release 
WORKDIR /app
COPY --from=build /app /app 
ENV NODE_ENV=production 


CMD [ "node", "-r", "esm", "/app/server/index.js"  ]