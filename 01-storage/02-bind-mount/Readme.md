# Welcome to docker Bind Mount session

## We can implement it two ways

1. Imperative way and
2. Declarative way

### Imperative way

#### Create a directory `mysql_bind_mount_data` for bind mount

```bash
mkdir -p /home/mysql_bind_mount_data
```

#### Create MySQL Container with relative path `./mysql_bind_mount_data`

```bash
docker run --name mysql-bind-mount-container \
  -v $(pwd)/mysql_bind_mount_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -d mysql:8.0
```

#### Or, Create MySQL Container with absolute path `/home/mysql_bind_mount_data`

```bash
docker run --name mysql-bind-mount-container \
  -v /home/mysql_bind_mount_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -d mysql:8.0
```

#### Check directory weather created or not

```bash
cd /home/mysql_bind_mount_data/
ls -ltr
```

#### Login to MySQL server, create database and table

```bash
docker exec -it mysql-bind-mount-container mysql -u root -p
SHOW DATABASES;
CREATE DATABASE bind_mount_db;
USE bind_mount_db;
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
docker exec -it mysql-bind-mount-container mysql -u root -p # Not working due container not exits now
```

#### Again, create MySQL Container - where using `mysql_bind_mount_data`

```bash
docker run --name mysql-bind-mount-container-new \
  -v /home/mysql_bind_mount_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -d mysql:8.0
```

#### Login to MySQL server

```bash
docker exec -it mysql-bind-mount-container-new mysql -u root -p
SHOW DATABASES;
USE bind_mount_db;
SELECT * FROM submissions;
```

#### Check the volume whether it exits or not

```bash
cd /home/mysql_bind_mount_data/
ls -ltr
```

### Declarative way

#### Using docker compose

```bash
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    container_name: mysql-bind-mount-container
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: Sql@054003
        - /home/mysql_bind_mount_data:/var/lib/mysql # Absolute pate, or
        #- ./mysql_bind_mount_data:/var/lib/mysql # Where `mysql_bind_mount_data` in local/host in home's directory.
```
