## Welcome to docker bind mount session

### Volume create & inspection

```bash
docker volume create volume-mount-mysql-volume
docker volume inspect volume-mount-mysql-volume
```

### Create directory for bind

```bash
mkdir -p ~/mysql-data-volume-mount
echo ~/mysql-data-volume-mount # or
whereis mysql-data-volume-mount
```

### Run the container & create database (run it where compose file)

```bash
docker compose up --build -d
```

### Connect to MySQL inside the container and check database

```bash
docker exec -it mysql-server-container mysql -u root -p
show databases;
create database volume_mount_db;
use volume_mount_db;
CREATE TABLE submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input VARCHAR(255) NOT NULL
);
select * from submissions;
```

### Stop, remove the container

```bash
docker ps
docker stop 454ba675e4f9
docker rm 454ba675e4f9
```

### Again, create container and check the database, database remaining unchanged

```bash
docker compose up --build -d
```

### Check data in mysql container in docker

```bash
docker exec -it mysql-server-container sh
docker exec -it mysql-server-container bash
cd /var/lib/mysql # Database there
ls -ltr
```

### Again, Connect to MySQL inside the container and check database remaining unchanged

```bash
docker exec -it volume-mount-container mysql -u root -p
show databases;
```
