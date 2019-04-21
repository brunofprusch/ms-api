FROM node:10.15.3

run mkdir /app
WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app

ENV PORT 3000
EXPOSE $PORT

CMD npm start