# pull official base image
FROM node:13

# define that /app is our work dir
WORKDIR /app

# copy app dependancies to the working directory
COPY package*.json ./ 

# install the de dependancies
RUN npm install --silent

# copy app
COPY . .

# exposing the default development port to launch React
EXPOSE 3000

# lauching the instance of React
CMD [ "npm", "start" ]