FROM node:16

COPY package*.json .
RUN npm install

COPY server.js .

EXPOSE 3002

CMD node server.js