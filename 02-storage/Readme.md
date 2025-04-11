#### Welcome to Storage
By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers. Docker supports the following types of storage mounts for storing data outside of the writable layer of the container:
- **Volume mounts:**
  A volume mount connects a special storage location managed by Docker (called a volume) to a folder inside your container. Benefit of volume mounts
  - Persist data across container restarts
  - Share data between multiple containers
  - Isolated from host filesystem
  - Easy to back up and restore
  - Great for production (e.g., databases)
    **Volume Mount**
Volume create & mount
```bash
docker volume create vol-mnt-test
docker build -t con-vol-mount-app .
docker run -dp 127.0.0.1:3000:3000 --mount type=volume,src=vol-mnt-test,target=//etc/todos con-vol-mount-app
```
Go to your browser
```bash
127.0.0.1:3000 # Hit enter it will working
```

Inspect the volume must after remove the container. It should works
```bash
docker volume inspect vol-mnt-test
```

push on docker hub
```bash
volume-mount-app # create a app in docker hub portal
docker tag con-vol-mount-app jakirbd/volume-mount-app:latest
docker push jakirbd/volume-mount-app:latest
```

- **Bind mounts:**
  A Bind Mount connects a specific folder on your host machine to a folder inside the Docker container. Key Points:
  - Good for development (live code updates).
  - Docker just uses your host's files directly.
  - Not managed by Docker.
- **tmpfs mounts:**
  A tmpfs mount is a special kind of mount that stores files in memory (RAM) instead of on disk. Benefit of tmpfs mount
  - Data is very fast to access
  - Data is temporary — it disappears when the container stops
  - It does not persist after restart
- **Named pipes:** 
  A named pipe is a type of file used for inter-process communication (IPC) (Docker host and a container). One process writes to it, and another reads from it — just like a data stream. It's commonly used for:
  - Logging
  - Real-time streaming between apps
  - Connecting tools like Docker ↔ logging services or monitoring agents