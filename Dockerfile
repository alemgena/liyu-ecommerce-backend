FROM  alpine:3.16.0

# Create app directory
WORKDIR /
COPY package*.json ./
COPY package-lock.json ./
RUN touch .env
COPY .env.test .env

COPY . .
RUN npm install
CMD [ "npm", "start" ]


FROM alpine:3.16.0
WORKDIR /
COPY --from=builder /ecommerce .
RUN apk --no-cache add tzdata

EXPOSE 5000
ENTRYPOINT [ "./ecommerce" ]