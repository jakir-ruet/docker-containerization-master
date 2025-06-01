# BASE IMAGE BUILD
FROM ubuntu AS build
RUN apt-get update && apt-get install golang-go -y
ENV GO111MODULE=off
COPY . .
RUN CGO_ENABLED=0 go build -o /app .
ENTRYPOINT [ "/app" ]