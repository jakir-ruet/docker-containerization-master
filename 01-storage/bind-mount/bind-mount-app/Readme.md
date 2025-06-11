## Welcome to docker bind mount session

### Run the container & create database (run it where compose file)

```bash
docker compose up --build -d
```

#### Check Volume - No need create any volume, Docker to manage it automatically create name `mysql_bind_mount_data`

```bash
docker volume ls
docker volume inspect mysql_bind_mount_data
cd /home/mysql_bind_mount_data/_data
ls -ltr
```

#### Login to MySQL server, create database and table

```bash
docker exec -it mysql-bind-mount-container mysql -u root -p
CREATE DATABASE volume_mount_db; # already created from composer
USE volume_mount_db;
CREATE TABLE submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input VARCHAR(255) NOT NULL
);
SELECT * FROM submissions;
```

#### From web browser `http://192.168.1.106:3000`, Submit data

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
docker compose up --build -d
```

#### Login to MySQL server

```bash
docker exec -it mysql-bind-mount-container-new mysql -u root -p
SELECT * FROM submissions;
```

#### Check the volume whether it exits or not

```bash
docker volume ls
docker volume inspect mysql_bind_mount_data
cd /var/lib/docker/volumes/mysql_bind_mount_data/_data
ls -ltr
```
