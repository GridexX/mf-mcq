FROM node:18-alpine3.16 AS build
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN npm install

FROM node:18-alpine3.16 AS serve
WORKDIR /app/dist
COPY --from=build /app/dist /app/dist
ENTRYPOINT [ "npx", "serve", "-l", "tcp://0.0.0.0:3001" ]