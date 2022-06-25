FROM node:16 as build

WORKDIR /usr/microservice

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copiar arquivos da máquina para o container 
COPY package.* /usr/microservice
COPY src /usr/microservice

# Faz a instalação das dependencias Node.js
RUN npm install

EXPOSE 3000
