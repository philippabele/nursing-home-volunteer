FROM node:14.18-alpine

WORKDIR /usr/src/nuxt-app

# make env variables from docker-compose available to nuxt
ARG API_HOST
ENV API_HOST ${API_HOST}

# copy the app, note .dockerignore
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
