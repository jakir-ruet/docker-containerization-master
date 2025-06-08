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

### Pulling mysql server image

```bash
docker pull mysql:8.0
```

### Run the container & create database

```bash
docker run -d \
  --name bind-mount-container \
  -p 3307:3306 \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -e MYSQL_USER=root \
  -v ~/mysql-data:/var/lib/mysql \
  -d mysql:8.0
```

### Connect to MySQL inside the container and check database

```bash
docker exec -it bind-mount-container mysql -u root -p
show databases;
```

### Stop, remove the container

```bash
docker ps
docker stop 454ba675e4f9
docker rm 454ba675e4f9
```

### Again, create container and check the database, database remaining unchanged

```bash
docker run -d \
  --name bind-mount-container \
  -p 3307:3306 \
  -e MYSQL_ROOT_PASSWORD=Sql@054003 \
  -e MYSQL_USER=root \
  -v ~/mysql-data:/var/lib/mysql \
  -d mysql:8.0
```

### Again, Connect to MySQL inside the container and check database remaining unchanged

```bash
docker exec -it bind-mount-container mysql -u root -p
show databases;
```
