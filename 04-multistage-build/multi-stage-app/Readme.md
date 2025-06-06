```bash
docker build -t jakirbd/multi-stage-app:latest .
docker tag existing-image-id jakirbd/multi-stage-app:latest # If already built
docker push jakirbd/multi-stage-app:latest
docker pull jakirbd/multi-stage-app:latest
```
