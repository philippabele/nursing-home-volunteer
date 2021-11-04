### STAGE 1: Build ###
FROM node:14.18-alpine as build

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Usage of nginx stage reduces final frontend docker image size by 400MB
### STAGE 2: NGINX ###
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# copy nginx conf for SPA (single page application) that redirects non existing routes to root route
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
