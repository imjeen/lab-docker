## CE


logs: `docker logs -f gitlab`


for [sameersbn/gitlab](https://hub.docker.com/r/sameersbn/gitlab/):

- backup: `docker-compose run gitlab app:rake gitlab:backup:create`
- reback: `docker-compose run –rm gitlab app:rake gitlab:backup:restore BACKUP=<PRE>`

to the directory: `data/gitlab/backups`


- [Install GitLab using docker-compose ](https://docs.gitlab.com/omnibus/docker/#install-gitlab-using-docker-compose)


## runner

```
docker run -d --name gitlab-runner --restart always \
  -w /data \
  -v $PWD/data/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest
```


- `docker exec -it gitlab-runner /bin/bash` (or `docker-compose run gitlab-runner /bin/bash`)
- `gitlab-ci-multi-runner register` (or `gitlab-runner register`)

- `gitlab-ci-multi-runner --debug -l debug run --config ./config.toml`
- `gitlab-ci-multi-runner --debug run`

- `gitlab-ci-multi-runner list`
- `gitlab-runner unregister --name <name>`
- `gitlab-runner verify`

`config.toml`: (the Runner unable to clone repository)

```
 [runners.docker]
 	extra_hosts = ["localhost:<your_local_ip>"]
```

[GitLab Runner Commands](https://docs.gitlab.com/runner/commands/)
[`config.toml`: Advanced configuration](https://gitlab.com/gitlab-org/gitlab-runner/blob/master/docs/configuration/advanced-configuration.md)




## ssh 

ssk key

`ssh root@<IP_ADDRESS> -p 10022`, （eg: `ssh root@127.0.0.1 -p 10022`）



## Others

- [gitlab CI document](https://docs.gitlab.com/ce/ci/yaml/README.html)

- [gitlab-ci-docker](https://github.com/bravist/gitlab-ci-docker)
