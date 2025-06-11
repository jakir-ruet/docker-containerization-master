## Welcome to docker volume mount session

### Run the container & create database (run it where compose file)

```bash
docker compose up --build -d
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
CREATE DATABASE volume_mount_db; # already created from composer
USE volume_mount_db;
CREATE TABLE submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input VARCHAR(255) NOT NULL
);
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

#### Again, create MySQL Container - where using `mysql-volume-mount-volume`

```bash
docker compose up --build -d
```

#### Login to MySQL server

```bash
docker exec -it mysql-volume-mount-container-new mysql -u root -p
SELECT * FROM submissions;
```

#### Check the volume whether it exits or not

```bash
docker volume inspect mysql-volume-mount-volume
cd /var/lib/docker/volumes/mysql-volume-mount-volume/_data/
ls -ltr
```