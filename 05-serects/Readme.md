## Welcome to secrets in docker

### Secret

A Docker secret is a secure way to store sensitive information, It's encrypted and only accessible to services that need them, making them more secure than environment variables or volume mounts such as:

- Database credentials
- TLS certificates
- SSH private keys
- API tokens

### Prerequisites

To follow the hands-on tutorial:

- Docker installed (v1.13+)
- Docker Swarm initialized (docker swarm init)
- Basic understanding of Docker services

### Initialize Docker Swarm (if not already)

```bash
docker swarm init
```

### Create a Secret & Check

```bash
echo "Sql@054003" | docker secret create db_password -
docker secret ls
```

### Create a Docker Service Using the Secret

```bash
docker service create \
  --name test_service \
  --secret db_password \
  alpine sleep 1d
```

### Access the Secret from Inside the Container

```bash
docker ps
docker exec -it <container_id> sh
docker exec -it <container_id> bash
cat /run/secrets/db_password
```

## Advance Method

### Using Secrets with Compose (Swarm)

```bash
version: "3.7"
services:
  myapp:
    image: alpine
    command: ["sh", "-c", "cat /run/secrets/db_password && sleep 3600"]
    secrets:
      - db_password

secrets:
  db_password:
    external: true
```

### Deploy with `mystack`

```bash
docker stack deploy -c docker-compose.yml mystack
```
