# Welcome to docker volume mount session

## We can implement it two ways

1. Imperative way and
2. Declarative way

### Imperative way

#### Create MySQL Container

```bash
docker run --name mysql-volume-mount-container \
  -v mysql-volume-mount-volume:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -d mysql:8.0
```

#### Check Volume weather created or not

```bash
docker volume ls
docker volume inspect mysql-volume-mount-volume
cd /var/lib/docker/volumes/mysql-volume-mount-volume/_data/
ls -ltr
```

#### Login to MySQL server, create database and table

```bash
docker exec -it mysql-volume-mount-container mysql -u root -p
SHOW DATABASES;
```

#### Stop & remove container

```bash
docker ps
docker ps -a
docker stop ffa3c5d31120
docker rm ffa3c5d31120
docker exec -it mysql-volume-mount-container mysql -u root -p # Not working due container not exits now
```

#### Again, create MySQL Container - where using `mysql-volume-mount-volume`

```bash
docker run --name mysql-volume-mount-container-new \
  -v mysql-volume-mount-volume:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -d mysql:8.0
```

#### Login to MySQL server

```bash
docker exec -it mysql-volume-mount-container-new mysql -u root -p
SELECT * FROM Fazly;
```

#### Check the volume whether it exits or not

```bash
docker volume inspect mysql-volume-mount-volume
cd /var/lib/docker/volumes/mysql-volume-mount-volume/_data/
ls -ltr
```

### Declarative way

#### Using docker compose

```bash
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    container_name: mysql-volume-mount-container
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: Sql@054003
    volumes:
      - mysql-volume-mount-volume:/var/lib/mysql # map the volume here

volumes:
  mysql-volume-mount-volume: # define the volume name
```
