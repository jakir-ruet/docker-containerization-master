## Welcome to docker bind mount session

### Volume create & inspection

```bash
docker volume create mysql-volume
docker volume inspect mysql-volume
```

### Create directory for bind

```bash
mkdir -p ~/mysql-data
echo ~/mysql-data # or
whereis mysql-data
```

### Run the container & create database (run it where compose file)

```bash
docker compose up --build -d
```

### Connect to MySQL inside the container and check database

```bash
docker exec -it mysql-server-container mysql -u root -p
show databases;
create database bind_mount_db;
use bind_mount_db;
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

### Again, Connect to MySQL inside the container and check database remaining unchanged

```bash
docker exec -it bind-mount-container mysql -u root -p
show databases;
```
