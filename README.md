## DOCKERIZE REACTJS AND MONGODB

## Installation of the project

Docker

# Clone the project with command git clone

- git clone https://github.com/anhkhoale1/Docker_ReactJS

# .env files

You have to create a .env file to stock your variable
`touch .env`

Add this variable in your .env file:
DATABASE=your-database-name
ROOT_USERNAME=root
ROOT_PASSWORD=your-password-root

# Build an image

On Dockerhub, we can not find the official image of ReactJS. To create a ReactJS's image. We have to create a project React in our directory.
Create a project ReactJS with `npx create-react-app`

# Build the project with composer

In docker-compose file, to build an image, we link the path of our image in 'build' variable
While creating the mongodb service, we have to defind the database's name, the root's password. For these values, they are defined in our .env file.

# Verifie the connection of database

We created a front part with reactjs and a back part with mongodb. Now we have to verifie the connection of this 2 parts. 
To verifie, I used a API. When client click on the button pull request, API will send to us a response. This response is taken from our database (mongodb)

# Gitflow

This project is using gitflow. All the features is created on feature branch, then they are merged to develop branch.
Finaly, we merge develop branch to master branch. Then we push our code to github.
