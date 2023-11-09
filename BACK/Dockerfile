FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

## EXPOSE
EXPOSE 5000

CMD ["npm", "run", "server"]
