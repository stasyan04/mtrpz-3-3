FROM node:18-alpine

WORKDIR /app
EXPOSE 3000

COPY package*.json .
RUN npm ci --only=production

COPY . .
CMD ["node", "app.js"]