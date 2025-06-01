# Getting started volume mount application.

### For Docker

```bash
docker-compose up --build
http://localhost:5000 # Open your browser
```

### Build, Push Pull on Docker Registry

```bash
docker build -t jakirbd/volume-mount-app:latest .
docker tag existing-image-id jakirbd/volume-mount-app:latest # If already built
docker push jakirbd/volume-mount-app:latest
docker pull jakirbd/volume-mount-app:latest
```

### Run & Access to application

```bash
docker run --name volume-mount-app -p 3000:80 -d jakirbd/volume-mount-app:latest
docker exec -it volume-mount-app /bin/sh
docker exec -it volume-mount-app /bin/bash
```
