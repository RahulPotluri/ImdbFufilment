# ImdbFufilment
Creating an imdb Fulfilment

#Build docker image 
1) $ docker build -t node-web-app .
2) $ docker run -p 5000:3000 -d imdbfulfillment    
Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. To view exact output 

- Get container ID
$ docker ps

- Print app output
$ docker logs <container id>

3) $ docker container stop 1fa4ab2cf395 
Stop container on local
