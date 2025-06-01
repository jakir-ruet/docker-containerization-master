### Build, Push Pull on Docker Registry

```bash
docker build -t jakirbd/own-nginx-ingress:latest .
docker tag existing-image-id jakirbd/own-nginx-ingress:latest # If already built
docker push jakirbd/own-nginx-ingress:latest
docker pull jakirbd/own-nginx-ingress:latest
```

### Run & Access to application

```bash
docker run --name own-nginx-ingress -p 3000:80 -d jakirbd/own-nginx-ingress:latest
docker exec -it own-nginx-ingress /bin/sh
docker exec -it own-nginx-ingress /bin/bash
```
