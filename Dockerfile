FROM  node:16

# Create app directory
WORKDIR /
COPY package*.json ./
COPY package-lock.json ./

ADD . .
RUN npm install
CMD [ "npm", "start" ]

FROM alpine:3.16.0
WORKDIR /
COPY --from=builder /ecommerce .
COPY --from=builder .env.test .env
RUN apk --no-cache add tzdata

ENTRYPOINT [ "./ecommerce" ]
EXPOSE 5000
