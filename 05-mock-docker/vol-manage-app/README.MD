### How to run locally

```bash
yarn install # or
npm install
node server.js
ip:80
```

### Build, Push Pull on Docker Registry

```bash
docker build -t jakirbd/vol-manage-app:latest .
docker tag existing-image-id jakirbd/vol-manage-app:latest # If already built
docker push jakirbd/vol-manage-app:latest
docker pull jakirbd/vol-manage-app:latest
```

### Run & Access to application

```bash
docker run --name vol-manage-app -p 3000:80 -d jakirbd/vol-manage-app:latest
docker exec -it vol-manage-app /bin/sh
docker exec -it vol-manage-app /bin/bash
```

