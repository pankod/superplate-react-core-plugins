FROM node:14-alpine

WORKDIR /opt/app

COPY package*.json ./

RUN npm ci 

COPY . /opt/app

RUN npm run build

FROM node:14-alpine

COPY --from=0 /opt/app/build /opt/app
WORKDIR /opt/app/

ENV NODE_ENV=production

RUN npm install -g serve

CMD serve -l 5000
