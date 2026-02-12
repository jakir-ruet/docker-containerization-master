## More About Me – [Take a Look!](http://www.mjakaria.me)

### Virtual Machine `VM`

A Virtual Machine (VM) is a software emulation of a physical computer that runs an operating system and applications just like a physical computer. VMs are created using virtualization software, which allows multiple VMs to run on a single physical machine, sharing its resources.

### Docker

Docker is a containerization technology that packages an application and its dependencies while sharing the host operating system kernel.

### Docker vs Virtual Machine

| Aspect                      | **Docker (Container)**                          | **Virtual Machine (VM)**                         |
| --------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| **OS Requirement**          | Does **not** require a separate guest OS        | Requires a **full guest OS**                     |
| **Kernel**                  | Shares the host OS kernel                       | Has its **own kernel**                           |
| **Level of Virtualization** | OS-level virtualization                         | Hardware-level virtualization                    |
| **Resource Usage**          | Lightweight, minimal CPU & RAM                  | Heavy, higher CPU & RAM usage                    |
| **Startup Time**            | Seconds                                         | Minutes                                          |
| **Isolation**               | Process-level isolation                         | Strong, hardware-level isolation                 |
| **Portability**             | Highly portable across environments             | Less portable                                    |
| **Size**                    | MBs                                             | GBs                                              |
| **Best For**                | Microservices, CI/CD, DevOps, cloud-native apps | Legacy apps, multiple OS needs, strong isolation |
| **Example**                 | Docker, Podman                                  | VMware, VirtualBox, Hyper-V                      |

![Docker-Container vs Virtual Machine](/img/docker-vm.png)

#### Docker Installation

- How to [Install?](https://docs.docker.com/get-docker/). You may install as per your operating system.
- Run the following command to uninstall all conflicting packages:

  ```bash
  for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
  ```

- Repository setup

```bash
sudo apt-get update # Add Docker's official GPG key:
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

```bash
# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

- Install

  ```bash
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  ```

### Docker Scout

Container images consist of layers and software packages, which are susceptible to vulnerabilities. These vulnerabilities can compromise the security of containers and applications.

Docker Scout is a solution for proactively enhancing your software supply chain security. By analyzing your images, Docker Scout compiles an inventory of components, also known as a Software Bill of Materials (SBOM). The SBOM is matched against a continuously updated vulnerability database to pinpoint security weaknesses.

### Docker Engine

Docker Engine is an open source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:

- A server with a long-running daemon process dockerd.
- APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon.
- A command line interface (CLI) client docker.

### Docker Compose `Run Multi-Container Applications`

Docker Compose is a tool for defining and running multi-container applications. It is the key to unlocking a streamlined and efficient development and deployment experience.

Compose simplifies the control of your entire application stack, making it easy to manage services, networks, and volumes in a single, comprehensible YAML configuration file. Then, with a single command, you create and start all the services from your configuration file.

```bash
version: "3.9"
services:
  web:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - db
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: appdb
    volumes:
      - db-data:/var/lib/mysql
volumes:
  db-data:
```

Compose works in all environments; production, staging, development, testing, as well as CI workflows. It also has commands for managing the whole lifecycle of your application:

- Start, stop, and rebuild services
- View the status of running services
- Stream the log output of running services
- Run a one-off command on a service

#### Dockerfile `Build the Image`

- **FROM node:20**
  this instruction specifies the parent image (with tag) from which we are willing to building.
- **WORKDIR /app**
  this instruction is define current working directory for subsequent instructions in the Dockerfile. when it executed, then all subsequent instruction will be executed.
- **COPY package.json .**
  this instruction allow copy the files/folders from host machine into the docker container.
- **RUN npm install**
  this instruction start the installation command of the application.
- **COPY . . [COPY <Source> <Destination>]**
  this instruction allow copy the files/folders from host machine into the docker container.
- **EXPOSE 3000**
  this instruction will be expose the port for public user of the application.
- **CMD ["node", "app.mjs"]**
  this instruction finally run the application.

```bash
# Base image
FROM python:3.10-slim
# Set working directory
WORKDIR /app
# Copy code
COPY . .
# Install dependencies
RUN pip install -r requirements.txt
# Expose port
EXPOSE 5000
# Start app
CMD ["python", "app.py"]
```

#### Simple Difference

| Feature  | Dockerfile                   | Docker Compose                            |
| -------- | ---------------------------- | ----------------------------------------- |
| Purpose  | Build an image               | Run one or multiple containers            |
| Scope    | Single container image       | Multi-container setup                     |
| Defines  | Instructions to create image | How containers run (ports, env, volumes)  |
| Requires | `docker build`, `docker run` | `docker compose up`                       |
| Good for | Packaging the app            | Local development, testing, orchestration |

#### Container

A container is a lightweight, standalone, standardized, executable package that contains everything needed to run a piece of software, including the code, runtime, system tools, system libraries, and settings.

#### Image

An image is a lightweight, standalone, and executable software package that contains everything needed to run a piece of software. It serves as a template for creating Docker containers. Docker images are built based on a Dockerfile, which is a text document that contains a set of instructions for assembling the image. Two types of images in docker.

  1. Pre-Build Image (Node, Apache, Nginx etc.)
  2. Custom Image (Our own build image)

### Types of Processes

There are fundamentally two types of processes in Unix based OS:

#### Foreground/Attached processes

These are initialized and controlled through a terminal session (referred to as interactive processes). In other words, there has to be a user connected to the system to start such processes; they haven’t started automatically as part of the system functions/services.

#### Background/Detached processes

Are processes not connected to a terminal (referred to as non-interactive/automatic processes); they don’t expect any user input.

### Attached-Detached

We can run container in attached mode (foreground) or in detached mode (background). By default, Docker runs the container in attached mode. In the attached mode, Docker can start the process in the container and attach the console to the process's standard input, standard output, and standard error.

#### How to build, push & pull from Docker Hub

```bash
docker build -t jakirbd/doc-kub-first-app:latest .
docker tag existing-image-id jakirbd/multi-stage-app:latest # If already built
docker push jakirbd/doc-kub-first-app:latest
docker pull jakirbd/doc-kub-first-app:latest
```

#### Why Buildx is Important (For You Specifically)

Since:

- You use Mac M1 (ARM64)
- You build images for servers (mostly linux/amd64)
- You deploy to Kubernetes

> Without Buildx, images built on M1 may not run on AMD64 servers.

#### Docker `Buildx`

Docker `buildx` is an extended build tool based on BuildKit. It allows you to:

- Build multi-platform images (amd64, arm64, etc.)
- Use advanced caching
- Export images in different formats
- Build images faster and more efficiently
- Push directly to registry without local image load

```bash
docker buildx version
docker buildx ls
docker buildx create --name multiarch-builder --use # Use build name
docker buildx inspect --bootstrap
```

```bash
docker buildx rm multiarch-builder
```

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t jakirbd/bidding-app:1.0 \
  --push \
  .
```

#### Run the downloaded docker image & access to the application

```bash
docker run --name AppName -p 3000:80 -d UserName/AppName:TagName
docker run --name doc-kub-first-app -p 3000:80 -d jakirbd/doc-kub-first-app:latest
docker exec -it AppName /bin/sh
docker exec -it doc-kub-first-app /bin/sh
```

#### Essential Commands of Docker

|  SL   | Command                 | Explanation                    |
| :---: | :---------------------- | :----------------------------- |
|   1   | `docker --version (-v)` | Checking the version of docker |
|   2   | `docker login`          | We can access using credential |
|   3   | `docker logout`         | We can logout                  |

#### Essential command of images

|  SL   | Command                                          | Explanation                                                 |
| :---: | :----------------------------------------------- | :---------------------------------------------------------- |
|   1   | `docker image`                                   | Show the command details                                    |
|   2   | `docker images or docker ls`                     | Show image list                                             |
|   3   | `docker pull ImageName`                          | Pull/Download the image                                     |
|   4   | `docker pull ImageName:TagName`                  | Pull/Download the image with tag name                       |
|   5   | `docker run ImageName (node/nginx)`              | Will be Run & Publish a new container for each publish      |
|   6   | `docker run -it ImageName (node/nginx)`          | Enter into the interactive mode                             |
|   7   | `docker build -t doc-kub-first-app:latest .`     | Build the images with tag (name/version/others) (own image) |
|   8   | `docker image tag ImgId UserName/ImgName:latest` | Image renaming/taging (own image)                           |
|   9   | `docker push jakirbd/my-node-server`             | Pushing the image (own image)                               |
|  10   | `docker image history ImageId`                   | History of image                                            |
|  11   | `docker image inspect ImageId`                   | Inspections the image                                       |
|  12   | `docker image prune -a`                          | Remove all unused images, not just dangling ones            |
|  13   | `docker rmi ImageId`                             | Image remove                                                |
|  14   | `docker tag ImageID ImgNewName`                  | Image renaming which name is 'none'                         |
|  15   | `docker tag ImageID ImgNewName`                  | New img will be created if old name is not 'none'           |

#### Essential command of container

|  SL   | Command                                                               | Explanation                                            |
| :---: | :-------------------------------------------------------------------- | :----------------------------------------------------- |
|   1   | `docker container`                                                    | Show the command details                               |
|   2   | `docker container ls`                                                 | Show the enlisted container                            |
|   3   | `docker ps`                                                           | Show only running container                            |
|   4   | `docker ps -a`                                                        | Show all container                                     |
|   5   | `docker ps -a -q`                                                     | Show all container with id (quiet)                     |
|   6   | `docker build .`                                                      | Build a container                                      |
|   7   | `docker build -t TagName .`                                           | Build a container with tag                             |
|   8   | `docker run -p 3000:80 nginx/node/https`                              | Will be Run & Publish a new container for each publish |
|   7   | `docker run -p 3000:80 BaseImageId`                                   | Will be Run & Publish a new container for each publish |
|   9   | `docker rename OldContName NewContName`                               | Renaming the container                                 |
|  10   | `docker run -p 3000:80 -d --name NewContName OldContName`             | Renaming & publishing container                        |
|  11   | `docker run -p 3000:80 -d --rm --name NewContName OldContName`        | Renaming, removing & publishing container              |
|  12   | `docker run -p 3000:80 -d --rm --name NewContName OldContName:latest` | Renaming, removing & publishing using tag container    |
|  13   | `docker run -p 3000:80 -d BaseImageId`                                | Publish the container as detach                        |
|  14   | `docker run -p 3000:80 -d --rm BaseImageId`                           | Container is Remove after stop the container           |
|  15   | `docker exec -it ContainerName /bin/sh`                               | Container connect to terminal using shell              |
|  16   | `docker exec -it ContainerName /bin/bash`                             | Container connect to terminal using bash               |
|  17   | `docker exec -it ContainerName /bash`                                 | Container connect to terminal using bash               |
|  18   | `docker cp index.html my-nginx-server:/usr/share/nginx/html`          | Moving the source file local pc to docker nginx server |
|  19   | `docker container prune`                                              | Remove all container                                   |
|  20   | `docker start ContainerName`                                          | Container start                                        |
|  21   | `docker stop ContainerName`                                           | Container stop                                         |
|  22   | `docker restart ContainerName`                                        | Container restart                                      |
|  23   | `docker rm ContainerName`                                             | Container remove after stop it                         |
|  24   | `docker attach ContainerName`                                         | Attach the container                                   |
|  25   | `docker logs ContainerName`                                           | See the logs details                                   |
|  26   | `docker logs -f ContainerName`                                        | See the future logs details                            |

#### Data

- Application Data (Code, dependencies, package.json Environment)
  - written by developer
  - added to image & container in build phase.
  - read-only/fixed once image is build
- Temporary App Data (Generated data, Enter user input into form)
  - fetched/produced in running container
  - stored in memory or temporary files
  - read + write possible temporary stored in containers
- Permanent App Data (User accounts)
  - fetched/produced in running container
  - stored in files or a database, must not lost container stop/restart
  - read + write possible permanent containers & volumes

##### Storage

- Volumes (managed by docker)
  - Anonymous Volumes
  - Named Volumes
- Bind/Host Mounts (managed by we)
- Manage data in [Docker](https://docs.docker.com/storage/)

#### Essential command of volume

|  SL   | Command                                                                  | Explanation                                                  |
| :---: | :----------------------------------------------------------------------- | :----------------------------------------------------------- |
|   1   | `docker volume create`                                                   | Create a anonymous volume                                    |
|   2   | `docker volume create my-sweet-vol`                                      | Create a volume                                              |
|   3   | `docker volume ls`                                                       | Check the volume list                                        |
|   4   | `docker volume inspect VolName`                                          | Inspect the volume                                           |
|   5   | `docker volume rm VolName`                                               | Remove the volume                                            |
|   6   | `docker volume prune`                                                    | Remove the anonymous volume                                  |
|   7   | `docker build -t ImgName(OldContName):volumes .`                         | Create own images tag named volumes                          |
|   8   | `docker run -d -p 3000:80 --rm --name NewContName OldContName:volumes`   | Create own images tag named based on volumes                 |
|   9   | `docker rmi ConName:volumes`                                             | Remove the named volume                                      |
|  10   | `docker run -it --name ConName -v /DirName nginx /bin/bash`              | Create a container & anonymous volume mounted on a directory |
|  11   | `docker run -it --name ConName -v VolName:/DirName nginx /bin/bash`      | Create a container & named volume mounted on a directory     |
|  12   | `mkdir /opt/HostDir`                                                     | Create host directory use as volume for app                  |
|  13   | `docker run -it --name ConName -v /opt/HostDir:/HostDir nginx /bin/bash` | Create a image, container on host directory                  |

- Inspect the container & check the volume which is being used here.

```bash
docker pull mysql
docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=Mysql@054003 -d mysql:latest
docker exec -it mysql-server mysql -u root -p
docker inspect mysql-server # mysql-server is container name
```

- create new named volume which we will use.

```bash
docker volume create vol-mysql-server
docker stop mysql-server # for avoid corrupting the data
```

- cloning data from old to new volume

```bash
docker ps
docker run --rm --volumes-from ConName[present] -v NewVol:/target VolName[present] sh -c "cp -rp /Destination[present]/. /target" # here -rp > record preserve
docker run --rm --volumes-from mysql-server -v vol-mysql-server:/target alpine sh -c "cp -rp /var/lib/mysql/. /target"
docker run -d --name NewContName -v vol-mysql-server:/var/lib/mysql -p 3306:3306 mysql:tag
docker run -d --name new-mysql-server -v vol-mysql-server:/var/lib/mysql -p 3306:3306 mysql:latest
docker ps
docker exec -it new-mysql-server mysql -u root -p
docker inspect new-mysql-server # mysql-server is container name
```

#### Network in [Docker](https://docs.docker.com/network/)

Container networking refers to the ability for containers to connect to and communicate with each other, or to non-Docker workloads.

##### Networks types

1. `bridge (default):` Default network. Used for `container-to-container` communication on the same host.
2. `host:` Removes network isolation. Container shares the host’s network stack.
3. `overlay:` Enables communication across multiple Docker hosts (used in Swarm).
4. `ipvlan:` Gives full control over `IPv4/IPv6` addressing, supports advanced `L2/L3` networking.
5. `macvlan:` Assigns `MAC addresses to containers`, making them appear as `physical devices on the LAN`. Useful for legacy apps.

|  SL   | Command                                                          | Explanation                                         |
| :---: | :--------------------------------------------------------------- | :-------------------------------------------------- |
|   1   | `docker network ls`                                              | Check the network list                              |
|   2   | `ip address show`                                                | Check IP address in terminal; it will show docker0: |
|   3   | `ip add sh`                                                      | Show all network interface in details               |
|   4   | `bridge link`                                                    | Show all ethernet name and connected docker         |
|   5   | `docker inspect bridge`                                          | Inspect all bridge networks with individual IP      |
|   6   | `docker exec -it ImageName sh`                                   | Enter into image                                    |
|   7   | `ip route`                                                       | Show IP, DNS & others                               |
|   8   | `docker run -itd --rm -p 85:80 --name myforthapp nginx`          | Run a nginx app                                     |
|   9   | `docker network create NetworkName`                              | Create a network, default bridge                    |
|  10   | `docker network create -d NetworkType NetworkName`               | Create a network, assign network type & name        |
|  11   | `docker network inspect NetworkName`                             | Inspect the user define network                     |
|  12   | `docker run -itd --rm --network NetworkName --name loki ImgName` | Create an user define network under NetworkName     |
|  13   | `docker inspect NetworkName`                                     | Inspect the user define network under NetworkName   |
|  14   | `docker inspect NetworkName`                                     | Inspect the user define network under NetworkName   |

#### Multi Container

The multi-container concept in Docker refers to running multiple containers together as part of a single application or system. This approach is commonly used when building microservices or applications that require multiple services to work together, such as a web server, a database, and a cache.

##### Multi-Container Steps

Real-world applications often consist of different components:

- A web server (e.g., Nginx or Apache)
- An application backend (e.g., Node.js, Django)
- A database (e.g., MySQL, PostgreSQL)
- A message broker or cache (e.g., Redis, RabbitMQ)

Each of these runs best in its own container, rather than combining everything into a single image, for modularity, scalability, and separation of concerns.

#### Multistage Build

## With Regards, `Jakir`

[![LinkedIn][linkedin-shield-jakir]][linkedin-url-jakir]
[![Facebook-Page][facebook-shield-jakir]][facebook-url-jakir]
[![Youtube][youtube-shield-jakir]][youtube-url-jakir]

### Wishing you a wonderful day! Keep in touch

<!-- Personal profile -->

[linkedin-shield-jakir]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url-jakir]: https://www.linkedin.com/in/jakir-ruet/
[facebook-shield-jakir]: https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white
[facebook-url-jakir]: https://www.facebook.com/jakir.ruet/
[youtube-shield-jakir]: https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white
[youtube-url-jakir]: https://www.youtube.com/@mjakaria-ruet/featured
