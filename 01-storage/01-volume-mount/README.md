# Welcome to docker volume mount session

## We can implement it two ways

1. Imperative way and
2. Declarative way

### Imperative way

#### Create MySQL Container -  docker handling `mysql_data`

```bash
docker run --name mysql-volume-mount-container \
  -v mysql_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -d mysql:8.0
```

#### Check Volume weather created or not

```bash
docker volume ls
docker volume inspect mysql_data
cd /var/lib/docker/volumes/mysql_data/_data/
ls -ltr
```

#### Login to MySQL server, create database and table

```bash
docker exec -it mysql-volume-mount-container mysql -u root -p
SHOW DATABASES;
CREATE DATABASE volume_mount_db;
USE volume_mount_db;
CREATE TABLE submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input VARCHAR(255) NOT NULL
);
SELECT * FROM submissions;
INSERT INTO submissions (input) VALUES ('Fahmid');
INSERT INTO submissions (input) VALUES ('Tahmid');
INSERT INTO submissions (input) VALUES ('Jakir');
SELECT * FROM submissions;
```

#### Stop & remove container

```bash
docker ps
docker ps -a
docker stop ffa3c5d31120
docker rm ffa3c5d31120
docker exec -it mysql-volume-mount-container mysql -u root -p # Not working due container not exits now
```

#### Again, create MySQL Container - where using `mysql_data`

```bash
docker run --name mysql-volume-mount-container-new \
  -v mysql_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -d mysql:8.0
```

#### Login to MySQL server

```bash
docker exec -it mysql-volume-mount-container-new mysql -u root -p
SHOW DATABASES;
USE volume_mount_db;
SELECT * FROM submissions;
```

#### Check the volume whether it exits or not

```bash
docker volume inspect mysql_data
cd /var/lib/docker/volumes/mysql_data/_data/
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
      - mysql_data:/var/lib/mysql # here `mysql_data` docker volume in container

volumes:
  mysql_data:
    name: mysql_data # declare the named volume in docker
# if the name `mysql_data` change then it will be bind mount.
```
