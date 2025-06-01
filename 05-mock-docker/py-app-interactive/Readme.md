### Build, Push Pull on Docker Registry

```bash
docker build -t jakirbd/py-app-interactive:latest .
docker tag existing-image-id jakirbd/py-app-interactive:latest # If already built
docker push jakirbd/py-app-interactive:latest
docker pull jakirbd/py-app-interactive:latest
```

### Run & Access to application

```bash
docker run --name py-app-interactive -p 3000:80 -d jakirbd/py-app-interactive:latest
docker exec -it py-app-interactive /bin/sh
docker exec -it py-app-interactive /bin/bash
```
