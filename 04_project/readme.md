# Multi-Container Application with Python and Redis

This Docker Compose setup involves two services:
1. **web**: A Python web application container.
2. **redis**: A Redis container used as a cache for the Python app.

## Services

- **web**: The Python web application is built using the `python:3.11-slim` image. It connects to Redis for caching.
- **redis**: A Redis container used to handle caching, based on the lightweight Alpine image.

## Running the Application

```bash
docker-compose up -d

##Access the Application
Python app: http://localhost:8000
Redis: Port 6379 ##(internally accessed by the Python app)