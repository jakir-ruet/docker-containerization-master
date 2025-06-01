```bash
docker build -t jakirbd/base-image-app:latest .
docker tag existing-image-id jakirbd/base-image-app:latest # If already built
docker push jakirbd/base-image-app:latest
docker pull jakirbd/base-image-app:latest
```
