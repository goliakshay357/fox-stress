FROM node:latest

WORKDIR /app

EXPOSE 4000

# #install tini from tini github
# RUN apk add --no-cache tini

RUN apt-get update

RUN apt-get install apache2-utils

COPY . .

RUN npm install -g nodemon

RUN npm install

# ENTRYPOINT ["/sbin/tini", "--"]

CMD ["nodemon", "index.js"]