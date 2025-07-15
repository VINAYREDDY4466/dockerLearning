FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

<<<<<<< HEAD
CMD ["node", "server.js"]
=======
CMD ["node" , "server.js"]
>>>>>>> 58f1988e499c4877d3d988e47ac3a1d5c5ca09f2
