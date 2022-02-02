FROM node:16.13.1-slim

EXPOSE 8000

WORKDIR /src

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

RUN chmod +x wait-for-postgres.sh

COPY . .

CMD ["node", "build/src/index.js"]
