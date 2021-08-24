FROM node:16.7.0

ENV SERVICE_PORT=8080 
ENV LISTEN_PORT=8081
ENV HOST="localhost"
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
RUN apt update && apt install sudo
COPY . .

CMD ["node", "index.js" ]
