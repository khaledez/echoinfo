FROM node:18-alpine AS build
WORKDIR /usr/app
ADD . .
RUN npm ci
RUN npm run build

FROM node:18-alpine

WORKDIR /usr/app
ADD package* .
RUN npm install --omit=dev
COPY --from=build /usr/app/dist .

CMD [ "/usr/local/bin/node", "/usr/app/index.js" ]