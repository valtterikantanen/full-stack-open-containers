FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm ci --only=production

RUN npm run build

RUN npm install -g serve

CMD [ "serve", "build" ]