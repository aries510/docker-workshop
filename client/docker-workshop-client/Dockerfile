FROM node:latest

COPY . /app

EXPOSE 5173

WORKDIR /app

RUN npm install

CMD [ "npm", "run", "dev" ]