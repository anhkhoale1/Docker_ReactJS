# pull official base image
FROM node:13

# define work dir to container
WORKDIR /node

# copy node dependancies to project of container
COPY package*.json ./

# transfert sources code of the project to container project
COPY ./index.js ./

# install dependancies
RUN npm install

# exposing port where the express instance will run on
EXPOSE 8000

# command run
CMD [ "npm", "start" ]

