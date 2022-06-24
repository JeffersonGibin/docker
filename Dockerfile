
# Stage 1 - Build
FROM golang:1.18 as build

WORKDIR /usr/src/app

COPY /src/main.go ./main.go

RUN go mod init main

RUN go build -ldflags "-s -w"

# Stage 2 - Image size reduzed
FROM scratch

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/main /usr/src/app/main

CMD [ "./main"]