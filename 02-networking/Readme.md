## Welcome to Docker Networking

Docker networking allows containers to communicate with each other, with the host, and with external systems.

### There are network driver types

1. `bridge (default):` Default network. Used for `container-to-container` communication on the same host.
2. `host:` Removes network isolation. Container shares the host’s network stack.
3. `overlay:` Enables communication across multiple Docker hosts (used in Swarm).
4. `ipvlan:` Gives full control over `IPv4/IPv6` addressing, supports advanced `L2/L3` networking.
5. `macvlan:` Assigns `MAC addresses to containers`, making them appear as `physical devices on the LAN`. Useful for legacy apps.
`NB:` Each Docker Mounts Discussion below;

#### bridge (default)

It's Most common for local development. Containers can talk to each other **by name** if on the same bridge network.

- Create a Bridge Network

```bash
docker network create my-bridge-net
docker run -d --name app1 --network my-bridge-net myimage
docker run -d --name app2 --network my-bridge-net myimage
```

- Then, inside `app1`, you can ping `app2`

```bash
ping app2
```

#### host

It's Container shares the host's network stack. No network isolation. Run with Host Network (Linux only):

```bash
docker run --network host myimage
```

`NB:` This disables container-level networking isolation. Use with care.

#### overlay

For `multi-host` communication. Works only with Docker `Swarm` or `Kubernetes`.

- Enable Swarm

```bash
docker swarm init
```

- Create Overlay Network

```bash
docker network create -d overlay my-overlay-net
```

`NB:` Then deploy services using that network.

#### ipvlan

The ipvlan driver gives fine-grained control over container network configuration — particularly IP addressing and routing behavior. It’s powerful for advanced setups like underlay networking, data centers, or custom VLANs.

- Create ipvlan

```bash
docker network create -d ipvlan \
  --subnet=192.168.100.0/24 \
  --gateway=192.168.100.1 \
  -o ipvlan_mode=l3 \
  -o parent=eth0 \
  ipvlan-net
```

- Then run a container

```bash
docker run --rm --network ipvlan-net alpine ip a
```

#### macvlan

Assigns real IPs from your LAN to containers. Good for legacy applications or when containers must be directly accessible on the network.

- Create macvlan network:

```bash
docker network create -d macvlan \
  --subnet=192.168.1.0/24 \
  --gateway=192.168.1.1 \
  -o parent=eth0 \
  macvlan-net
```

- Then run a container:

```bash
docker run --rm --network macvlan-net myimage
```

`NB:` Make sure your NIC supports macvlan and you're not trying to access the container from the same host (use a separate NIC or workaround like an internal bridge).

### Why Docker Networking Matters

- Connect containers securely.
- Enable microservices to communicate.
- Control access between services.
- Expose services to the outside world.

### Docker Networks

| Network Type | Default? | Inter-Container?     | External Access  | Use Case                          |
| ------------ | -------- | -------------------- | ---------------- | --------------------------------- |
| **bridge**   | ✅ Yes    | ✅ Yes (same network) | ✅ NATed via host | Default; isolated apps            |
| **host**     | ❌ No     | ❌ (uses host stack)  | ✅ Full access    | High-performance apps             |
| **none**     | ❌ No     | ❌                    | ❌                | Completely isolated (no network)  |
| **overlay**  | ❌ No     | ✅ Yes                | ✅ Cross-host     | Docker Swarm, multi-host clusters |
| **macvlan**  | ❌ No     | ✅ Yes                | ✅ Native network | Assign IPs from local LAN (L2)    |
