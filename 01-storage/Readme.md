## Welcome to Storage

By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers. Docker supports the following types of storage mounts for storing data outside of the writable layer of the container.

### Docker Mounts (Volume, Bind, tmpfs & Named Pipes)

Docker supports multiple ways to mount data between the host and containers. This guide covers:

- Volume Mounts
- Bind Mounts
- tmpfs Mounts
- Named Pipes (FIFOs)
`NB:` Each Docker Mounts Discussion below;

##### Volume Mounts

A `volume mount` connects a Docker-managed storage location (volume) to a folder inside your container.

- Create & Mount a Volume

```bash
docker volume create vol-mnt-test
docker build -t con-vol-mount-app .
docker run -dp 127.0.0.1:3000:3000 --mount type=volume,src=vol-mnt-test,target=//etc/todos con-vol-mount-app
```

- Go to your browser

```bash
127.0.0.1:3000 # Hit enter it will working
```

- Inspect the Volume (after removing container). It should works

```bash
docker volume inspect vol-mnt-test
```

- push on docker hub

```bash
volume-mount-app # create a app in docker hub portal
docker tag con-vol-mount-app jakirbd/volume-mount-app:latest
docker push jakirbd/volume-mount-app:latest
```

###### Benefits

- Persist data across container restarts
- Share data between multiple containers
- Isolated from host filesystem
- Easy to back up and restore
- Ideal for production (e.g., databases)

##### Bind Mounts

A bind mount connects a specific folder from your host to the container.

- Create & Mount a Bind Mount

```bash
mkdir bind-mount-data
docker build -t con-bind-mount-app .
docker run -dp 127.0.0.1:3005:3005 --mount type=bind,src="$(pwd)/bind-mount-data",target=/data con-bind-mount-app
```

- View Container Logs

```bash
docker logs <ContainerID>
```

- Go to your browser

```bash
127.0.0.1:3000 # Hit enter it will working
```

###### Benefits

- Great for development (live file updates)
- Uses host files directly
- Not managed by Docker

##### tmpfs Mounts

A tmpfs mount stores files in memory (RAM), not on disk.

- Create tmpfs Mounts

```bash
docker run --tmpfs /app/tmp:rw,size=64m my_image
```

###### Benefits

- Super fast access
- Data is temporary — disappears when container stops
- Great for secrets, caching, or ephemeral data
- It does not persist after restart

##### Named Pipes (FIFOs)

A named pipe allows `Inter Process Communication` (IPC) between the docker host and container. One process writes to it, and another reads from it — just like a data stream.

```bash
mkfifo /tmp/mypipe # On the host
docker run -v /tmp/mypipe:/tmp/mypipe my_image # Run container using the pipe
echo "hello" > /tmp/mypipe # Write to pipe (on host or container)
cat /tmp/mypipe # Read from pipe
```

###### Benefits

- Logging
- Real-time streaming between apps
- Connecting tools like Docker ↔ logging services or monitoring agents

#### Comparison (Volume, Bind, tmpfs & Named Pipes)

| Mount Type | Persistent | Docker Managed | Host Access | Best Use Case               |
| ---------- | ---------- | -------------- | ----------- | --------------------------- |
| Volume     | ✅ Yes      | ✅ Yes          | ❌ No        | Databases, configs, backups |
| Bind       | ✅ Yes      | ❌ No           | ✅ Yes       | Development, live code      |
| tmpfs      | ❌ No       | ❌ No           | ❌ No        | In-memory, secrets, caching |
| Named Pipe | ❌ No       | ❌ No           | ✅ Yes       | IPC, streaming, logging     |
