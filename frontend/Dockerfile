FROM node:latest

WORKDIR /frontend

COPY ./package.json /frontend

RUN npm install

COPY . /frontend

RUN npm run build

CMD ["npx", "serve", "-s", "build"]

EXPOSE 5000