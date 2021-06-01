
## Usage


```bash

docker-compose up -d

```

### Environment Variables


```bash
MONGO_INITDB_ROOT_USERNAME=test
MONGO_INITDB_ROOT_PASSWORD=123
```


###  Authentication

`mongod --auth`


### Create account

if you wish to setup additional user accounts specific per DB or with different roles you can use following entry point

dock-compose.yml:

```yaml

volumes:
	# mongo-init.js: to create user and password
	- ./data/mongo-init.sh:/docker-entrypoint-initdb.d/mongo-init.sh:ro


```

mongo-init.sh： 

```bash
#!/bin/bash

mongo test --eval '
  db.createUser({
      user:"root",
      pwd:"123",
      roles:[{
          role:"readWrite",
          db:"myDB"
      }]
  });
  db.auth("root", "123);
'
```


