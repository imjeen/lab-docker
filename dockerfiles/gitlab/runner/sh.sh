#!/bin/bash

PROJECT=$1
REGISTRATION_TOKEN=$2
ENV=$3

docker run -d --name ${PROJECT}-${ENV}-runner --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:alpine-v1.11.4

docker exec -it ${PROJECT}-${ENV}-runner gitlab-runner register -n \
  --url https://gitlab.meitu.com/ \
  --tag-list ${ENV} \
  --registration-token ${REGISTRATION_TOKEN} \
  --executor docker \
  --description "${PROJECT}-${ENV}-runner" \
  --docker-image "docker:latest" \
  --docker-volumes /var/run/docker.sock:/var/run/docker.sock \
  --docker-pull-policy if-not-present \
  --run-untagged "true"