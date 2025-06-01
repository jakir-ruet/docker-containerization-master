### Environment & Application Configure, build & run

```bash
python -m venv .venv
.venv\Scripts\activate
pip install Flask
pip install -r requirements.txt # its run after putting everything in requirements.txt
python.exe -m pip install --upgrade pip # if needed
http://localhost:5000 # Open your browser
```

### For Docker

```bash
docker-compose up --build
http://localhost:5000 # Open your browser
```

### Build, Push Pull on Docker Registry

```bash
docker build -t jakirbd/multi-container-app:latest .
docker tag existing-image-id jakirbd/multi-container-app:latest # If already built
docker push jakirbd/multi-container-app:latest
docker pull jakirbd/multi-container-app:latest
```

### Run & Access to application

```bash
docker run --name multi-container-app -p 3000:80 -d jakirbd/multi-container-app:latest
docker exec -it multi-container-app /bin/sh
docker exec -it multi-container-app /bin/bash
```
