### Build, Push Pull on Docker Registry

```bash
docker build -t jakirbd/hello-node-app:latest .
docker tag existing-image-id jakirbd/hello-node-app:latest # If already built
docker push jakirbd/hello-node-app:latest
docker pull jakirbd/hello-node-app:latest
```

### Run & Access to application

```bash
docker run --name hello-node-app -p 3000:80 -d jakirbd/hello-node-app:latest
docker exec -it hello-node-app /bin/sh
docker exec -it hello-node-app /bin/bash
```
