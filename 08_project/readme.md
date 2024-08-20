# Docker Compose with Secrets Management - Django and PostgreSQL

This Docker Compose setup manages secrets using Docker secrets in a Django and PostgreSQL environment. Sensitive information like database credentials is stored securely.

## Services

- **web**: A Django application connected to PostgreSQL using credentials managed by Docker secrets.
- **postgres**: A PostgreSQL database.

## Secrets Management

The following secrets are managed by Docker:
- **db_user**: Stored in `secrets/db_user.txt`.
- **db_password**: Stored in `secrets/db_password.txt`.

## Running the Application

```bash
docker-compose up -d

## Django app: http://localhost:8000
## PostgreSQL: Port 5432, with credentials injected via Docker secrets.