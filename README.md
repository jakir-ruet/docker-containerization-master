[![LinkedIn][linkedin-shield-lapissoft]][linkedin-url-lapissoft]
[![Facebook-Page][facebook-shield-lapissoft]][facebook-url-lapissoft]
[![Youtube][youtube-shield-lapissoft]][youtube-url-lapissoft]

## Visit Us [Lapis Soft](http://www.lapissoft.com)

### Docker
Docker is a container technology/tool for creating & managing containers.

#### Docker Installation
- How to [Install?](https://docs.docker.com/get-docker/). You may install as per your operating system.
- Run the following command to uninstall all conflicting packages:
  ```bash
  for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
  ```
- Repository setup
  ```bash
  # Add Docker's official GPG key:
  sudo apt-get update
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

#### Container
A container is a lightweight, standalone, standardized, executable package that contains everything needed to run a piece of software, including the code, runtime, system tools, system libraries, and settings.

#### Image
An image is a lightweight, standalone, and executable software package that contains everything needed to run a piece of software. It serves as a template for creating Docker containers. Docker images are built based on a Dockerfile, which is a text document that contains a set of instructions for assembling the image. Two types of images in docker.
  1. Pre-Build Image (Node, Apache, Nginx etc.)
  2. Custom Image (Our own build image)

### Types of Processes
There are fundamentally two types of processes in Unix based OS:

#### Foreground processes
These are initialized and controlled through a terminal session (referred to as interactive processes). In other words, there has to be a user connected to the system to start such processes; they haven’t started automatically as part of the system functions/services.

#### Background processes
Are processes not connected to a terminal (referred to as non-interactive/automatic processes); they don’t expect any user input.

### Attached-Detached
We can run container in attached mode (in the foreground) or in detached mode (in the background). By default, Docker runs the container in attached mode. In the attached mode, Docker can start the process in the container and attach the console to the process's standard input, standard output, and standard error.

#### How to pull from Docker Hub
```bash
docker pull jakirbd/doc-kub-first-app:latest
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

#### Dockerfile
- ***FROM node:20***
  this instruction specifies the parent image (with tag) from which we are willing to building.
- ***WORKDIR /app***
  this instruction is define current working directory for subsequent instructions in the Dockerfile. when it executed, then all subsequent instruction will be executed.
- ***COPY package.json .***
  this instruction allow copy the files/folders from host machine into the docker container.
- ***RUN npm install***
  this instruction start the installation command of the application.
- ***COPY . . [COPY <Source> <Destination>]***
  this instruction allow copy the files/folders from host machine into the docker container.
- ***EXPOSE 3000***
  this instruction will be expose the port for public user of the application.
- ***CMD ["node", "app.mjs"]***
  this instruction finally run the application.
  
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

Inspect the container & check the volume which is being used here.
```bash
docker pull mysql
docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=Mysql@054003 -d mysql:latest
docker exec -it mysql-server mysql -u root -p
docker inspect mysql-server # mysql-server is container name
```
create new named volume which we will use.
```bash
docker volume create vol-mysql-server
docker stop mysql-server # for avoid corrupting the data
```

cloning data from old to new volume
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

#### Footnote about volume
- Storage persistent location outside of container.
- If container removed then volume will be available on storage.
- It use for the data security purpose.

#### Network in [Docker](https://docs.docker.com/network/)
Container networking refers to the ability for containers to connect to and communicate with each other, or to non-Docker workloads.

##### Networks types
- Bridge Network
- User Define Bridge Network
- Host Network (under main OS)

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

#### Network Driver Type
- **_bridge_** The default network driver. If you don't specify a driver, this is the type of network you are creating. Bridge networks are commonly used when your application runs in a container that needs to communicate with other containers on the same host.
- **_host_** Remove network isolation between the container and the Docker host, and use the host's networking directly.
- **_overlay_** Overlay networks connect multiple Docker daemons together and enable Swarm services and containers to communicate across nodes. This strategy removes the need to do OS-level routing.
- **_ipvlan_** IPvlan networks give users total control over both IPv4 and IPv6 addressing. The VLAN driver builds on top of that in giving operators complete control of layer 2 VLAN tagging and even IPvlan L3 routing for users interested in underlay network integration.
- **_macvlan_** Macvlan networks allow you to assign a MAC address to a container, making it appear as a physical device on your network. The Docker daemon routes traffic to containers by their MAC addresses. Using the macvlan driver is sometimes the best choice when dealing with legacy applications that expect to be directly connected to the physical network, rather than routed through the Docker host's network stack.

### Docker Compose
Docker Compose is a tool for defining and running multi-container applications. It is the key to unlocking a streamlined and efficient development and deployment experience.

Compose simplifies the control of your entire application stack, making it easy to manage services, networks, and volumes in a single, comprehensible YAML configuration file. Then, with a single command, you create and start all the services from your configuration file.

Compose works in all environments; production, staging, development, testing, as well as CI workflows. It also has commands for managing the whole lifecycle of your application:
- Start, stop, and rebuild services
- View the status of running services
- Stream the log output of running services
- Run a one-off command on a service

## Courtesy of Jakir

[![LinkedIn][linkedin-shield-jakir]][linkedin-url-jakir]
[![Facebook-Page][facebook-shield-jakir]][facebook-url-jakir]
[![Youtube][youtube-shield-jakir]][youtube-url-jakir]

### Have a good day, stay with me
<!-- Personal profile -->

[linkedin-shield-jakir]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url-jakir]: https://www.linkedin.com/in/jakir-ruet/
[facebook-shield-jakir]: https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white
[facebook-url-jakir]: https://www.facebook.com/jakir-ruet/
[youtube-shield-jakir]: https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white
[youtube-url-jakir]: https://www.youtube.com/@mjakaria-ruet/featured

<!-- Company profile -->

[linkedin-shield-lapissoft]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url-lapissoft]: https://www.linkedin.com/company/lapis-soft/
[facebook-shield-lapissoft]: https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white
[facebook-url-lapissoft]: https://www.facebook.com/GoLapisSoft/
[youtube-shield-lapissoft]: https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white
[youtube-url-lapissoft]: https://www.youtube.com/@LapisSoft/featured
