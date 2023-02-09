FROM  node:16

# Create app directory
WORKDIR /
COPY package*.json ./
COPY package-lock.json ./
RUN touch .env
COPY .env.test .env

COPY . .
RUN npm install
CMD [ "npm", "start" ]

EXPOSE 5000
