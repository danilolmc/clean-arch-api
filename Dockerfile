FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY dist .

EXPOSE 3333

CMD node index.js