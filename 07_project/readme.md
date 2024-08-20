# Docker Compose with Multiple Networks - PHP and MySQL

This Docker Compose setup involves:
1. **web**: A PHP web application running on Apache.
2. **db**: A MySQL database.

The services are connected via two Docker networks: `front` for external access and `back` for internal communication.

## Services

- **web**: The PHP application, connected to both `front` (public access) and `back` (internal communication) networks.
- **db**: The MySQL database, connected to the `back` network for security.

## Running the Application

```bash
docker-compose up -d

## PHP app: http://localhost:8080