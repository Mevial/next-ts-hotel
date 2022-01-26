FROM node:16.13.1-slim

WORKDIR /express

COPY package.json /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 8000

CMD yarn start
