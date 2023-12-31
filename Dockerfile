FROM node:latest
WORKDIR /usr/src/index
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]