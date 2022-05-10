FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=2784

EXPOSE 2784

CMD [ "npm", "start" ]
