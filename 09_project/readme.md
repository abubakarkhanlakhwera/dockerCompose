# Docker Compose with Service Dependencies and Delayed Start - Ruby on Rails, Redis, and PostgreSQL

This Docker Compose setup demonstrates how to manage service dependencies and ensure a delayed start for dependent services.

## Services

- **web**: A Ruby on Rails application that connects to both Redis and PostgreSQL.
- **postgres**: A PostgreSQL database for the Rails app.
- **redis**: A Redis cache for improving performance.

## Delayed Start

The Rails application starts with a delay (`sleep 10`) to ensure that PostgreSQL and Redis are fully up and running before the app starts.

## Running the Application

```bash
docker-compose up -d

## Rails app: http://localhost:3000
## PostgreSQL: Port 5432
## Redis: Port 6379

