Dockerizing
===========


Usage
-----

### Services

#### up (foreground, detach)

- `docker-compose up`
- `docker-compose up -d` and `docker logs -f <container_name>`

#### down (stop, stop and clear: images, volumes and networks)

- `docker-compose down`
- `docker-compose down --rmi all -v`



### Enter Container

- `docker exec --it <running_container_name> sh`

Or, run another container:

- `docker run --rm -it --mount type=bind,source=$PWD,target=/usr/src/project lab/app:v1 sh` (the image **lab/app:v1** exist), or \
   `docker run --rm -it -v $PWD:/usr/src/project lab/app:v1 sh`
