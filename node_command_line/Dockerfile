FROM node:22.9.0-alpine

WORKDIR /app

COPY package*.json ./
COPY index.js .

RUN npm install

CMD ["node", "index.js"]
