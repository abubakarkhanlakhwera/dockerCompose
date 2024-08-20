# Reverse Proxy with NGINX and Load-Balanced Services

This Docker Compose setup uses:
1. **reverse-proxy**: An NGINX container that serves as a reverse proxy, load balancing incoming requests.
2. **web**: Multiple instances of a Node.js application behind the NGINX reverse proxy.

## Services

- **reverse-proxy**: NGINX acts as a load balancer, distributing traffic between the instances of the web application.
- **web**: The Node.js application, running 3 replicas for load balancing.

## Running the Application

```bash
docker-compose up -d

## Access the NGINX reverse proxy at http://localhost