FROM node:22.14.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm iznstall -g nodemon

EXPOSE 5000

CMD [ "npm", "run", "server" ]