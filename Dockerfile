FROM node:16

# Create app directory
WORKDIR /
COPY package*.json ./
COPY package-lock.json ./

COPY . .
RUN npm install
CMD [ "npm", "start" ]


FROM alpine:3.16.0
WORKDIR /
# COPY --from=builder .env.test /ecommerce/.env 
COPY --from=builder /ecommerce .

EXPOSE 5000
ENTRYPOINT [ "./ecommerce" ]
