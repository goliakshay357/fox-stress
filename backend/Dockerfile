FROM node:latest

WORKDIR /app

EXPOSE 4000

COPY . .

RUN npm install -g nodemon

RUN npm install

CMD ["node", "index.js"]