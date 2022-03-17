FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# sqlite3 throws error whenn running npm install, so we uninstall it here
# it is not used in prod env so its safe to uninstall it here
RUN npm uninstall sqlite3
RUN npm ci

COPY . ./

ENV NODE_ENV production
ENV DATABASE_SSL false
RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
